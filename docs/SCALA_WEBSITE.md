# SCaLA website first version

The site uses the existing al-folio v1 theme, locked gems, Jekyll collections, native page/about layouts, and Jekyll Scholar. No replacement framework or local Tailwind build is introduced.

Content reference: https://searhein.github.io/ and its repository at commit `818117391c61abfdd0fc355c4ffc8c4b1c9aef05`. People, active projects, research themes, software, and bibliography are adapted from that source. The Group page includes faculty, postdocs, PhD candidates, master’s and bachelor’s students, internship students, visitors, and alumni from both former-member and former-student categories. Membership and opportunities should be reviewed before public launch. Individual member pages are generated under `_pages/people/`. Where the existing personal group directory supplies a real portrait, the same public image source is used; all portraits are presented with a consistent square crop. Members without a reliable portrait use matching initials tiles.

Both papers.bib and talks.bib are imported in full. Only relative PDF/slides/poster/video asset links are converted to absolute links on the personal website, avoiding duplicate storage and broken links. Bibliographic content is preserved. The starter sample collections are excluded; the project and news collections contain actual group content.

Brand colours use the supplied SCaLA logo values: `color1 = #0076C2` and `color2 = color1!80!black` (`#005E9B`). The appended CSS rules in `assets/css/main.scss` retain the complete gem entry imports and use these colours for the site accents. Keep `.al-folio-overrides.yml` under version control and audit it when upgrading gems.

Preview infrastructure stays in the separate Sites source repository. The source website remains on codex/website-al-folio-v1. Do not push or merge GitHub main, run a Pages deployment, or publish publicly without an explicit request.

Homepage highlights are derived from the bibliography with `bundle exec ruby bin/update-homepage.rb`. It shows two publications and two recent/upcoming talks, with links to complete entries. LinkedIn uses the existing profile URL from the personal site's configuration; no scraped posts or invented group account is used. Specific post links or a SCaLA LinkedIn URL can be added when supplied. Opportunities link to maintained vacancy/project listings without claiming unverified jobs. Home and Group remain separate pages.


The SCaLA logo source supplied by the group is preserved under `docs/branding/`. The web wordmark uses the same nine-node network, SCaLA lettering, and colours. It is used sparingly on Home, while the network mark is used as the favicon.

The portrait scan of the personal group directory found reliable portrait references for Alexander Heinlein, Amirreza (Pouyan) Sadat Madani, Arturo De Marinis, Corné Verburg, Filipe Antônio Cumaru Silva Alves, Giacomo Bottacini, Ksenia Slepova, Sahir Sujahudeen, Shreyas Prashanth, and Yuhuang Meng. Shivang Sachar's listed EPFL image URL is time-limited and was already expired, so it is intentionally not used.


## Information architecture

The primary navigation is intentionally concise: **Group, Research, Publications, Talks, Teaching, and Opportunities**. Projects and Software are secondary research destinations linked from Research. Teaching has its own section because courses, thesis supervision, and student learning are central group activities. Positions, visits, internships, collaboration, and contact guidance are grouped under Opportunities. News remains surfaced from Home with a link to the complete News page.


## Branding update

The website uses the exact SCaLA vector geometry converted from the supplied rendered logo PDF. The logo is recoloured to the TU Delft palette: cyan `#00A6D6` for the primary mark and dark blue `#0C2340` for the contour. Royal blue `#0076C2` remains the accessible link/theme colour. The favicon is a crop of the same exact vector network mark.

The inner-page header uses the native al-folio header with only its text brand replaced by the SCaLA SVG; the homepage retains its existing hero branding. Navigation, mobile controls, search, and theme switching remain upstream. The new personal portrait is pending an owner-supplied file or URL.
