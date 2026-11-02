# Content completion, 1 November 2026

## Project-description review

Six descriptions previously flagged for wording review have been checked against their sources. Their `review_needed` flags are now false, with `reviewed_on` and `review_source` recorded in `_data/member_projects.yml`. Shared teaching records were updated where applicable.

- Thai Ha Bui: retained the influence-estimation topic, shortened the description and omitted unpublished results and assessment.
- Ruben Dortland: checked the later 22 October note and clarified probabilistic net-load forecasting, covariates and architecture comparisons. No results, dataset details or defence planning are published.
- Uzay Eskiköy: retained only Darcy-flow implementation, the scope established by the available note. The title remains descriptive; a registered thesis title is not known.
- Shivang Sachar: checked the broad solver/power-systems topic against the public personal-site announcement. Confidential technical meeting material was not used.
- Amirreza (Pouyan) Sadat Madani: checked the 27 October note and clarified geometry-aware surrogate modelling for perforated monopile design. Internal agreement, evaluation and preliminary experiment details were omitted.
- Ksenia Slepova: tightened the description to PDE-based denoising and segmentation, supported by the published image-processing paper. The broader earlier MRI/learned-model wording was not carried forward without stronger public evidence.

This is a source-based editorial review. It does not certify unknown formal thesis titles or imply that the students approved the wording.

## Member information

Added verified academic links and selected research-background information for Giacomo Bottacini, Tomáš Medřický, Arturo De Marinis, Ksenia Slepova, Sahir Sujahudeen and Thai Ha Bui. Added Yuhuang Meng's ORCID after matching the public ORCID name record with his research identity. Sources and check dates are recorded in `_data/member_profiles.yml`.

ORCID identities were checked against institutional/publisher pages and/or the public ORCID API; similarly named search results were not sufficient. The LinkedIn result for a different Giacomo Bottacini in banking was rejected. No current alumni affiliations were added.

Ezra Cerpac, Elena Gijon Ruiz and Uzay Eskiköy still have no independently verified additional academic account links. Their existing project information remains available. Historical member biographies/accounts remain empty where evidence is missing; their project pages already describe their SCaLA work. Do not infer that an empty field means an account does not exist.

## News and blog

Added a research spotlight dated when this site update was prepared: 1 November 2026. It introduces hybrid iterative solvers and domain-decomposed learning, links the two papers/preprints and connects to the group's research pages. The accompanying News entry links to the story. The date is the post date, not a claimed acceptance date or conference date. No event attendance or new experimental results are invented.

The story is attributed to SCaLA and uses an original conceptual vector illustration, with no claim that it shows measured results. The two historical event stories remain available.

## Historical downloads

All 63 bibliography-linked PDFs previously hosted on the personal site have been copied to the corresponding local asset paths and relinked through the bibliography renderer. Original PDF bytes, including annotations/media, are preserved. SHA-256 checksums and original URLs are recorded in [the migration manifest](DOWNLOAD_MIGRATION.json).

The archive is approximately 824 MiB. Downloads are requested on demand; they are not embedded in homepage content. An optimisation trial reduced a sample's size but changed text encoding, so the compressed version was rejected. The source originals remain unchanged in the personal-site checkout as well. Further size reduction should preserve searchable text, links, annotations and embedded content before replacing originals.

## Image permissions

The FBKAN gallery figure with an unverified reuse basis was replaced by an original SCaLA schematic of local-to-global learning. The original file remains in the checkout but is excluded from the generated website. The caption clearly identifies the replacement as a schematic.

Public evidence still does not establish photographer/rights-holder permission for the portraits and conference photographs, or the exact licence of the FEDDLib artery image. Existing images remain as requested previously; no public licence or consent is invented. See [the remaining evidence checklist](IMAGE_REUSE_CHECKLIST.md). Completing those permission records requires information from the relevant rights holders; no permission requests have been sent.

## Verification

The production build contains 172 HTML pages and is approximately 878 MiB including the migrated archive. The generated local-link/fragment scan found no broken destinations and no remaining personal-site asset-download links. All 63 PDFs match their source SHA-256 checksums, open as PDFs (2,879 pages in total) and return PDF responses from the preview. The original FBKAN raster is absent from production output and the original schematic is included.

Profile, blog, gallery and general site browser regressions pass. The new story and representative expanded profiles were additionally checked at four widths and in both colour themes. Homepage highlights still match the bibliography, the production build and override audit pass, and changes remain uncommitted for review.
