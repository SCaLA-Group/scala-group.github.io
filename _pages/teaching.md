---
layout: page
title: teaching
permalink: /teaching/
description: Courses, thesis projects, internships, and honours.
nav: true
nav_order: 5
---

<div class="scala-grid scala-teaching-overview" data-page-sections>
<section class="scala-card" aria-labelledby="teaching-courses">
<h2 id="teaching-courses">Courses</h2>
{% assign regular_courses = site.data.teaching.courses | where_exp: 'course', "course.kind != 'short-course'" | sort: 'academic_year' | reverse %}
{% assign teaching_year = regular_courses.first.academic_year %}
<p>Teaching in {{ teaching_year }}:</p>
<ul>
{% assign current_courses = regular_courses | where: 'academic_year', teaching_year %}
{% for course in current_courses %}
<li>{% if course.studyguide_url %}<a href="{{ course.studyguide_url }}">{{ course.title | escape }}</a>{% else %}{{ course.title | escape }}{% endif %}</li>
{% endfor %}
</ul>
<a href="{{ '/teaching/courses/' | relative_url }}">All courses and teaching material</a>
</section>
<section class="scala-card" aria-labelledby="teaching-students">
<h2 id="teaching-students">Student research</h2>
<p>Current student projects connect numerical methods, scientific machine learning and applications.</p>
<ul>
{% for member in site.data.people %}
{% if member.category == 'master students' or member.category == 'bachelor students' %}
{% assign member_project = site.data.member_projects[member.id] %}
{% assign teaching_project = site.data.teaching.projects | where: 'id', member_project.teaching_project_id | first %}
<li><a href="{{ member.profile_url | relative_url }}#project">{{ member_project.title | default: teaching_project.title | escape }}</a><br><span class="scala-detail">{{ member.name | escape }}</span></li>
{% endif %}
{% endfor %}
</ul>
<a href="{{ '/opportunities/' | relative_url }}">Discuss a project, internship or research visit</a>
</section>
</div>
