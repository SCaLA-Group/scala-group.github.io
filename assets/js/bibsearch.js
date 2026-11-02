import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  // Native disclosures keep older years compact while retaining all entries in the DOM.
  const yearGroups = [];
  document.querySelectorAll("[data-collapse-years]").forEach((list) => {
    const headings = [...list.querySelectorAll(":scope > h2.bibliography")];
    const yearNav = document.querySelector("[data-bibliography-year-nav]");
    if (yearNav && headings.length) {
      const links = headings.map((heading) => {
        if (!heading.id)
          heading.id = `year-${heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent.trim();
        return link;
      });
      yearNav.replaceChildren(...links);
    }
    if (headings.length < 2) return;
    headings.forEach((heading, index) => {
      const entries = [];
      let next = heading.nextElementSibling;
      while (next && !(next.tagName === "H2" && next.classList.contains("bibliography"))) {
        entries.push(next);
        next = next.nextElementSibling;
      }
      const group = document.createElement("details");
      group.className = "scala-year-group";
      group.open = index === 0;
      group.dataset.defaultOpen = String(group.open);
      const summary = document.createElement("summary");
      const count = document.createElement("span");
      count.className = "scala-year-count";
      const total = entries.reduce((n, item) => n + item.querySelectorAll("li").length, 0);
      count.textContent = `${total} ${list.classList.contains("scala-talks") ? (total === 1 ? "talk" : "talks") : total === 1 ? "publication" : "publications"}`;
      heading.before(group);
      summary.append(heading, count);
      group.append(summary, ...entries);
      yearGroups.push(group);
    });
  });

  // actual bibsearch logic
  const filterItems = (searchTerm) => {
    document.querySelectorAll(".bibliography, .unloaded").forEach((element) => element.classList.remove("unloaded"));

    // highlight-search-term
    if (CSS.highlights) {
      const nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
      (nonMatchingElements || []).forEach((element) => {
        element.classList.add("unloaded");
      });
    } else {
      // Simply add unloaded class to all non-matching items if Browser does not support CSS highlights
      document.querySelectorAll(".bibliography > li").forEach((element, index) => {
        const text = element.textContent.toLowerCase();
        if (text.indexOf(searchTerm) == -1) {
          element.classList.add("unloaded");
        }
      });
    }

    yearGroups.forEach((group) => {
      group.hidden = !group.querySelector("ol.bibliography > li:not(.unloaded)");
      group.open = searchTerm ? !group.hidden : group.dataset.defaultOpen === "true";
    });

    document.querySelectorAll("h2.bibliography").forEach(function (element) {
      if (element.closest(".scala-year-group")) return;
      let iterator = element.nextElementSibling; // get next sibling element after h2, which can be h3 or ol
      let hideFirstGroupingElement = true;
      // iterate until next group element (h2), which is already selected by the querySelectorAll(-).forEach(-)
      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const ol = iterator;
          const unloadedSiblings = ol.querySelectorAll(":scope > li.unloaded");
          const totalSiblings = ol.querySelectorAll(":scope > li");

          if (unloadedSiblings.length === totalSiblings.length) {
            ol.previousElementSibling.classList.add("unloaded"); // Add the '.unloaded' class to the previous grouping element (e.g. year)
            ol.classList.add("unloaded"); // Add the '.unloaded' class to the OL itself
          } else {
            hideFirstGroupingElement = false; // there is at least some visible entry, don't hide the first grouping element
          }
        }
        iterator = iterator.nextElementSibling;
      }
      // Add unloaded class to first grouping element (e.g. year) if no item left in this group
      if (hideFirstGroupingElement) {
        element.classList.add("unloaded");
      }
    });
  };

  const updateInputField = () => {
    clearTimeout(timeoutId);
    const hashValue = decodeURIComponent(window.location.hash.substring(1));
    const target = document.getElementById(hashValue);
    const query = target ? "" : hashValue;
    document.getElementById("bibsearch").value = query;
    filterItems(query.toLowerCase());

    const currentYear = target?.closest(".scala-year-group")?.querySelector("h2") || (!query ? yearGroups[0]?.querySelector("h2") : null);
    document.querySelectorAll("[data-bibliography-year-nav] a").forEach((link) => {
      if (currentYear && link.hash === `#${currentYear.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });

    // Known fragments navigate to their target; other fragments remain search queries.
    if (target) {
      const yearGroup = target.closest(".scala-year-group");
      if (yearGroup) yearGroup.open = true;
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  };

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  document.getElementById("bibsearch").addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(() => filterItems(searchTerm), 300);
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  updateInputField(); // Update filter when page loads
});
