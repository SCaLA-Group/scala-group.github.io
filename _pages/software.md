---
layout: page
title: Software
permalink: /software/
description: Open-source software and computational tools.
nav: false
---

<p class="scala-research-intro">Open-source tools for scalable solvers, finite elements and scientific computing.</p>
<div class="scala-software-grid" data-page-sections>
  {% for software in site.data.research_software %}
    <section class="scala-software-entry" id="{{ software.id }}" aria-labelledby="{{ software.id }}-title">
      <div class="scala-software-header">
        {% if software.image %}<div class="scala-software-identity"><img src="{{ software.image | relative_url }}" alt="{{ software.alt | escape }}" width="120" height="76" loading="lazy" decoding="async"></div>{% endif %}
        <h2 id="{{ software.id }}-title">{{ software.name | escape }}</h2>
      </div>
      <p>{{ software.description | escape }}</p>
      <nav class="scala-topic-links" aria-label="{{ software.name }} resources">
        {% for link in software.links %}<a href="{% if link.url contains '://' %}{{ link.url }}{% else %}{{ link.url | relative_url }}{% endif %}">{{ link.label | escape }}</a>{% endfor %}
      </nav>
    </section>
  {% endfor %}
</div>
