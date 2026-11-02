# SCaLA website first version

The site uses the existing al-folio v1 theme, locked gems, Jekyll collections, native page/about layouts, and Jekyll Scholar. No replacement framework or local Tailwind build is introduced.

Content reference: https://searhein.github.io/ and its repository at commit `818117391c61abfdd0fc355c4ffc8c4b1c9aef05`. People, active projects, research themes, software, and bibliography are adapted from that source. The Group page includes faculty, postdocs, PhD candidates, master’s and bachelor’s students, internship students, visitors, and alumni from both former-member and former-student categories. Membership and opportunities should be reviewed before public launch. Individual member pages are generated under `_pages/people/`. Where the existing personal group directory supplies a real portrait, the same public image source is used; all portraits are presented with a consistent square crop. Members without a reliable portrait use matching initials tiles.

Both papers.bib and talks.bib are imported in full. Only relative PDF/slides/poster/video asset links are converted to absolute links on the personal website, avoiding duplicate storage and broken links. Bibliographic content is preserved. The starter sample collections are excluded; the project and news collections contain actual group content.

Brand colours use the supplied SCaLA logo values: `color1 = #0076C2` and `color2 = color1!80!black` (`#005E9B`). The appended CSS rules in `assets/css/main.scss` retain the complete gem entry imports and use these colours for the site accents. Keep `.al-folio-overrides.yml` under version control and audit it when upgrading gems.

Preview infrastructure stays in the separate Sites source repository. The source website remains on codex/website-al-folio-v1. Do not push or merge GitHub main, run a Pages deployment, or publish publicly without an explicit request.

Homepage highlights are derived from the bibliography with `bundle exec ruby bin/update-homepage.rb`. The “Research highlights” cards use entries marked `recent`, sorted by year/month, retaining bibliography order for ties. Dates are bibliographic dates and may reflect acceptance or publication rather than the first preprint. The generator derives titles, authors, dates, and status from BibTeX and preserves all curated talk fields. Deployment refreshes it before building; `--check` detects stale publication metadata. The two talk cards remain separately curated, with links to complete entries. LinkedIn uses the existing profile URL from the personal site's configuration; no scraped posts or invented group account is used. Specific post links or a SCaLA LinkedIn URL can be added when supplied. Opportunities link to maintained vacancy/project listings without claiming unverified jobs. Home and Group remain separate pages.

The SCaLA logo source supplied by the group is preserved under `docs/branding/`. The web wordmark uses the same nine-node network, SCaLA lettering, and colours. It is used sparingly on Home, while the network mark is used as the favicon.

The portrait scan of the personal group directory found reliable portrait references for Alexander Heinlein, Amirreza (Pouyan) Sadat Madani, Arturo De Marinis, Corné Verburg, Filipe Antônio Cumaru Silva Alves, Giacomo Bottacini, Ksenia Slepova, Sahir Sujahudeen, Shreyas Prashanth, and Yuhuang Meng. Shivang Sachar's listed EPFL image URL is time-limited and was already expired, so it is intentionally not used.

## Information architecture

Research projects use `status: current` or `status: previous` in `_projects/` front matter. The listing keeps those sections separate, with compact previous-project cards. The [2 November status review](PROJECT_STATUS_AUDIT_2026-11-02.md) records evidence for all 12 entries: four current and eight previous. FSCI and the original 4TU-AMI initiative have moved to previous. For historical FASTMath, MALI and LDRD entries, the label describes an earlier research contribution rather than closure of the wider programme or software.

The homepage research gallery is maintained in `_data/research_gallery.yml`. Ten slides mix four research topics (multiscale solvers, virtual cardiac cohorts, adaptive PINN collocation, and finite-basis KANs) and four software packages (FROSch, FEDDLib, Trilinos and NGSolve), plus two community photos linked to blog stories (COMinDS 2024 and EuroTUG 2023). Research slides link to the corresponding member project or bibliography entry; software slides link directly to their section on the software page. The software slides use the official FROSch, Trilinos and NGSolve logos, plus the arterial simulation image from the FEDDLib project site. Logos link directly to the respective project homepage; the caption call to action links to the local software section. All assets are copied unchanged, with source credits and provenance in `docs/IMAGE_RIGHTS_AUDIT.md`. The earlier software schematics and combined overview remain as unused assets.

Research figures are unchanged downloads from Cumaru et al. (arXiv:2610.16359v1, Fig. 12a), Kevopoulos et al. (arXiv:2608.09460v1, Fig. 2), Visser et al. (published PACMANN article, DOI 10.1016/j.cma.2025.118723, Fig. 1), and Howard et al. (arXiv:2406.19662v2, Fig. 1). Captions credit the source figures, and the data records exact download URLs and available licence information. The first three are CC BY 4.0. PACMANN uses the published figure and its published licence, rather than inferring a reuse licence from the arXiv version. The Howard figure retains the unresolved rights finding documented in `docs/IMAGE_RIGHTS_AUDIT.md`. The original personal-site figures are not used.

Every gallery slide has a short descriptive paragraph in its `description` field. A compact footer combines the icon-only previous/next and Play/Pause buttons, the slide counter and the section links. Controls retain accessible names, hover tooltips and keyboard operation; touch devices keep 44-pixel button targets. Gallery rotation starts automatically every six seconds, pauses on hover, keyboard focus and hidden browser tabs, and stops after manual navigation. Previous/next and Play/Pause controls work with the keyboard. Autoplay also starts with reduced motion enabled; slide changes are instant, without animation. Without JavaScript, the first figure and all research/project/software links remain available. On phones, the gallery follows the introduction, with research highlights immediately after it.

The primary navigation is intentionally concise: **Group, Research, Publications, Talks, Teaching, Blog, and Opportunities**. Projects and Software are secondary research destinations linked from Research. Teaching has its own section because courses, thesis supervision, and student learning are central group activities. Positions, visits, internships, collaboration, and contact guidance are grouped under Opportunities. News remains surfaced from Home with a link to the complete News page.

## Branding update

The website uses the exact SCaLA vector geometry converted from the supplied rendered logo PDF. The logo is recoloured to the TU Delft palette: cyan `#00A6D6` for the primary mark and dark blue `#0C2340` for the contour. Royal blue `#0076C2` remains the accessible link/theme colour. The favicon is a crop of the same exact vector network mark.

The inner-page header uses the native al-folio header with only its text brand replaced by the SCaLA SVG; the homepage retains its existing hero branding. Navigation, mobile controls, search, and theme switching remain upstream. The new personal portrait is pending an owner-supplied file or URL.

### Colour consistency

Brand colours remain TU Delft cyan (`#00a6d6`), blue (`#0076c2`) and navy (`#0c2340`). Text links, homepage accents, gallery controls and decorative link icons share the same theme-aware accent: `#0068ac` in light mode and `#51c5ea` in dark mode. The darker light-mode link colour maintains a 5.39:1 contrast ratio against the pale homepage panels (`#f0f6fa`); the dark-mode accent has 7.42:1 contrast against the dark panels (`#172a35`). Unused original software diagrams use the same brand colours and neutral surfaces. Official software logos retain their own colours, and the FEDDLib application image retains its original colour mapping. Published research images keep their original palettes and legends because they depict different quantities; they are not recoloured to imply a common numerical scale. Publication status colours retain their distinct meanings across the homepage and publication list.

### Blog

`/blog/` is a compact story listing linked from the main navigation and homepage News section. The original COMinDS 2024 and EuroTUG 2023 stories were migrated from the personal website, preserving their historical dates, named author and substantive content. Images are local copies under `assets/img/blog/`, with responsive sizing and descriptive alternative text. Post source URLs are retained in front matter. The stale announcement of a future EuroTUG 2024 was phrased as a historical announcement. Each post links back to the blog listing. Story titles and descriptions are included in the custom search index; Jekyll generates the year/category/tag archives and feed.

Add new dated Markdown files under `_posts/` with `layout: post`, `published: true`, a title, date, description, author and local thumbnail. The default for posts is `published: false` so the existing starter demo posts remain hidden. Blog navigation uses order 5.5, between Teaching and Opportunities. Short announcements remain in `_news/`; longer reports belong in `_posts/`.

Photo reuse follows the owner's request to reuse the existing blog photos and his statement that he believes reuse is allowed. This is recorded as an owner-requested reuse basis, not as a verified photographer permission or public licence. See `docs/IMAGE_RIGHTS_AUDIT.md`.

Pages can opt into a compact breadcrumb above their title with `parent_title` and `parent_url` in front matter. The course catalogue uses Teaching → Courses, replacing the standalone body link. Other pages retain their existing headers.

Active group cards use a compact heading, project/affiliation text and a flex-wrapped link row. The text column has a 180-pixel minimum height to align with the 120 × 180 portrait or initials block; its links sit at the bottom. All 16 active cards fit that height at standard desktop sizes. The column can expand for enlarged text, and the minimum height is removed below 480 pixels where the photo and text stack. Alumni retain their separate compact cards.

Full member profiles, academic account links, professional background and their editorial sources are documented in [Member profiles](MEMBER_PROFILES.md).

The shared page hierarchy, breadcrumbs and section menus are described in [Site navigation](NAVIGATION.md).

The latest end-to-end review and remaining editorial items are recorded in [the 26 October audit](AUDIT_2026-10-26.md).

Content gaps, the 63-file download migration, additional member verification and remaining permission evidence are tracked in [the 1 November completion report](OPEN_POINTS_2026-11-01.md).

## Homepage freshness, 1 November 2026

The homepage gallery contains four research and four software slides. The historical COMinDS/EuroTUG photographs remain in their blog stories. “Latest from SCaLA” groups the newest published blog post, general news and one featured talk in a single section. The blog item uses its description, date and local URL, without a duplicate homepage image. It requires no separate homepage entry when a new post is added. News records can set `related_post` to the story URL so the current featured story is not duplicated in the homepage news list. Complete blog, news and talk lists remain linked.

## Layout refinement, 1 November 2026

Page titles use a responsive size and consistent spacing. Direct article paragraphs and lists are limited to 74 characters per line, with comfortable line spacing; card grids and tables retain their available width. Research and Software use the shared `.scala-topic-grid`, with two columns on larger screens and one below 768 pixels. Section IDs and existing links are retained.

Cards share softer corners and aligned final links. Blog cards keep their story links aligned even when titles vary in length. Homepage blog, news and talks share a single unboxed section, with the existing automatic content selection unchanged. The hero title is slightly smaller and the gallery aligns with the top of the introduction.

On phones, active-member photos and initial placeholders are 88 by 132 pixels, beside their text. Desktop listing photos remain 120 by 180 pixels; profile-page photos retain their own sizing. Member cards keep their grid layout independently of the general card flex layout.

## Homepage simplification, 1 November 2026

The homepage has three main visual bands: introduction/gallery, Latest from SCaLA, and research highlights. Latest uses three equal columns on desktop and one column on phones. Its category labels are subordinate to the single section heading. Research highlights retain bibliography-derived statuses in compact unboxed entries. The full research introduction is retained; repeated gallery destination links and the duplicate blog image are removed, and collaboration links sit in a small closing row rather than a large panel. Existing gallery captions, credits, controls and autoplay are retained.

## Unified page headers, 2 November 2026

Page titles and local navigation share one header. Short titles and their menus sit alongside each other on larger screens; long titles and small screens cause the menu to wrap as a whole. Descriptions follow when they add context. Top-level menu pages omit redundant Home/current-page breadcrumbs, while detail pages retain their hierarchy. Group category links moved from the body into this header, with shorter student labels and no generic introduction or duplicate automatic outline. All category links remain visible. See [navigation](NAVIGATION.md) for implementation and regression checks.

## Consistent headers, 2 November 2026

The unified header now comes from one component, `_includes/scala_page_header.liquid`, used by pages, blog posts and archives. Section menus and bibliography search share the same controls container; title sizes, alignment, gaps and mobile wrapping no longer depend on page-specific header modifiers. Course context and blog publication metadata use one compact metadata style. Breadcrumbs depend on an actual parent relationship rather than `nav` visibility, so independent pages such as Contact do not acquire an extra row. Generic front-matter descriptions remain in SEO metadata; the homepage introduction is unchanged.

## Persistent submenu, 2 November 2026

A single context submenu now stays below the primary navigation while scrolling on every page except the homepage. Group categories, Research/Teaching/Blog sections, and bibliography year shortcuts occupy this shared bar. Section links are no longer repeated beside page titles. The bar stays one line high on phones with horizontal scrolling; category highlighting and anchor offsets account for both visible bars. Profiles retain their local content outline separately from links back to Group categories. See [navigation](NAVIGATION.md) for behaviour and implementation.

## Teaching overview, 2 November 2026

The overview uses two open sections instead of equal-height cards: the latest academic year’s courses, with course codes and teaching periods, followed by current student projects, with student names and thesis levels. Each section uses compact two-column rows on desktop and a single column on phones. Course titles retain their official Study Guide destinations; project titles retain their member-page project anchors. Catalogue and student links sit alongside section headings, and a small enquiry row links to opportunities.

## Visual consistency follow-up, 2 November 2026

Profile section headings share the main article hierarchy, with smaller project subtitles. Card titles and Teaching overview section headings use a consistent medium weight. Nested profile and blog prose follows the existing 74-character reading measure while image rows, tables and cards retain their layout widths. Teaching and bibliography disclosures share caret styling, heading scale and readable metadata colours. Keyboard focus uses the active theme's link colour. The agreed compact headers, right-aligned desktop submenus, submenu-free homepage, aligned gallery, portrait sizes, category separation, publication action/status row and collapsible archives are retained.

Verification for this follow-up: 18 representative pages in both themes at 320, 390, 768, 1100 and 1440px; no overflow or automated accessibility findings. The current 174-page build has no broken local destinations or fragments. Navigation, 50 member profiles, Teaching, site controls/search, gallery, expandable bibliography years and Blog regressions pass. Development and root-URL production builds pass.

Gallery destination links and source/licence credits share one row, aligned left and right, with wrapping on narrow screens. The image area uses the saved space so the desktop panel retains its alignment with the introduction.

Page-heading review: the shared title rule uses a 1.8–2.25rem responsive size, regular (400) weight, 1.2 line height and balanced wrapping for long titles. Main section headings remain 1.4–1.8rem at medium (500) weight; smaller component headings intentionally retain their compact scales. The homepage hero typography is separate and unchanged. Redundant older page-title sizing rules were removed.

## Research section, 2 November 2026

Research presents three illustrated themes using the existing gallery's licensed/original figures and shared credits. Figures link to their full-size assets; theme links connect methods to publications, member projects, current collaborations and software. Projects retain the reviewed current/previous split, with two-column current cards and a compact previous-project list. Project detail pages use shared descriptions, context labels, programme/period metadata and return links. “Previous research contribution” remains distinct from a programme's closure. Existing people links are explicit where named in current project descriptions. Software retains all four gallery anchors and uses existing official logos where available, with a plain heading for FEDDLib; no new image-reuse permission is asserted. The wound-care description was reorganised into concise paragraphs without claiming clinical deployment or validated treatment outcomes.

Research-section verification: all 15 overview/detail routes pass accessibility checks in both themes and responsive checks at 320, 390, 768, 1100 and 1440px. Current/previous counts remain 4/8; the three historical-contribution labels and all four software anchors are preserved. Navigation/gallery regressions, the full local-link scan, formatting, and development/root-URL production builds pass.
