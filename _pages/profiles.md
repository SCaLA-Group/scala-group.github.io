---
layout: page
title: group
permalink: /group/
description: The researchers, students, and visitors who make up SCaLA.
nav: true
nav_order: 1
---

We are SCaLA—Scalable Scientific and Learning Algorithms—a research group at TU Delft. Our work grows through the contributions of researchers, students, visitors, and alumni. We connect mathematical ideas, computational tools, and applications through collaboration.

Members are listed alphabetically within each section. Affiliated researchers and students may work across departments and institutions.

[Faculty](#faculty) · [Postdocs](#postdoctoral-researchers) · [PhD candidates](#phd-candidates) · [Master’s students](#master-students) · [Bachelor’s students](#bachelor-students) · [Visitors](#visitors) · [Alumni](#alumni)

{% assign groups = 'faculty|postdoctoral researchers|phd candidates|master students|bachelor students|internship students|visitors|alumni' | split: '|' %}
{% for group in groups %}
{% assign members = site.data.people | where: 'category', group %}
{% if members.size > 0 %}
<h2 id="{{ group | slugify }}">{% if group == 'phd candidates' %}PhD candidates{% else %}{{ group | capitalize }}{% endif %}</h2>
<div class="scala-grid scala-people">
{% for member in members %}
<article class="scala-card">
<div class="scala-avatar" aria-hidden="true">{{ member.initials }}</div>
<h3>{{ member.name }}</h3>
<p class="scala-role">{{ member.role }}</p>
<p>{{ member.university }}</p>
{% if member.note %}<p class="scala-detail">{{ member.note }}</p>{% endif %}
{% if member.website %}<a href="{{ member.website }}">Profile</a>{% endif %}
{% if member.email %}<a href="mailto:{{ member.email }}">Email</a>{% endif %}
</article>
{% endfor %}
</div>
{% endif %}
{% endfor %}
