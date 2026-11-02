---
layout: page
title: group
permalink: /group/
description: The researchers, students, and visitors who make up SCaLA.
nav: true
nav_order: 1
---

{% assign groups = 'faculty|postdoctoral researchers|phd candidates|master students|bachelor students|internship students|visitors|alumni' | split: '|' %}
<nav class="scala-section-nav scala-group-nav" aria-label="Group sections" data-page-sections>
{% for group in groups %}
{% assign members = site.data.people | where: 'category', group %}
{% if members.size > 0 %}
<a href="#{{ group | slugify }}">{% case group %}{% when 'postdoctoral researchers' %}Postdocs{% when 'phd candidates' %}PhD candidates{% when 'master students' %}Master’s students{% when 'bachelor students' %}Bachelor’s students{% else %}{{ group | capitalize }}{% endcase %}</a>
{% endif %}
{% endfor %}
</nav>

<div class="scala-member-groups">
{% for group in groups %}
{% assign members = site.data.people | where: 'category', group %}
{% if members.size > 0 %}
<section class="scala-member-group" aria-labelledby="{{ group | slugify }}">
<h2 id="{{ group | slugify }}">{% if group == 'phd candidates' %}PhD candidates{% else %}{{ group | capitalize }}{% endif %}</h2>
<div class="scala-grid {% if group == 'alumni' %}scala-archive-grid{% else %}scala-people{% endif %}">
{% for member in members %}
{% assign member_project = site.data.member_projects[member.id] %}
{% assign teaching_project = site.data.teaching.projects | where: 'id', member_project.teaching_project_id | first %}
{% assign project_title = member_project.title | default: teaching_project.title %}
{% assign project_summary = member_project.summary | default: teaching_project.summary %}
{% if group == 'alumni' %}
<article class="scala-card scala-archive-card scala-alumni-card">
<h3><a href="{{ member.profile_url | relative_url }}">{{ member.name }}</a></h3>
{% unless member.role == 'Former member' %}<p class="scala-archive-meta">{{ member.role }}</p>{% endunless %}
{% if project_title %}
<p class="scala-alumni-project"><a href="{{ member.profile_url | relative_url }}#project">{{ project_title | escape }}</a></p>
{% else %}
<a href="{{ member.profile_url | relative_url }}#project">Project details</a>
{% endif %}
</article>
{% else %}
<article class="scala-card">
{% if member.photo %}
<img class="scala-portrait scala-portrait-card" data-portrait-initials="{{ member.initials | escape }}" src="{{ member.photo | relative_url }}" alt="{{ member.name }}" width="120" height="180" loading="lazy">
{% else %}
<div class="scala-avatar" aria-hidden="true">{{ member.initials }}</div>
{% endif %}
<div class="scala-member-details">
<div class="scala-member-heading">
<h3><a href="{{ member.profile_url | relative_url }}">{{ member.name }}</a></h3>
<p class="scala-role">{{ member.role }}</p>
</div>
<div class="scala-member-copy">
<p>{{ member.university }}</p>
{% if project_title %}<p class="scala-detail">{{ project_title | escape }}</p>{% endif %}
{% if member.note %}<p class="scala-detail">{{ member.note }}</p>{% endif %}
</div>
<div class="scala-member-links">
<a href="{{ member.profile_url | relative_url }}#project">{{ member_project.link_label | default: 'Project' | escape }}</a>{% if member.website %}<a href="{{ member.website }}">External profile</a>{% endif %}
{% if member.email %}<a href="mailto:{{ member.email }}">Email</a>{% endif %}
</div>
</div>
</article>
{% endif %}
{% endfor %}
</div>
</section>
{% endif %}
{% endfor %}
</div>
