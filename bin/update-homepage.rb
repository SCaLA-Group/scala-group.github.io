# frozen_string_literal: true
# Derive compact homepage highlights from the complete bibliographies.
require 'bibtex'
require 'yaml'
MONTHS = %w[jan feb mar apr may jun jul aug sep oct nov dec].freeze
papers = BibTeX.open('_bibliography/papers.bib').entries.values
recent = papers.sort_by { |e| [e[:year].to_s.to_i, (MONTHS.index(e[:month].to_s.downcase[0, 3]) || -1)] }.reverse.first(2)
def highlight(entry)
  names = entry[:author]
  first = names.respond_to?(:first) ? names.first.to_s : names.to_s.split(' and ').first
  { 'key' => entry.key, 'title' => entry[:title].to_s.delete('{}'), 'authors' => first + (names.respond_to?(:length) && names.length > 1 ? ' et al.' : ''), 'year' => entry[:year].to_s, 'month' => entry[:month].to_s.capitalize }
end
talks = BibTeX.open('_bibliography/talks.bib').entries.values
featured_talks = %w[Heinlein:2026:BIRS:ALN Heinlein:2026:ICRAFMN:LET].map { |key| talks.find { |e| e.key == key } }.compact
result = { 'publications' => recent.map { |e| highlight(e) }, 'talks' => featured_talks.map { |e| highlight(e).merge('detail' => e[:note].to_s.delete('{}')) } }
File.write('_data/homepage.yml', result.to_yaml)
