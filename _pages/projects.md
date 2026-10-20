---
layout: page
title: projects
permalink: /projects/
description: Collaborative projects connecting algorithms and applications.
nav: false
---

Our research is developed in collaboration with partners across disciplines and institutions.

<div class="scala-grid">
{% assign projects = site.projects | sort: 'importance' %}
{% for project in projects %}
<article class="scala-card"><h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2><p>{{ project.description }}</p><a href="{{ project.url | relative_url }}">About the project →</a></article>
{% endfor %}
</div>
