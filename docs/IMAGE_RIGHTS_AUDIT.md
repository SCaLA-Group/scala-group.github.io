# Website image-rights audit — 25 October 2026

## Scope and conclusion

Inventoried the generated website, rather than every unused starter asset: three gallery figures, ten portraits, and three branding assets (wordmark, favicon and social preview). Two gallery figures have a verified public reuse licence. The FBKAN figure and ten portraits do not have a fully documented reuse basis in the evidence checked. “Unverified” does not mean that use is necessarily prohibited; it means this audit cannot establish permission.

The owner confirmed that no specific reuse permission had been requested for the research figures and was unsure about portrait permissions. No permission is inferred from coauthorship, an existing profile page, a successful image download, or the repository’s MIT software licence. No displayed images were changed during this audit.

This checks images displayed by the webpages, favicon and social metadata. It does not individually clear figures inside linked/downloadable PDF theses, project descriptions or slides. Unused starter images excluded from the build are outside the displayed-image inventory.

## Gallery figures

| File and source                                                                                                                                                                                        | Verified basis                                                                                                                                                                                                                                                           | Result                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/img/research/multiscale-heterogeneity.png` — Cumaru, Hajibeygi, Vuik and Heinlein, Figure 12(a), [arXiv:2610.16359v1](https://arxiv.org/html/2610.16359v1#S5.F12)                              | The [submission’s licence link](https://arxiv.org/abs/2610.16359v1) points to [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No separate restriction is stated in this figure’s caption.                                                                     | Reuse permitted under that licence. Current caption links the authors/source and the licence.                                                                                                                                                     |
| `assets/img/research/cardiac-virtual-cohorts.png` — Kevopoulos, Moscoloni, Alheit, Beeche, Chirinos, Heinlein and Peirlinck, Figure 2, [arXiv:2608.09460v1](https://arxiv.org/html/2608.09460v1#S2.F2) | The [submission’s licence link](https://arxiv.org/abs/2608.09460v1) points to [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No separate restriction is stated in this figure’s caption.                                                                     | Reuse permitted under that licence. Current caption links the authors/source and the licence.                                                                                                                                                     |
| `assets/img/research/fbkan-architecture.png` — Howard, Jacob, Helfert, Heinlein and Stinis, Figure 1, [arXiv:2406.19662v2](https://arxiv.org/html/2406.19662v2#S0.F1)                                  | [The submission](https://arxiv.org/abs/2406.19662v2) uses the [arXiv non-exclusive distribution licence](https://arxiv.org/licenses/nonexclusive-distrib/1.0/license.html). That grants distribution rights to arXiv; it is not a public Creative Commons reuse licence. | Reuse not established by the public licence. Author-retained rights may cover this use, but the applicable author/publisher rights agreement was not available to verify. Linking to the paper remains the alternative to reproducing the figure. |

CC BY 4.0 permits redistribution with appropriate credit, a licence link, and an indication of modifications if made. The current credit lines contain author attribution, source links and licence links. The local PNGs were checked against their original download URLs; the source-hash check is recorded below. No copyrighted figure was redrawn or modified as a workaround.

The FBKAN acknowledgments identify pykan as the tool used for the KAN diagrams. A software licence for a plotting tool does not itself license the resulting assembled figure. The paper’s linked Neuromancer directory contains tutorial notebooks; no separately licensed copy of the exact graphical abstract was established there. [Springer Nature’s retained-rights guidance](https://www.springernature.com/us/policies/editorial-policies/third-party-permissions) points authors to their specific publishing agreement; it does not establish the rights under this particular agreement.

## Portraits — all ten displayed images

The nine external portraits are embedded with remote `<img src>` URLs; they are not simply ordinary text links to profile pages. Source response headers did not provide an explicit image-reuse licence for the eight retrievable images. One source returned HTTP 403. The website data and checked source pages do not establish photographer permission. That absence is not proof that permission does not exist.

| Person                            | Actual image source                                                                                                                                                                                                                                                                                                            | Finding                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Giacomo Bottacini                 | [Source image](https://phd-dads.polimi.it/wp-content/uploads/2025/07/Screenshot-2025-07-01-at-22.57.42-800x800.png) (phd-dads.polimi.it)                                                                                                                                                                                       | No verified reuse licence or permission record.                                                                                         |
| Filipe Antônio Cumaru Silva Alves | [Source image](https://filelist.tudelft.nl/_processed_/4/8/csm_cumaru_f_de4f165110.webp) (filelist.tudelft.nl)                                                                                                                                                                                                                 | No verified reuse licence or permission record.                                                                                         |
| Arturo De Marinis                 | [Source image](<https://t.e7096c671.entry.domains/HtIwcAiXRsOMWdbORTxL5PkdVpQ=/501x726:1211x1436/451x451/filters:strip_exif()/https%3A%2F%2Ffilelist.tudelft.nl%2FLR%2FOrganisatie%2FAfdelingen%2FDepartment_Space_Engineering%2FA_SM%2FImg%2FArturo%2520de%2520Marinis.jpeg%3Fhash%3D774bb26baa>) (t.e7096c671.entry.domains) | No verified reuse licence or permission record.                                                                                         |
| Alexander Heinlein                | Owner-supplied portrait                                                                                                                                                                                                                                                                                                        | Requested by the person pictured; photographer’s rights not documented.                                                                 |
| Yuhuang Meng                      | [Source image](https://filelist.tudelft.nl/_processed_/d/6/csm_Meng_Yuhuang_f96b1f07ef.webp) (filelist.tudelft.nl)                                                                                                                                                                                                             | No verified reuse licence or permission record.                                                                                         |
| Shreyas Prashanth                 | [Source image](https://filelist.tudelft.nl/_processed_/5/6/csm_kkjzs6_4261a99015.webp) (filelist.tudelft.nl)                                                                                                                                                                                                                   | No verified reuse licence or permission record.                                                                                         |
| Amirreza (Pouyan) Sadat Madani    | [Source image](https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=CaodVroAAAAJ&citpid=2) (scholar.googleusercontent.com)                                                                                                                                                                                | No verified reuse licence or permission record.                                                                                         |
| Ksenia Slepova                    | [Source image](https://filelist.tudelft.nl/_processed_/7/3/csm_wl16nq_31763815f4.webp) (filelist.tudelft.nl)                                                                                                                                                                                                                   | No verified reuse licence or permission record.                                                                                         |
| Sahir Sujahudeen                  | [Source image](https://i1.rgstatic.net/ii/profile.image/11431282098077104-1777588262089_Q512/Sahir-Sujahudeen.jpg) (i1.rgstatic.net)                                                                                                                                                                                           | No verified reuse licence or permission record. Source retrieval returned HTTP 403; this is not evidence of permission or infringement. |
| Corné Verburg                     | [Source image](https://filelist.tudelft.nl/_processed_/e/1/csm_verburg_c_62e9588aa4.jpg) (filelist.tudelft.nl)                                                                                                                                                                                                                 | No verified reuse licence or permission record.                                                                                         |

For Alexander’s supplied original and the resized website copy, the checked metadata did not identify a usable copyright/photographer permission statement. Being pictured in the photograph is distinct from owning its copyright. For the other portraits, permission concerning the person pictured is also not documented in this repository.

[TU Delft’s Copyright Information Point](https://www.tudelft.nl/en/library/support/copyright) distinguishes copyright/reuse permission from portrait rights and explains that publishing an image online is not evidence of an open licence. A practical alternative while rights remain unverified is the existing initials placeholder plus a link to the person’s official profile.

## Branding

| Asset                        | Provenance                                                                                      | Finding                                                                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `assets/img/scala-logo.svg`  | Converted from the SCaLA logo supplied for this site; original TikZ source in `docs/branding/`. | Owner-supplied group branding. No third-party stock image identified. Independent ownership/assignment documents were not supplied. |
| `assets/img/scala-mark.svg`  | Network mark from the same SCaLA logo.                                                          | Same provenance and qualification as the wordmark.                                                                                  |
| `assets/img/scala-share.png` | Social preview generated from the supplied SCaLA branding.                                      | Same provenance and qualification; no third-party photograph used.                                                                  |

The MIT licence in the repository belongs to the al-folio software and is not treated as a blanket licence for paper figures or portraits.

## Recommended disposition

- Keep the Cumaru and CAN-FLOW figures with their source and CC BY credits.
- Replace or withhold the FBKAN graphical abstract unless an applicable author-retained right, public figure licence or rights-holder permission can be documented. Retain the paper link.
- Use initials for portraits whose reuse rights remain unverified, or replace them with images having a documented reuse basis. Do not infer reuse permission merely by switching between a copied file and a remote image URL.
- Retain the owner-supplied SCaLA branding; preserve its provenance.

These recommendations were recorded without changing the live preview. No messages or permission requests were sent to authors, photographers or institutions.

## File integrity evidence

All three files match the exact arXiv image download recorded in `_data/research_gallery.yml`. SHA-256 checksums:

- `multiscale-heterogeneity.png`: `8f4f4a81560841cc64480debcd23434e6a3f5c1e40e02400ec097e68e2dbf1d3`
- `cardiac-virtual-cohorts.png`: `963b524164fecce035bee06b56453c1c97782b83d977dc11f4d8350ecdb9e9f1`
- `fbkan-architecture.png`: `0173ba4a0a4f135bad4a1e45c60185301b7f7025be867ff217b905226a809285`

## Software gallery addition

`assets/img/research/software-overview.svg` is an original graphic created for this website. It uses plain-text package names (FROSch, FEDDLib, Trilinos and NGSolve) and original geometric illustrations; it incorporates no third-party logo, screenshot or paper figure. Package descriptions were checked against the [FROSch website](https://shylu-frosch.github.io/), [FEDDLib repository](https://github.com/FEDDLib/FEDDLib), [Trilinos website](https://trilinos.github.io/) and [NGSolve documentation](https://ngsolve.org/). This addition does not change the findings for the existing research figures or portraits.

## Gallery expansion

The expanded gallery alternates four research topics with four dedicated software slides. `software-frosch.svg`, `software-feddlib.svg`, `software-trilinos.svg` and `software-ngsolve.svg` are original schematics created for this site, without copied logos, screenshots or numerical results. The earlier `software-overview.svg` is no longer displayed.

The added `pacmann-adaptive-points.jpg` is the unchanged published Figure 1 from Visser, Heinlein and Giovanardi, [PACMANN](https://doi.org/10.1016/j.cma.2025.118723). The [published version in the TU Delft repository](https://repository.tudelft.nl/file/File_e999b476-53be-4215-bcf8-752739b31312?preview=1) explicitly states CC BY 4.0. The image was downloaded from [Elsevier's figure CDN](https://ars.els-cdn.com/content/image/1-s2.0-S0045782525009958-gr1_lrg.jpg), with no cropping or redrawing. The figure caption describes the method's gradient-ascent schematic and gives no separate third-party credit. The gallery credits all three authors and links the paper and licence. The arXiv version's non-exclusive distribution licence was not used as the reuse basis.

Published PACMANN figure SHA-256: `193c7ecd5e2e5fe99c6dd9b3f770c69e02382f851db5bc6e3bd8f93074951a7f`.

## Conference and blog photo candidates

Three slide candidates are prepared in `_data/gallery_photo_candidates.yml`, with the original image URLs, descriptive captions, dimensions and links back to the corresponding blog stories. These entries are not loaded by the homepage. Visually inspected candidates:

- COMinDS 2024 group photo, 1181 × 786 pixels.
- COMinDS 2024 poster-session photo, 1181 × 786 pixels.
- EuroTUG 2023 group photo, 1716 × 1094 pixels.

Sources: [COMinDS workshop story](https://searhein.github.io/blog/2024/cominds-workshop-2024/) and [EuroTUG meeting story](https://searhein.github.io/blog/2023/eurotug2023/). The source posts do not provide an explicit photographer credit or public reuse licence for these photographs. The inspected JPEG/XMP metadata did not establish an artist, rights holder or reuse licence. Existing publication on the personal blog is recorded as provenance, without treating it as proof of reuse permission. Photographer identification has been requested from Alexander; his earlier uncertainty about portrait permissions is not treated as approval for these separate event photos.

Once a reuse basis is established, add the chosen candidates to `_data/research_gallery.yml` with the correct credit. Prefer the COMinDS poster discussion and EuroTUG group photo initially, spaced among research and software slides, rather than several consecutive photos from the same event. Keep dates in the captions so historical events remain clearly identified.

## Blog migration and owner-requested photo reuse

Alexander subsequently requested integrating the blog and stated: “I think we are allowed to use the photos”. The two original stories and their nine photographs are now copied into the site. This supersedes the earlier decision to leave those images as undisplayed candidates. The COMinDS poster-session image and EuroTUG group photograph also appear in the homepage gallery, linked to the migrated stories. Photographer and licence fields remain unconfirmed; no Creative Commons licence or named photographer is claimed. This records the owner's reuse request and belief accurately, without turning it into a verified permission statement.

The eight COMinDS images retain their source filenames under `assets/img/blog/2024-cominds/`; the EuroTUG group photo is under `assets/img/blog/2023-eurotug/`. They were copied unchanged from the personal website, without cropping or redrawing. Original source URLs and reuse provenance are recorded in post/gallery front matter. No permission requests were sent to anyone.

## Official software visuals

At Alexander's request, the four original software schematics in the gallery have been replaced by unchanged assets from the official project sites. The old schematics remain as unused local assets. Logos retain their original colours and aspect ratios, are displayed on a white field with surrounding space, and link directly to the relevant project homepage. The separate call to action still leads to the local software section. The logos identify the referenced software rather than representing SCaLA branding or endorsement.

| Local asset                              | Source                                                                                          | Notes                                                                                                                                                                                                                                                     |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/img/software/frosch-logo.png`    | [FROSch official asset](https://shylu-frosch.github.io/images/FROSch_logo.png)                  | Official logo, copied unchanged; no public Creative Commons licence claimed.                                                                                                                                                                              |
| `assets/img/software/feddlib-artery.jpg` | [FEDDLib official asset](https://feddlib.github.io/assets/img/artery_fsci_realistic_square.jpg) | Application image from the official project homepage, copied unchanged. Exact underlying publication and public image licence are unconfirmed; no paper licence is inferred.                                                                              |
| `assets/img/software/trilinos-logo.png`  | [Trilinos official asset](https://trilinos.github.io/images/Trilinos_Logo_RGB_Stacked_Navy.png) | Official logo, copied unchanged. The LF Projects trademark policy expressly permits an official logo as a link to the project homepage; the image links there and the caption identifies LF Projects. This is not treated as a general copyright licence. |
| `assets/img/software/ngsolve-logo.png`   | [NGSolve official asset](https://ngsolve.org/_static/logo1.png)                                 | Official logo, copied unchanged; no public Creative Commons licence claimed.                                                                                                                                                                              |

Policy checked: [LF Projects trademark policy](https://lfprojects.org/policies/trademark-policy/), especially the permission for official project logos used as links to project homepages. The FROSch website repository contains an MIT licence, but its existence alone is not used to assert a separate trademark permission. No photographer/author permission requests were sent and no broad reuse licence is asserted for the other project assets.

Downloaded file SHA-256 checksums:

- `frosch-logo.png`: `8cccef25c32d5811b554c5770c71018f0eafe4132d819568c638d7ea39b03725`.
- `feddlib-artery.jpg`: `f303095edb7264f91a11fdb6142f6817d3ebdd78c31402e0cd2392ae77acd697`.
- `trilinos-logo.png`: `8197d9bfd94af66f2400af1822a69cd5b668025cbbecc6aba6139c05794e5588`.
- `ngsolve-logo.png`: `dad99c8dd8e2a4f0e9d627b80da63d675d8b74346fb1287c99bdd38e9484a868`.

## Update, 1 November 2026

The unverified FBKAN graphical abstract has been replaced in the gallery by an original SCaLA SVG schematic, also used in the new research spotlight. The old raster is excluded from generated output. Remaining portrait/event-photo/FEDDLib evidence gaps are itemised in [Image reuse checklist](IMAGE_REUSE_CHECKLIST.md); no permissions are inferred or requests sent.
