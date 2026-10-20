# SCaLA website first version

The site uses the existing al-folio v1 theme, locked gems, Jekyll collections, native page/about layouts, and Jekyll Scholar. No replacement framework or local Tailwind build is introduced.

Content reference: https://searhein.github.io/ and its repository at commit `818117391c61abfdd0fc355c4ffc8c4b1c9aef05`. People, active projects, research themes, software, and bibliography are adapted from that source. The Group page includes faculty, postdocs, PhD candidates, master’s and bachelor’s students, internship students, visitors, and alumni from both former-member and former-student categories. Membership and opportunities should be reviewed before public launch. No group photograph was available; equal-weight initials are used for member cards.

Both papers.bib and talks.bib are imported in full. Only relative PDF/slides/poster/video asset links are converted to absolute links on the personal website, avoiding duplicate storage and broken links. Bibliographic content is preserved. The starter sample collections are excluded; the project and news collections contain actual group content.

Brand colours: TU Delft Brandbook EN, https://filelist.tudelft.nl/Websections/Huisstijl/Merk/Brandbook_en.pdf. Cyan #00A6D6, black and white; dark blue #0C2340 and royal blue #0076C2 are secondary colours. Royal blue gives readable links on white. The appended CSS rules in assets/css/main.scss retain the complete gem entry imports and override theme tokens for light and dark modes. Keep .al-folio-overrides.yml under version control and audit it when upgrading gems.

Preview infrastructure stays in the separate Sites source repository. The source website remains on codex/website-al-folio-v1. Do not push or merge GitHub main, run a Pages deployment, or publish publicly without an explicit request.

Homepage highlights are derived from the bibliography with `bundle exec ruby bin/update-homepage.rb`. It shows two publications and two recent/upcoming talks, with links to complete entries. LinkedIn uses the existing profile URL from the personal site's configuration; no scraped posts or invented group account is used. Specific post links or a SCaLA LinkedIn URL can be added when supplied. Opportunities link to maintained vacancy/project listings without claiming unverified jobs. Home and Group remain separate pages.
