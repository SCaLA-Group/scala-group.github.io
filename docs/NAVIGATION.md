# Site navigation

The main menu identifies the active section even on its subpages. Subpage breadcrumbs start at Home and show the hierarchy down to the current page. Top-level navigation pages omit the redundant breadcrumb line. Research and teaching pages also have compact links between sibling sections, with the current location marked. Blog and News link to each other.

The shared hierarchy is resolved in `_includes/scala_navigation_context.liquid`. `_includes/scala_sticky_submenu.liquid` renders a single persistent secondary bar below the fixed main menu on every page except the homepage. The bar contains navigation links only; the section label is omitted to avoid repeating the page heading below. Existing section links have moved into that bar, rather than being duplicated beside titles. Every page, post and blog archive still uses `_includes/scala_page_header.liquid` for consistent titles, optional metadata and bibliography search. The homepage retains its dedicated introduction and gallery layout.

- Member pages belong to Group.
- Research projects and software belong to Research; individual projects also link through Projects.
- Teaching categories belong to Teaching. Course details link through Courses; thesis and internship details resolve their category from `_data/teaching.yml`.
- Blog posts and archives belong to Blog. Individual news items link through News.
- Other pages receive Home and their current title. Explicit `parent_title`/`parent_url` remain a fallback for additional sections.

The default layout renders breadcrumbs only when a real parent section or explicit parent URL exists, independently of whether the page appears in the main menu. Page, post and archive layouts render the shared header once. All section navigation lives in the persistent secondary bar. Avoid adding separate top-of-page back links. Existing bottom-of-page return links can remain useful on long pages.

Pages with at least four level-two headings receive a collapsed “On this page” section menu through `assets/js/scala-site.js`. Bibliographies, pages with a contextual menu and pages declaring `data-page-sections` are excluded. This is progressive enhancement: breadcrumbs and sibling navigation work without JavaScript. Anchors clear the fixed header.

Own-site overrides of the default/page/post/archive layouts, header and stylesheet are recorded in `.al-folio-overrides.yml`. Run `node test/scala-navigation.cjs` against the preview after changing the hierarchy or layout.

## Long bibliography lists

Talks and publications opt into `data-collapse-years` on their bibliography wrapper. `assets/js/bibsearch.js` turns the existing year groups into native disclosures, opening only the first (latest) year. Each summary includes the year and total entry count. Search covers every year, opens matching groups and hides empty groups; clearing the search restores the latest-year view. A direct citation/talk fragment opens its year before scrolling. Without JavaScript the complete list remains visible. Run `node test/scala-years.cjs` for these interactions.

## Visible section menus, 1 November 2026

Teaching, Research, Blog and News use visible contextual links with an active marker in the sticky bar. Teaching keeps the same six section choices on its overview and subpages. The overview body shows current courses and active student research instead of duplicating the category choices as cards. No disclosure needs opening to discover sibling pages. Group category links use shorter student labels and replace the automatic page outline; the generic Group introduction is omitted. At desktop widths of 1100px and above, submenu links align to the right, matching the main navigation. On smaller screens they remain left aligned on one horizontally scrollable row, retaining accessible touch targets.

## Bibliography headers

Publications and Talks opt into `bibliography_page: true`. Their accessible search field belongs to the page header, alongside the title on desktop and immediately below it on phones. Generic introductory descriptions remain in metadata but do not add a visible row. The latest year remains open, older years remain expandable, and search continues to include all years. Bibliography year summaries omit the duplicated upstream heading border and padding.

## Persistent secondary navigation, 2 November 2026

Group uses category anchors on the listing and links back to those categories from member profiles. The current Group category is highlighted as the page scrolls. Research, Teaching and Blog use their existing section destinations. Publications and Talks derive year shortcuts from the rendered bibliography; choosing a year reveals it without turning the shortcut into a search query. Opportunities and Contact share related destinations. Independent pages offer project, software, news and contact routes. The homepage omits the submenu to keep its introduction uncluttered.

The bar is sticky below `#navbar`. A ResizeObserver maintains CSS variables for both bar heights, including mobile menu expansion, and anchor offsets account for the combined height. No-JavaScript browsing retains normal section links and a “Browse by year” fallback for bibliographies. Shortcuts and links remain keyboard accessible; mobile links can be swiped horizontally. Regression checks cover sticky position, category highlighting, unobscured anchors and year shortcuts.

## Capitalization

Site-authored page titles, section headings and navigation labels use sentence case, with an initial capital. Personal names, official course/project names and original publication, thesis and talk titles retain their source spelling. Blog tag display names live in `_data/tag_labels.yml`, preserving names such as GAMM, SciML and FROSch without changing tag keys or archive URLs.
