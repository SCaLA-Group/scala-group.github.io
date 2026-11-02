---
layout: page
title: Projects
permalink: /projects/
description: Collaborative projects connecting algorithms and applications.
nav: false
---

{% assign current_projects = site.projects | where: 'status', 'current' | sort: 'importance' %}
{% assign previous_projects = site.projects | where: 'status', 'previous' | sort: 'importance' %}
<div class="scala-project-list" data-page-sections>
<section aria-labelledby="current-projects">
  <div class="scala-research-section-heading"><h2 id="current-projects">Current projects</h2><span>{{ current_projects.size }} projects</span></div>
  <div class="scala-grid scala-current-projects">
    {% for project in current_projects %}
      <article class="scala-card">
        <h3><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h3>
        <p>{{ project.description | escape }}</p>
        {% assign programme = project.project_programme %}
        {% if programme == project.title %}{% assign programme = null %}{% endif %}
        {% if programme or project.project_period %}<p class="scala-research-project-meta">{{ programme | escape }}{% if programme and project.project_period %} · {% endif %}{{ project.project_period | escape }}</p>{% endif %}
      </article>
    {% endfor %}
  </div>
</section>
<section aria-labelledby="previous-projects">
  <div class="scala-research-section-heading"><h2 id="previous-projects">Previous projects</h2><span>{{ previous_projects.size }} projects</span></div>
  <ul class="scala-previous-projects">
    {% for project in previous_projects %}
      <li><h3><a href="{{ project.url | relative_url }}">{{ project.title | escape }}</a></h3><p>{{ project.description | escape }}</p></li>
    {% endfor %}
  </ul>
</section>
</div>
