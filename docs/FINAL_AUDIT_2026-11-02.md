# Final website audit, 2 November 2026

For the subsequent content revisions and WebKit checks, see the [3 November audit](AUDIT_2026-11-03.md).

This pass covers the current 174-page site after the content corrections, the author's 2025 date for “Decomposing Physics-Informed Neural Networks”, and the university/partner labels on thesis projects. It preserves the agreed layout and content decisions. No commit, push or deployment was performed.

## Finding fixed

The deployment CSS-cleanup step could silently do nothing with the existing configuration export. Reproduced using PurgeCSS 7.0.2: the CLI returned an empty result, and the CSS files were byte-for-byte unchanged. Its configuration loader uses dynamic `import()` and reads named properties; the previous CommonJS object appeared only under the module's default export.

Changed `purgecss.config.js` to explicit `exports.content`, `exports.css`, `exports.output`, `exports.skippedContentGlobs` and `exports.safelist`. These work through both CommonJS `require()` and dynamic `import()`, with the existing paths and safelist retained. No dependency or deployment-command change was needed.

Verified the actual CLI against a temporary generated-site fixture: used selectors survive, an unused selector is removed, and runtime-only tooltip/zoom selectors survive through the safelist. Then applied the configuration to a copy of the production site. `main.css` decreased from 75,162 to 61,877 bytes; `tailwind.css` from 27,355 to 16,390 bytes. Temporary audit tooling and the test build live under `/tmp`; they are not new site dependencies.

The [PurgeCSS configuration reference](https://purgecss.com/configuration) documents the content, CSS, output and safelist options. The import behaviour above was verified directly against the installed CLI and with a fixture; it is an observed compatibility issue, not a claim that every PurgeCSS/Node version behaves identically.

## Checks completed

| Area                    | Result                                                                                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Browser sweep           | All 174 routes checked in Chromium at 390px and 1440px; no detected horizontal overflow, obscured initial heading, broken loaded image or JavaScript exception.                                                                           |
| Accessibility           | All 174 routes checked in light theme against axe WCAG A/AA and best-practice rules; 20 representative pages also checked in dark theme. No detected violations.                                                                          |
| Production CSS          | After real CSS purging, 20 representative routes checked in both themes at 320, 390, 768 and 1440px; no detected accessibility/layout issue. Homepage, research and thesis-list screenshots reviewed.                                     |
| Production interactions | Menu, keyboard controls, search, skip link, gallery rotation/pause/reduced-motion/no-JS behaviour, year expansion, all-year filtering and bibliography deep links pass against the purged production build.                               |
| Local links/documents   | Full generated-site scan: 174 HTML pages, 322 distinct local targets; no missing targets/fragments, duplicate IDs, missing image alternatives or page-heading warnings.                                                                   |
| Profiles                | All 50 profiles pass link/schema, optional-section, responsive and search checks.                                                                                                                                                         |
| Teaching                | Official course links, year-specific archive anchors, project disclosures, keyboard/direct-link access and responsive layouts pass. The preceding context check verified main-university/partner information across all 67 project cards. |
| Bibliography            | Highlight selection and generated-data freshness pass. The chapter's year is 2025; accepted/submitted status information was not inferred from preprint availability.                                                                     |
| Blog/downloads          | Three stories and blog archives/feed/search pass. All 63 archived PDFs serve locally and match the original-byte manifest.                                                                                                                |
| Builds/indexing         | Local-preview and organisation-root production builds pass. Production canonical, sitemap and robots URLs use `https://scala-group.github.io`, without preview baseurl/localhost leakage.                                                 |
| Formatting/overrides    | Whole-repository Prettier and `git diff --check` pass. All 12 local gem overrides are acknowledged.                                                                                                                                       |
| al-folio compatibility  | Zero blocking upgrade findings. Seven existing non-blocking advisories remain, primarily excluded starter-example markers and the bibliography popover marker.                                                                            |

Automated checks complement visual/keyboard review; they do not prove complete accessibility conformance. Browser checks in this pass used Chromium. Archived PDFs were checked for availability and unchanged bytes, not independently peer-reviewed for scientific correctness.

## Remaining content confirmations

See the [content audit](CONTENT_AUDIT_2026-11-02.md) for the full evidence and exact records. These were retained as uncertainties, not silently rewritten:

- Portrait, workshop-photo and FEDDLib-image reuse evidence is still incomplete: [image checklist](IMAGE_REUSE_CHECKLIST.md).
- Ezra's personal affiliation needs confirmation; his project correctly lists TU Delft as the main university and TU Berlin as a collaborator according to the original project record.
- Older student projects for Yijun Wu, Laurynas Varnas and Ezra need current status confirmation. Thijs's defense remains scheduled for 3 November 2026.
- Author-maintained acceptance details and the FBKAN coauthor-name discrepancy need final publisher evidence. The conflicting Frei DOI registry record remains documented; the publisher page supports the retained citation.
- Exact grant/contribution periods remain incomplete for the projects identified in the [project-status review](PROJECT_STATUS_AUDIT_2026-11-02.md). Recheck the two grants currently ending in December in January 2027.
- The separate recording for “Manipulating the PageRank” has not been located; the misleading duplicate video link was removed while the topic remains listed.
- The earlier [external-link audit](AUDIT_EXTERNAL_LINKS_2026-11-02.json) includes blocked/rate-limited endpoints. This pass does not claim that all external sites were independently reverified or that those endpoints are broken.

The ordinary review preview remains at `http://localhost:8080/al-folio/`.
