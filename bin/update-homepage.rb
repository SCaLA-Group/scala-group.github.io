# frozen_string_literal: true
# Refresh publication highlights from bibliography entries marked "recent".
# Talk curation is maintained separately in _data/homepage.yml.
require 'bibtex'
require 'yaml'

MONTHS = %w[jan feb mar apr may jun jul aug sep oct nov dec].freeze
STATUSES = %w[published accepted submitted].freeze

def keywords(entry)
  entry[:keywords].to_s.downcase.split(',').map(&:strip)
end

def publication_highlights(source)
  # BibTeX can silently rename duplicate keys; reject them before parsing.
  keys = source.scan(/^@\w+\s*\{\s*([^,]+),/).flatten
  duplicates = keys.group_by(&:itself).select { |_, occurrences| occurrences.length > 1 }.keys
  raise "Duplicate bibliography keys: #{duplicates.join(', ')}" unless duplicates.empty?

  papers = BibTeX.parse(source).entries.values
  featured = papers.each_with_index.select { |entry, _| keywords(entry).include?('recent') }
  # Equal month/year dates retain editorial bibliography order. Missing months
  # remain unknown; do not manufacture a date from the citation key or arXiv ID.
  featured.sort_by! do |entry, index|
    [-entry[:year].to_s.to_i, -(MONTHS.index(entry[:month].to_s.downcase[0, 3]) || -1), index]
  end
  featured.first(2).map do |entry, _|
    status = keywords(entry) & STATUSES
    raise "Expected one publication status for #{entry.key}" unless status.length == 1

    names = entry[:author]
    first = names.respond_to?(:first) ? names.first.to_s : names.to_s.split(' and ').first
    month = MONTHS.index(entry[:month].to_s.downcase[0, 3])
    {
      'status' => status.first,
      'key' => entry.key,
      'title' => entry[:title].to_s.delete('{}'),
      'authors' => first + (names.respond_to?(:length) && names.length > 1 ? ' et al.' : ''),
      'year' => entry[:year].to_s,
      'month' => month ? MONTHS[month].capitalize : ''
    }
  end
end

if $PROGRAM_NAME == __FILE__
  path = '_data/homepage.yml'
  current = YAML.safe_load(File.read(path))
  updated = current.merge('publications' => publication_highlights(File.read('_bibliography/papers.bib')))
  if ARGV.include?('--check')
    abort 'Homepage highlights are stale. Run bundle exec ruby bin/update-homepage.rb.' unless current == updated
    puts 'Homepage publication highlights match the bibliography.'
  else
    File.write(path, updated.to_yaml)
    puts "Updated publication highlights: #{updated['publications'].map { |entry| entry['key'] }.join(', ')}"
  end
end
