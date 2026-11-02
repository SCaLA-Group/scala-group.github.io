# Website audit follow-up, 24 October 2026

The audit fixes are available in the local preview. They remain uncommitted for review.

## Changes

- Repaired 62 slide URLs and four homepage bibliography anchors. Removed Anouk Zandbergen's unavailable external profile link.
- Kept funded-project descriptions on this site, with explicit links to the consortium sites.
- Collapsed navigation until the complete menu fits, added a skip link and footer links to Contact, Software and Projects.
- Improved light/dark contrast, heading structure and page-header landmarks.
- Replaced publication expansion links and author spans with keyboard-operable buttons. Collapsed content is hidden from accessibility tools; expanded BibTeX can be focused and scrolled.
- Added 160 searchable records for member pages, teaching projects, course records and other pages, alongside the existing navigation/theme actions. Course records without material pages link to their catalogue cards.
- Shared 38 identical member/teaching project titles and summaries through `teaching_project_id`. A person's earlier and current projects remain distinct.
- Enabled Open Graph previews, added an image based on the existing SCaLA logo and described the publisher as a research organization in structured data.
- Added `_config.production.yml` for the organization site's root URL and used it in the deployment workflow. Local development retains `/al-folio/`. No deployment was performed.
- Reduced the local portrait from 459 KB to 31 KB, corrected its member-page URL and excluded the original attachment and unused template media from generated output. Original source material remains in the checkout.
- Disabled unused Masonry/image zoom and unavailable external metric badges. MathJax loads on bibliography pages rather than every page. Manually optimized site images do not need the template image-conversion pass.
- Registered all theme overrides in `.al-folio-overrides.yml` and fixed the existing documentation formatting failure.

## Content that still needs confirmation

The eight note-derived project summaries listed in [MEMBER_PROJECTS.md](MEMBER_PROJECTS.md) still need the author's wording review. No unpublished results or confidential technical detail were added. Student completion dates and older course-status metadata remain deliberately qualified; the audit supplies no new evidence that would justify changing them.

The external-link audit also contains endpoints that denied automated access, timed out or produced temporary server/TLS errors. These were not declared broken and have not been replaced with guessed destinations.

## Verification

Run `node test/scala-site.cjs` against the preview (or set `SCALA_PREVIEW_URL` for a different base URL) to check navigation at five widths, keyboard controls, search, publication anchors and the skip link. Playwright Chromium must be installed.

The follow-up also checks a production build, its PurgeCSS output, all rendered local links and fragments, and automated accessibility in both themes. The live GitHub Pages deployment is intentionally separate from local verification.

Verified results: all 146 rendered HTML pages load, with no broken local URLs or fragments; the site-wide light-theme accessibility findings were resolved (the final news metadata fix was rechecked in both themes). Ten representative pages have no automated dark-theme violations. The browser regression checks pass against both the preview and the CSS-cleaned production build. Prettier and the override audit pass.
