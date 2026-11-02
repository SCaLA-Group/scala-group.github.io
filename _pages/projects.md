---
layout: page
title: projects
permalink: /projects/
description: Collaborative projects connecting algorithms and applications.
nav: false
---

<section aria-labelledby="current-projects">
  <h2 id="current-projects">Current projects</h2>
  <div class="scala-grid">
    {% assign current_projects = site.projects | where: 'status', 'current' | sort: 'importance' %}
    {% for project in current_projects %}
      <article class="scala-card"><h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3><p>{{ project.description }}</p><a href="{{ project.url | relative_url }}">About the project →</a></article>
    {% endfor %}
  </div>
</section>

<section aria-labelledby="previous-projects">
  <h2 id="previous-projects">Previous projects</h2>
  <div class="scala-grid scala-archive-grid">
    {% assign previous_projects = site.projects | where: 'status', 'previous' | sort: 'importance' %}
    {% for project in previous_projects %}
      <article class="scala-card scala-archive-card"><h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3><p>{{ project.description }}</p></article>
    {% endfor %}
  </div>
</section>
