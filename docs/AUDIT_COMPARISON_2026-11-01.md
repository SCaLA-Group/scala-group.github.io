# Website audit and comparison, 1 November 2026

## Changes applied

The section menu is visible again. Breadcrumbs establish the hierarchy above the title; sibling links sit below the title and description, with a marked current location. Links wrap on phones instead of disappearing inside a disclosure. Research, Teaching, Blog and News follow the same pattern. The primary menu marks the parent section on detail pages and identifies Home correctly on the homepage.

The Teaching overview now contains current courses and active student research. It no longer repeats the section menu as category cards. Automatic page outlines are suppressed when a contextual menu already exists. Course links retain their official StudyGuide destinations.

The homepage introduction is shorter while retaining the expanded SCaLA name and its numerical analysis, scientific computing and machine learning scope. Existing automated latest-blog selection, current news, upcoming talk, research highlights and eight-slide research/software gallery remain. Historical workshops stay in the blog archive.

Research themes now link directly to related software, publications and funded projects. These links help visitors move from a general topic to concrete work without adding large cards or lengthy introductory text.

## Comparison with other groups

- [Bath Numerical Analysis and Data Science](https://bath-numerical-analysis.github.io/) makes People, Research, Teaching and seminars easy to discover. Its [teaching page](https://bath-numerical-analysis.github.io/teaching/) groups actual course links. Applied here: visible section navigation and useful course content on the Teaching overview. Bath's seminar calendar is a useful future pattern if SCaLA establishes a recurring public seminar programme.
- [Oxford Climate Modelling](https://climate-modelling.github.io/) connects concise introductory text with visual research highlights. Its [project listing](https://climate-modelling.github.io/projects/) makes research topics and student opportunities concrete. Applied here: a shorter introduction and direct research-to-project links. Existing current/previous project distinctions remain; no speculative openings were added.
- [Uppsala Scientific Machine Learning](https://sciml.se/) provides paths from research areas into projects and software, alongside news and opportunities. Applied here: direct theme-to-software/publication/project links. SCaLA already has dedicated opportunities and contact guidance.
- [Oxford Numerical Analysis](https://www.maths.ox.ac.uk/groups/numerical-analysis) offers direct access to members, research, events and news. Its information architecture supports SCaLA's concise primary menu. Its older page-update date also illustrates why dated news and automatically selected recent stories are preferable to manually maintained homepage announcements.

These comparisons concern public content and navigation structure, rather than copying another institution's branding or implying SCaLA offers the same activities.

## Verification

The audit covers generated pages, the homepage, primary and contextual menus, profiles, research/project/software pages, teaching, publications, talks, blog and archive routes. Browser checks cover narrow screens, keyboard use, theme changes, search, gallery controls, year expansion and JavaScript fallbacks. Production checks cover local URLs and fragments, metadata, canonical URLs and the sitemap.

The navigation regression explicitly requires all six Teaching choices to be visible on the overview, Courses and Master's project pages, after the page title, with one current marker and no duplicate outline. A missing submenu now fails the check.

Validated results:

- All 171 content/error pages pass automated WCAG A/AA and best-practice checks in both light and dark themes, with no horizontal overflow at 320, 768 or 1440 pixels. The legacy People redirect is checked separately.
- Production Jekyll build succeeds; all 11 gem-owned overrides are acknowledged.
- All 172 generated HTML pages pass the local URL/fragment scan; there are no remaining personal-site asset-download dependencies.
- Canonical URLs, descriptions, heading counts and sitemap checks pass for the production domain. Redirect/error routes are excluded from the sitemap.
- Site, navigation, teaching, profiles, blog, gallery, year-list and download regressions pass. The 63 migrated PDFs match their recorded hashes.
- Repository-wide Prettier and `git diff --check` pass.

The build still emits an upstream Ruby time-zone deprecation and the al-folio legacy-markup detector warning. Neither stops the build. The detector includes the carousel's accessibility role; existing annotation markup also uses legacy attributes. Tested interactive controls work without enabling an additional compatibility bundle.

Automated accessibility checks supplement visual and keyboard checks; they are not a certification of full accessibility or an external-link availability audit.

## Remaining editorial work

Photographer/rights-holder clearance for the existing member portraits and historical event photos is still unconfirmed; see [image reuse checklist](IMAGE_REUSE_CHECKLIST.md). The audit does not establish permission. Existing missing member-project descriptions and academic-profile links remain documented in [open points](OPEN_POINTS_2026-11-01.md); they should be supplied or verified rather than inferred.

The original downloadable PDF archive is large, but its files load only when requested. The downloads retain their original bytes. Future additions should use web-sized figures and thumbnails while retaining original documents separately.

Useful next content improvements are fresh group/event stories, new project results and verified member updates. A public seminar calendar would help only if there is an actual maintained programme. The current navigation does not need another top-level menu item for each of these.
