---
layout: default
title: Home
permalink: /
homepage: true
description: Scalable Scientific and Learning Algorithms at TU Delft. Research in scientific computing, numerical methods and machine learning.
---

{% capture home_link_icon %}<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="vertical-align: text-bottom"><circle cx="10" cy="10" r="8.25"/><path d="m8.5 6.5 3.5 3.5-3.5 3.5"/></svg>{% endcapture %}

<div class="scala-home">
  <section class="scala-home-hero" aria-labelledby="home-title">
    <div class="scala-home-introduction">
      <p class="scala-eyebrow">SCaLA · TU Delft</p>
      <h1 id="home-title">Scientific computing.<br>Machine learning.<br><span>At scale.</span></h1>
      <p class="scala-home-summary">SCaLA (Scalable Scientific and Learning Algorithms) brings together numerical analysis, scientific computing and machine learning at TU Delft. We develop scalable methods for partial differential equations, combining domain decomposition, multiscale methods, high-performance computing and scientific machine learning. Our work connects mathematical foundations with research software and applications in engineering and the life sciences.</p>
      <div class="scala-actions">
        <a class="scala-button" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">→</span></a>
        <a class="scala-home-text-link" href="{{ '/group/' | relative_url }}">Meet the group <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>

  <section class="scala-home-gallery" data-research-gallery role="region" aria-roledescription="carousel" aria-label="Research, software and community in pictures">
    <div data-gallery-stage aria-live="off" aria-atomic="true">
      {% for item in site.data.research_gallery %}
        <figure data-gallery-slide data-gallery-kind="{{ item.kind }}" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}" {% unless forloop.first %}hidden{% endunless %}>
          <a class="scala-gallery-image{% if item.visual_type == 'logo' %} scala-gallery-image--logo{% endif %}" href="{% if item.image_url %}{{ item.image_url }}{% else %}{{ item.url | relative_url }}{% endif %}"><img src="{{ item.image | relative_url }}" width="{{ item.width }}" height="{{ item.height }}" alt="{{ item.alt | escape }}" decoding="async"{% unless forloop.first %} loading="lazy"{% endunless %}></a>
          <figcaption>
            <h2>{{ item.title }}</h2>
            <p class="scala-gallery-description">{{ item.description }}</p>
            <div class="scala-gallery-meta">
            <a class="scala-gallery-action" href="{{ item.url | relative_url }}">{{ item.link_label }} <span aria-hidden="true">→</span></a>
            <p class="scala-gallery-credit"><a href="{% if item.original or item.source_internal %}{{ item.source | relative_url }}{% else %}{{ item.source }}{% endif %}">{{ item.credit }}</a>{% if item.license %} · <a href="{{ item.license_url }}">{{ item.license }}</a>{% endif %}</p>
            </div>
          </figcaption>
        </figure>
      {% endfor %}
    </div>
    <div class="scala-gallery-footer">
    <div class="scala-gallery-controls" data-gallery-controls hidden>
      <button type="button" data-gallery-prev aria-label="Previous research image" title="Previous image"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m12 5-5 5 5 5"/></svg></button>
      <span data-gallery-counter aria-label="Slide number">1/{{ site.data.research_gallery.size }}</span>
      <button type="button" data-gallery-next aria-label="Next research image" title="Next image"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m8 5 5 5-5 5"/></svg></button>
      <button type="button" class="scala-gallery-toggle" data-gallery-toggle aria-label="Pause automatic gallery rotation" title="Pause automatic gallery rotation"><svg data-gallery-pause-icon width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false"><rect x="5" y="4" width="3" height="12" rx="1"/><rect x="12" y="4" width="3" height="12" rx="1"/></svg><svg data-gallery-play-icon width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false" hidden><path d="M6 3.5v13L16 10z"/></svg></button>
    </div>
    </div>
  </section>

{% assign latest_post = site.posts | sort: 'date' | reverse | first %}
  <section class="scala-home-activity" aria-labelledby="home-latest">
    <div class="scala-home-section-heading scala-home-latest-heading">
      <h2 id="home-latest">Latest from SCaLA</h2>
      <a href="{{ '/blog/' | relative_url }}">All stories <span aria-hidden="true">→</span></a>
    </div>
    {% if latest_post %}
    <section class="scala-home-blog" aria-labelledby="home-blog">
      <p class="scala-eyebrow" id="home-blog">From the blog</p>
      <article class="scala-home-story">
        <time class="scala-home-meta" datetime="{{ latest_post.date | date: '%Y-%m-%d' }}">{{ latest_post.date | date: '%d %B %Y' }}</time>
        <h3><a href="{{ latest_post.url | relative_url }}">{{ latest_post.title | escape }}</a></h3>
        <p>{{ latest_post.description | default: latest_post.excerpt | strip_html | truncatewords: 35 }}</p>
        <a href="{{ latest_post.url | relative_url }}">Read the story {{ home_link_icon }}</a>
      </article>
    </section>
    {% endif %}
    <div class="scala-home-updates">
    <section class="scala-home-news" aria-labelledby="home-news">
      <p class="scala-eyebrow" id="home-news"><a href="{{ '/news/' | relative_url }}">Group news</a></p>
      {% assign recent_news = site.news | sort: 'date' | reverse %}
      {% assign news_count = 0 %}
      {% for item in recent_news %}
        {% if latest_post and item.related_post == latest_post.url %}{% continue %}{% endif %}
        {% if news_count == 2 %}{% break %}{% endif %}
        {% assign news_count = news_count | plus: 1 %}
        <article class="scala-home-news-item">
          <time class="scala-home-meta" datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%d %B %Y' }}</time>
          {% if item.inline %}
            <div>{{ item.content }}</div>
          {% else %}
            <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
            {{ item.description | markdownify }}
          {% endif %}
        </article>
      {% endfor %}
    </section>

    <section class="scala-home-talks" aria-labelledby="home-talks">
      <p class="scala-eyebrow" id="home-talks"><a href="{{ '/talks/' | relative_url }}">Talks &amp; seminars</a></p>
      {% for item in site.data.homepage.talks limit:1 %}
        <article class="scala-work-item scala-home-talk">
          <p class="scala-home-meta">{{ item.venue | escape }} <span aria-hidden="true">/</span> {{ item.date_label | escape }}</p>
          <h3><a href="{{ '/talks/' | relative_url }}#{{ item.key | uri_escape }}">{{ item.title }}</a></h3>
          <p class="scala-home-authors">{{ item.authors }}</p>
        </article>
      {% endfor %}
    </section>
    </div>

  </section>

  <section class="scala-home-publications" aria-labelledby="home-publications">
    <div class="scala-home-section-heading">
      <h2 id="home-publications">Research highlights</h2>
      <a href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">→</span></a>
    </div>
    <div class="scala-home-paper-grid">
      {% for item in site.data.homepage.publications limit:2 %}
        <article class="scala-work-item scala-home-paper">
          <p class="scala-home-meta"><span class="scala-publication-status scala-publication-status--{{ item.status }}">{{ item.status | capitalize }}</span> {{ item.month }} {{ item.year }}</p>
          <h3><a href="{{ '/publications/' | relative_url }}#{{ item.key | uri_escape }}">{{ item.title }}</a></h3>
          <p class="scala-home-authors">{{ item.authors }}</p>
          <span class="scala-home-paper-arrow" aria-hidden="true">{{ home_link_icon }}</span>
        </article>
      {% endfor %}
    </div>
  </section>

  <div class="scala-home-connect">
    <p><strong>Join or collaborate</strong> <span>Explore opportunities to work with SCaLA.</span></p>
    <div class="scala-home-connect-links">
      <a href="{{ '/opportunities/' | relative_url }}">Opportunities</a>
      <a href="{{ '/teaching/' | relative_url }}">Student projects</a>
      <a href="{{ '/contact/' | relative_url }}">Contact</a>
    </div>
  </div>
</div>

<script defer src="{{ '/assets/js/scala-gallery.js' | relative_url | bust_file_cache }}"></script>
