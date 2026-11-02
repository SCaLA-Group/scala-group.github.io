# Site navigation

The main menu identifies the active section even on its subpages. Breadcrumbs start at Home and show the hierarchy down to the current page. Research and teaching pages also have compact links between sibling sections, with the current location marked. Blog and News link to each other.

The shared hierarchy is resolved in `_includes/scala_navigation_context.liquid`. Breadcrumbs appear above the page title; `_includes/scala_section_navigation.liquid` renders visible sibling links below the title and description. Labels and sibling links live in `_data/navigation.yml`. The section include resolves its own context because child layouts render before the default layout.

- Member pages belong to Group.
- Research projects and software belong to Research; individual projects also link through Projects.
- Teaching categories belong to Teaching. Course details link through Courses; thesis and internship details resolve their category from `_data/teaching.yml`.
- Blog posts and archives belong to Blog. Individual news items link through News.
- Other pages receive Home and their current title. Explicit `parent_title`/`parent_url` remain a fallback for additional sections.

The default layout renders breadcrumbs once. Page and post layouts place the section menu below their title; archive layouts receive the menu alongside their breadcrumbs. Avoid adding separate top-of-page back links. Existing bottom-of-page return links can remain useful on long pages.

Pages with at least four level-two headings receive a collapsed “On this page” section menu through `assets/js/scala-site.js`. Bibliographies, pages with a contextual menu and pages declaring `data-page-sections` are excluded. This is progressive enhancement: breadcrumbs and sibling navigation work without JavaScript. Anchors clear the fixed header.

Own-site overrides of the default/page layouts, header and stylesheet are recorded in `.al-folio-overrides.yml`. Run `node test/scala-navigation.cjs` against the preview after changing the hierarchy or layout.

## Long bibliography lists

Talks and publications opt into `data-collapse-years` on their bibliography wrapper. `assets/js/bibsearch.js` turns the existing year groups into native disclosures, opening only the first (latest) year. Each summary includes the year and total entry count. Search covers every year, opens matching groups and hides empty groups; clearing the search restores the latest-year view. A direct citation/talk fragment opens its year before scrolling. Without JavaScript the complete list remains visible. Run `node test/scala-years.cjs` for these interactions.

## Visible section menus, 1 November 2026

Teaching, Research, Blog and News use visible, wrapping contextual links with an active marker. Teaching keeps the same six section choices on its overview and subpages. The overview body shows current courses and active student research instead of duplicating the category choices as cards. No disclosure needs opening to discover sibling pages. On small screens links wrap, retaining accessible touch targets.
