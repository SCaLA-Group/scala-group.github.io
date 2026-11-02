# Member profiles

Every member has a local profile page linked from the group listing and, where names match, from publication author lists. The listing remains compact; fuller information belongs on the individual page.

## Editing a profile

Basic identity, role, contact information and portrait remain in `_data/people.yml`. Project descriptions remain in `_data/member_projects.yml`; see [member projects](MEMBER_PROJECTS.md).

Add optional professional information under the member's existing `id` in `_data/member_profiles.yml`:

- `links`: labelled academic profiles such as ORCID, Google Scholar, ResearchGate, GitHub and LinkedIn. Use complete, verified URLs. Existing `website` links are retained unless `hide_website: true`; duplicate URLs are suppressed.
- `biography`: a list of plain-text paragraphs.
- `research_interests`: a list of short topics.
- `resources`: labelled links to relevant pages on this site, or a section anchor.
- `appointments`: entries with `period`, `position` and `institution`.
- `education`: entries with `period`, `title`, `institution` and optional `description`.
- `service`: entries with `label` and optional `url`.
- `publication_keys`: bibliography keys for selected publications. Their title/year labels are stored in `_data/profile_publications.yml`, copied from `_bibliography/papers.bib`; keep these labels synchronised when bibliography records change. `show_research_highlights: true` instead reuses the homepage's curated selection.
- `publication_names`: exact author-name aliases when a bibliography name differs from the member's full name. These resolve local profile links in publication author lists.
- `sources` and `checked`: internal provenance and verification date; these are not rendered.

Sections without content are omitted. No account should be guessed from a similar name. Missing links need no public placeholder. Historical member pages describe their SCaLA role and project, without trying to maintain current affiliations.

## Initial content and remaining gaps

Alexander Heinlein's profile now brings together his biography, interests, professional academic background, teaching and research links, selected publications, community service and public contact information. Academic dates and thesis titles were checked against his local CV sources. The local CV places the Cologne coordination and postdoctoral appointments through 2021, and identifies the doctoral and diploma thesis titles correctly; older public profile text differs. Private CV header details and the full CV PDF are deliberately not included.

Verified academic links were also added for Filipe Antônio Cumaru Silva Alves, Corné Verburg, Coen Visser, Yuhuang Meng, Konstantinos Kevopoulos and Amirreza (Pouyan) Sadat Madani. Individual source URLs are recorded with each entry. Some profile services block automated requests; published author/homepage references establish identity in those cases.

The remaining members retain their existing contact/external links and project content. Additional biographies, career details and academic accounts remain empty pending reliable information. Yuhuang Meng's ORCID was not added because a primary-source identity match was not established. No current alumni affiliations were inferred.

## Preview and checks

Open `/people/alexander-heinlein/` or follow any member card from `/group/`. Run `node test/scala-profiles.cjs` against the running preview. The profile header/details includes are shared across all member pages. The CSS and bibliography layout are acknowledged own-site overrides; refresh the override registry if those files change.

## Additional verification, 1 November 2026

Verified links and research information were added for six more members, and Yuhuang Meng’s ORCID was matched to his public identity record. The earlier statement that his ORCID was unverified is superseded. See [the completion report](OPEN_POINTS_2026-11-01.md) for sources, remaining gaps and the historical-member scope.
