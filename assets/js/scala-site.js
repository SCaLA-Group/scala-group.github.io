// Site-specific controls; destination links retain the theme's normal behavior.
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const submenu = document.querySelector(".scala-sticky-submenu");
  if (navbar) {
    const updateOffsets = () => {
      document.documentElement.style.setProperty("--scala-nav-height", `${navbar.getBoundingClientRect().height}px`);
      document.documentElement.style.setProperty("--scala-submenu-height", `${submenu?.getBoundingClientRect().height || 0}px`);
    };
    updateOffsets();
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(updateOffsets);
      resizeObserver.observe(navbar);
      if (submenu) resizeObserver.observe(submenu);
    } else {
      window.addEventListener("resize", updateOffsets);
    }
    const groupNav = submenu?.querySelector(".scala-group-nav[data-page-sections]");
    if (groupNav) {
      const links = [...groupNav.querySelectorAll("a")];
      const updateCategory = () => {
        const offset = navbar.getBoundingClientRect().height + submenu.getBoundingClientRect().height + 20;
        let current = links[0];
        for (const link of links) {
          const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
          if (target && target.getBoundingClientRect().top <= offset) current = link;
        }
        for (const link of links) {
          if (link === current) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
        if (current && current !== groupNav.scalaCurrentLink) {
          groupNav.scalaCurrentLink = current;
          groupNav.scrollLeft = current.offsetLeft - groupNav.offsetLeft - (groupNav.clientWidth - current.offsetWidth) / 2;
        }
      };
      let scheduled = false;
      window.addEventListener(
        "scroll",
        () => {
          if (!scheduled)
            requestAnimationFrame(() => {
              updateCategory();
              scheduled = false;
            });
          scheduled = true;
        },
        { passive: true }
      );
      updateCategory();
    }
  }
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
  if (
    article &&
    !article.querySelector(".publications, [data-page-sections]") &&
    !document.querySelector(".scala-context-nav, [data-page-sections]")
  ) {
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
  const teachingCatalogue = document.querySelector(".scala-teaching-catalogue");
  if (teachingCatalogue) {
    const revealCatalogueTarget = () => {
      if (!location.hash) return;
      let target;
      try {
        target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      } catch {
        return;
      }
      if (!target || !teachingCatalogue.contains(target)) return;
      let opened = false;
      for (
        let parent = target.closest("details[data-catalogue-disclosure]");
        parent;
        parent = parent.parentElement.closest("details[data-catalogue-disclosure]")
      ) {
        if (!parent.open) {
          parent.open = true;
          opened = true;
        }
      }
      if (opened) requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    };
    revealCatalogueTarget();
    window.addEventListener("hashchange", revealCatalogueTarget);
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
