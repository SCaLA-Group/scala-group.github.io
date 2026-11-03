---
layout: page
title: Teaching
permalink: /teaching/
description: Courses, thesis projects, internships, and honours.
nav: true
nav_order: 5
---

{% assign regular_courses = site.data.teaching.courses | where_exp: 'course', "course.kind != 'short-course'" | sort: 'academic_year' | reverse %}
{% assign teaching_year = regular_courses.first.academic_year %}
{% assign current_courses = regular_courses | where: 'academic_year', teaching_year | sort: 'order' | reverse %}

<div class="scala-teaching-overview" data-page-sections>
  <section aria-labelledby="teaching-courses">
    <div class="scala-teaching-section-heading">
      <div class="scala-teaching-section-title">
        <h2 id="teaching-courses">Courses</h2>
        <span class="scala-teaching-year">{{ teaching_year }}</span>
      </div>
      <a href="{{ '/teaching/courses/' | relative_url }}">All courses &amp; material</a>
    </div>
    <ul class="scala-teaching-summary-list">
      {% for course in current_courses %}
        {% assign code_suffix = course.course_code | prepend: '(' | append: ')' %}
        {% assign course_title = course.title | remove: code_suffix | strip %}
        {% assign course_period = course.term | remove: teaching_year | strip %}
        <li>
          <h3>{% if course.studyguide_url %}<a href="{{ course.studyguide_url }}">{{ course_title | escape }}</a>{% else %}{{ course_title | escape }}{% endif %}</h3>
          <p class="scala-teaching-summary-meta">{% if course.course_code %}{{ course.course_code | escape }} · {% endif %}{{ course_period | default: course.institution | escape }}{% if course.source_status == 'planned' %} · Planned{% endif %}</p>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section aria-labelledby="teaching-students">
    <div class="scala-teaching-section-heading">
      <h2 id="teaching-students">Current student research</h2>
      <a href="{{ '/group/#master-students' | relative_url }}">Meet the students</a>
    </div>
    <ul class="scala-teaching-summary-list">
      {% for member in site.data.people %}
        {% if member.category == 'master students' or member.category == 'bachelor students' %}
          {% assign member_project = site.data.member_projects[member.id] %}
          {% assign teaching_project = site.data.teaching.projects | where: 'id', member_project.teaching_project_id | first %}
          <li>
            <h3><a href="{{ member.profile_url | relative_url }}#project">{{ member_project.title | default: teaching_project.title | escape }}</a></h3>
            <p class="scala-teaching-summary-meta">{{ member.name | escape }} · {% if member.category == 'master students' %}Master’s thesis{% else %}Bachelor’s thesis{% endif %}</p>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </section>

  <div class="scala-teaching-enquiry">
    <p>Interested in a thesis, internship or research visit?</p>
    <a href="{{ '/opportunities/' | relative_url }}">Discuss a project</a>
  </div>
</div>
