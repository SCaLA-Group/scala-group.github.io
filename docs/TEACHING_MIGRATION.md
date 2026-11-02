# Teaching content migration

The Teaching page now links to local course, master’s thesis, bachelor’s thesis, internship, and honours catalogues.

## Imported content

- 34 course records, grouped by academic year.
- Three detailed course pages containing the original teaching material and video links.
- 62 project records displayed by the personal website, plus six student projects already documented on the group site, giving 68 project pages.
- 45 PDF documents copied without modification from the personal website (42,106,072 bytes in total).
- 16 document links on member project pages now point to the local copies.

Source: [personal website repository](https://github.com/searhein/searhein.github.io/tree/master/_teaching), retrieved on 24 October 2026. Each catalogue record retains its source URL. Student details and descriptions added from local records retain their existing source/review notes.

## Editorial choices

- Course history is grouped by academic year. The original source status is retained in the data, but is not presented as a verified current course status: the source labels some 2025/2026 records as ongoing and 2026/2027 records as planned.
- Source records without a public catalogue status were not added to the catalogue.
- Hidden example text in old course source files was not imported as teaching material. The original course titles, institutions, semesters, and instructors are retained.
- Projects belonging to people already in Alumni appear under “Completed and finishing projects,” consistent with the latest roster updates.
- Existing member project summaries are reused where they describe the same thesis; current PhD topics are kept separate from earlier master’s theses.
- Original external repository, vacancy, and video links are retained. Personal-site PDF links now resolve to local assets.

## Missing files or descriptions

All 45 referenced personal-site documents were available and copied successfully. No document is missing.

Only the three original detailed course pages provide teaching material; other course records remain catalogue entries without invented course pages. Several thesis records describe the project only through its title, metadata, and linked PDF; that structure is preserved.

The seven note-based member summaries flagged in [MEMBER_PROJECTS.md](MEMBER_PROJECTS.md) still need a wording review before publication.

## Editing

Catalogue records are in `_data/teaching.yml`. Landing and detail pages are in `_pages/teaching/`. Teaching PDFs retain their original paths under `assets/pdf/`.

## CV reconciliation, 25 October 2026

The course list was reconciled with `cv/sections/teaching_experience/2026-04-17.tex`, the teaching section included by the current full CV and the full research/teaching-statement version. The public CV webpage does not contain this detailed teaching history.

The catalogue now contains 42 academic course offerings and six short-course/tutorial records (48 total). Added Scientific Computing (WI4201) for Q1/Q2 2026/27, ENHANCE (29 June–10 July 2026; Alexander teaches Week 2), the missing 2025/26 Linear Algebra and Optimisation offering, Advanced Reservoir Simulation for 2025/26 and 2026/27, and Fundamentals of AI offerings through 2025/26. Added the EuroTUG 2023/2024 tutorials, DCSE 2023 school, NVIDIA/HLRS 2022 bootcamp, ECCOMAS 2022 introductory lecture, and Milan 2021 school contribution in a separate short-course section.

Corrected Advanced Reservoir Simulation and Numerical Software Development With Finite Elements titles, added David de Laat to the 2026/27 Linear Algebra and Optimisation course, and recorded the teaching roles given in the CV. Scientific Computing (WI4201) lists Vandana Dwarka as co-instructor. The CV identifies the 2011/12 Duisburg-Essen course as Mathematics for Students of Business Informatics, replacing the old personal-site title Introduction to Numerical Mathematics; its existing record ID is retained for stable anchors.

CV-based records retain `cv_source` as editorial provenance. Co-instructors and quarters absent from the CV were not copied from earlier offerings. The 2026/27 Q3/Q4 Scientific Machine Learning offering remains explicitly planned. All 68 student-project records and the existing three material pages are preserved.

## Internship roster correction, 25 October 2026

Removed the two internship project records for Maaike Bukman and Femke Brouwer at the owner's request because they are not his supervised projects. Removed the associated project pages and Femke's member data, profile page and member-project metadata. Maaike was already absent from the group roster. These entries must not be re-imported from the older personal-site records. The catalogue now contains 66 student projects; the 48 course/tutorial records are unchanged. Shared project-description PDFs used by other entries are retained.

## Official course descriptions

25 TU Delft course offerings now link to their matching official Study Guide description: eight current course pages and 17 archived descriptions with page anchors into the correct academic year's PDF. Local course-material links are preserved separately. Verification details and the unmatched contributions are recorded in [STUDYGUIDE_LINKS.md](STUDYGUIDE_LINKS.md).

## Compact catalogue cards, 2 November 2026

Teaching listings use smaller headings, padding and paragraph gaps. Active project cards show a linked title, student/institution metadata, collaboration where applicable and a direct PDF link when supplied. Full supervision and co-supervision information remains on each linked detail page. Repeated “Project details” links are omitted because the title already provides that route. Wide screens fit three active cards per row; narrower screens wrap to two or one. Open, ongoing and archived sections remain separate, with archived cards more compact still. General non-profile cards also have reduced default padding and heading size; member portrait dimensions retain their existing overrides.

## Archive presentation, 2 November 2026

Course years use native disclosures with counts, with only the newest year open initially. Short courses/tutorials and completed/finishing student projects start collapsed. Ongoing projects remain visible. Catalogue fragment links automatically reveal their containing disclosure, and manual expansion works without JavaScript. Project proposals are labelled “Project ideas” with a brief contact link for confirming availability; source status values remain unchanged. Archived projects have stable `project-<id>` catalogue anchors.

## Project universities and partners, 2 November 2026

Project lists (including compact completed-project cards), project detail pages and linked member project sections now share the same university/partner context. `institution` identifies the main university, matching the original site's `university` field; it does not assert that all work physically took place there. `collaboration` lists project partners or collaborating departments. `collaboration_type: industry` labels company collaborations explicitly; other partners retain the neutral “Collaboration” label. A co-supervisor's employer alone is not used to invent a formal partnership.

All migrated project university and collaboration fields were compared with the local source files for searhein.github.io. The public [master's](https://searhein.github.io/master_thesis_projects/) and [bachelor's](https://searhein.github.io/bachelor_thesis_projects/) listings were also checked. External main universities are TU Braunschweig, Università della Svizzera italiana and the University of Stuttgart. TU Berlin remains a collaboration partner for Ezra's TU Delft project, consistent with the original project record; this does not resolve the separate question of his personal affiliation.

The shared context is rendered by `_includes/teaching_project_context.liquid`. Update `_data/teaching.yml` to change it everywhere, including the member profile. Research projects without a linked teaching record retain their existing member-project collaboration fields.

Validation: all 67 project cards display the expected main university and, where supplied, collaboration/industry partner. Representative external-university, industry and member-profile detail pages were checked. No horizontal overflow at 320, 390 or 1440 pixels; teaching regression checks, both builds and override audit passed.
