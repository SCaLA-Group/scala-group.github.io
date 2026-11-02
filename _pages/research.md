---
layout: page
title: Research
permalink: /research/
description: Numerical analysis, high-performance computing, and scientific machine
  learning.
nav: true
nav_order: 2
---

<div class="scala-research-themes" data-page-sections>
  {% for theme in site.data.research_themes %}
    {% assign visual = site.data.research_gallery[theme.gallery_index] %}
    <section class="scala-research-theme" aria-labelledby="{{ theme.id }}">
      <div>
        <h2 id="{{ theme.id }}">{{ theme.title | escape }}</h2>
        <p>{{ theme.summary | escape }}</p>
        <nav class="scala-topic-links" aria-label="{{ theme.title | escape }} resources">
          {% for link in theme.links %}<a href="{{ link.url | relative_url }}">{{ link.label | escape }}</a>{% endfor %}
        </nav>
      </div>
      <figure>
        <a href="{{ visual.image | relative_url }}" aria-label="View illustration for {{ theme.title | escape }}"><img src="{{ visual.image | relative_url }}" alt="{{ visual.alt | escape }}" width="{{ visual.width }}" height="{{ visual.height }}" loading="lazy" decoding="async"></a>
        <figcaption><a href="{% if visual.original or visual.source_internal %}{{ visual.source | relative_url }}{% else %}{{ visual.source }}{% endif %}">{{ visual.credit | escape }}</a>{% if visual.license %} · <a href="{{ visual.license_url }}">{{ visual.license }}</a>{% endif %}</figcaption>
      </figure>
    </section>
  {% endfor %}
  <p class="scala-research-closing">We connect these methods through <a href="{{ '/software/' | relative_url }}">research software</a> and <a href="{{ '/projects/' | relative_url }}">collaborative projects</a>. Interested in working with us? <a href="{{ '/opportunities/' | relative_url }}">Explore opportunities</a>.</p>
</div>
