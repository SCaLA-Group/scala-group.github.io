---
layout: page
title: blog
permalink: /blog/
description: Stories from workshops, conferences and our research community.
nav: true
nav_order: 5.5
---

<div class="scala-blog-grid">
  {% for post in site.posts %}
    <article class="scala-blog-card">
      <a href="{{ post.url | relative_url }}" tabindex="-1" aria-hidden="true"><img src="{{ post.thumbnail | relative_url }}" alt="" width="1181" height="786" loading="lazy" decoding="async"></a>
      <div class="scala-blog-card-body">
        <p class="scala-home-meta"><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%d %B %Y' }}</time> · {{ post.categories | join: ', ' }}</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.description }}</p>
        <a href="{{ post.url | relative_url }}">Read the story <span aria-hidden="true">→</span></a>
      </div>
    </article>
  {% endfor %}
</div>
