# Bibliography and homepage highlights audit, 25 October 2026

Checked all 98 bibliography records for citation-key uniqueness, status consistency, duplicate DOI/preprint links, and missing dates. Source checks below address the identified discrepancies; this was not a publisher-by-publisher verification of all records.

## Homepage selection

“Sharpened PCG Iteration Bound…” was selected because its bibliography date is October 2026 and the previous generator reversed the file order when several papers shared that date. The generator ignored the existing `recent` keyword. Its [arXiv preprint](https://arxiv.org/abs/2511.12726) was first submitted on 16 November 2025; a bibliographic acceptance/publication date is not the first-preprint date. The bibliography retains the author's accepted status and 2026 date.

The homepage now says **Research highlights** and selects two entries marked `recent`, ordered by year/month, retaining source order on ties. This currently selects Meng:2026:OML and Howard:2025:FBK, consistent with the top two entries on the [personal website](https://searhein.github.io/). Titles, authors, statuses and dates are generated from BibTeX. Missing dates remain unknown. Talk metadata is preserved, and deployment regenerates publication highlights before building.

## Bibliography corrections

The site template omitted the existing `preprint` and `url` fields. Restored inline Preprint and URL buttons, including papers whose only online record is OpenReview.

- Renamed the DD28 proceeding's duplicate `Shang:2025:DDM` key to `Shang:2025:DDN`. The CMAME article keeps `Shang:2025:DDM`; these are distinct works, not duplicate publications.
- Corrected `Heinlein:2021:CML1`'s preprint link, which pointed to the unrelated nonlinear Schwarz paper. The [verified repository record](https://kups.ub.uni-koeln.de/11285/) matches its title and authors.
- Corrected `Heinlein:2019:AGD2`'s preprint link, which pointed to the three-dimensional GDSW paper. It now links to the [two-dimensional conference paper](https://www.ddm.org/dd24/proceedings/PDFs/35_rheinbach_mini_14.pdf).
- Added the missing October month for `Kalvankar:2026:SBE`, matching the author's [personal website](https://searhein.github.io/).

The two chapters with DOI prefix `10.1007/978-3-319-93873-8` have a 2018 print year but 5 January 2019 online publication dates in Crossref's publisher-deposited records. Their existing 2019 years are retained; the 2018 date in TU Delft's repository is not sufficient reason to replace an online publication year.

## Validation and remaining unknown date

After correction: 98 unique citation keys, 75 published, 11 accepted, and 12 submitted records; no duplicate non-empty DOI or preprint URLs. All records have exactly one status keyword. `Dolean:Submitted:DPINN` has no year and remains under **Undated** rather than receiving an inferred date. Many older entries have no month; no month was inferred from citation keys or preprint identifiers.

Run `bundle exec ruby test/scala_highlights.rb` for selection regression checks and `bundle exec ruby bin/update-homepage.rb --check` to detect stale generated highlights.
