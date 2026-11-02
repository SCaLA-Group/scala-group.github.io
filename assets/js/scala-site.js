// Site-specific controls; destination links retain the theme's normal behavior.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img[data-portrait-initials]").forEach((image) => {
    const fallback = () => {
      const avatar = document.createElement("div");
      avatar.className = "scala-avatar" + (image.classList.contains("scala-portrait-profile") ? " scala-avatar-profile" : "");
      avatar.textContent = image.dataset.portraitInitials;
      avatar.setAttribute("aria-hidden", "true");
      image.replaceWith(avatar);
    };
    image.addEventListener("error", fallback, { once: true });
    if (image.complete && !image.naturalWidth) fallback();
  });
  const article = document.querySelector(".post > article");
  if (article && !article.querySelector(".publications, [data-page-sections]") && !document.querySelector(".scala-context-nav")) {
    const headings = [...article.querySelectorAll("h2")];
    if (headings.length >= 4) {
      const outline = document.createElement("details");
      outline.className = "scala-page-outline";
      const summary = document.createElement("summary");
      summary.textContent = "On this page";
      const nav = document.createElement("nav");
      nav.setAttribute("aria-label", "On this page");
      const list = document.createElement("ul");
      headings.forEach((heading, index) => {
        if (!heading.id) {
          let id = `section-${index + 1}`;
          while (document.getElementById(id)) id += "-section";
          heading.id = id;
        }
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        item.append(link);
        list.append(item);
      });
      nav.append(list);
      outline.append(summary, nav);
      article.before(outline);
    }
  }
  document.querySelectorAll("[data-bib-panel] pre").forEach((pre) => {
    pre.tabIndex = 0;
    pre.setAttribute("aria-label", "BibTeX citation");
  });

  document.querySelectorAll("[data-bib-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      if (!panel) return;
      const open = panel.hidden;
      const entry = button.closest(".links").parentElement;
      entry.querySelectorAll("[data-bib-toggle]").forEach((control) => {
        const target = document.getElementById(control.getAttribute("aria-controls"));
        const expanded = control === button && open;
        control.setAttribute("aria-expanded", String(expanded));
        if (target) {
          target.hidden = !expanded;
          target.classList.toggle("open", expanded);
        }
      });
    });
  });

  document.querySelectorAll("[data-author-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(expanded));
      button.querySelector("[data-authors-collapsed]").hidden = expanded;
      button.querySelector("[data-authors-expanded]").hidden = !expanded;
    });
  });
});
