# Run with: bundle exec ruby test/scala_highlights.rb
require_relative '../bin/update-homepage'

source = <<~BIB
  @article{old,
    title = {Older selection}, author = {First Author},
    year = {2026}, month = {December}, keywords = {published}
  }
  @article{first,
    title = {First recent paper}, author = {First Author and Second Author},
    year = {2026}, month = {October}, keywords = {accepted, recent}
  }
  @article{second,
    title = {Second recent paper}, author = {Another Author},
    year = {2026}, month = {October}, keywords = {submitted, recent}
  }
  @article{undated,
    title = {Unknown month}, author = {Another Author},
    year = {2026}, keywords = {submitted, recent}
  }
BIB
highlights = publication_highlights(source)
raise 'Selection must respect recent flags and preserve tie order' unless highlights.map { |e| e['key'] } == %w[first second]
raise 'Statuses must come from BibTeX' unless highlights.map { |e| e['status'] } == %w[accepted submitted]
raise 'Missing dates must remain unknown' unless publication_highlights(source.sub('year = {2026}, keywords', 'year = {2027}, keywords')).first['month'] == ''
begin
  publication_highlights(source + source)
  raise 'Duplicate keys must fail'
rescue RuntimeError => error
  raise unless error.message.start_with?('Duplicate bibliography keys:')
end
puts 'Publication highlight checks passed: editorial selection, tied dates, status, unknown months and duplicate keys.'
