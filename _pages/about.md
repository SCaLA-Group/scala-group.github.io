---
layout: about
title: home
permalink: /
subtitle: Scalable Scientific and Learning Algorithms · TU Delft
selected_papers: false
social: false
announcements:
  enabled: false
  scrollable: false
  limit: 2
latest_posts:
  enabled: false
---

<div class="scala-intro">
<a class="scala-home-brand" href="{{ '/' | relative_url }}" aria-label="SCaLA home"><img class="scala-home-logo" src="{{ '/assets/img/scala-logo.svg' | relative_url }}" alt="SCaLA — Scalable Scientific and Learning Algorithms"></a>
<p class="scala-eyebrow">SCIENTIFIC COMPUTING × MACHINE LEARNING</p>
<h2>Scalable scientific computing and machine learning</h2>
<p class="scala-lead">We are SCaLA, a research group at TU Delft working at the intersection of scientific computing and machine learning. Together, we develop scalable computational methods through mathematical analysis, algorithm design, and collaborative applications.</p>
<p>Our work connects numerical analysis, high-performance computing, and scientific machine learning—from robust solvers for partial differential equations to learning algorithms for complex scientific problems.</p>
<div class="scala-actions"><a class="scala-button" href="{{ '/research/' | relative_url }}">Explore our research</a><a class="scala-button scala-button-secondary" href="{{ '/group/' | relative_url }}">Meet the group</a></div>
</div>

<div class="scala-home-updates">
<section aria-labelledby="home-news">
<h2 id="home-news">Recent news</h2>
{% include news.liquid limit=true %}
<a href="{{ '/news/' | relative_url }}">All news →</a>
</section>
<aside class="scala-card" aria-labelledby="home-linkedin">
<span class="scala-eyebrow">FROM OUR NETWORK</span>
<h2 id="home-linkedin">On LinkedIn</h2>
<p>Research news and perspectives from our network.</p>
<a href="https://www.linkedin.com/in/alexander-heinlein-9b569380/recent-activity/all/">Alexander Heinlein on LinkedIn ↗</a>
</aside>
</div>

<div class="scala-work-grid">
<section aria-labelledby="home-publications">
<h2 id="home-publications">Recent publications</h2>
{% for item in site.data.homepage.publications limit:2 %}
<article class="scala-work-item"><p class="scala-eyebrow">{{ item.month }} {{ item.year }}</p><h3><a href="{{ '/publications/' | relative_url }}#{{ item.title | uri_escape }}">{{ item.title }}</a></h3><p>{{ item.authors }}</p></article>
{% endfor %}
<a href="{{ '/publications/' | relative_url }}">All publications →</a>
</section>
<section aria-labelledby="home-talks">
<h2 id="home-talks">Recent &amp; upcoming talks</h2>
{% for item in site.data.homepage.talks limit:2 %}
<article class="scala-work-item"><p class="scala-eyebrow">{{ item.year }}</p><h3><a href="{{ '/talks/' | relative_url }}#{{ item.title | uri_escape }}">{{ item.title }}</a></h3><p>{{ item.authors }}</p><p class="scala-detail">{{ item.detail }}</p></article>
{% endfor %}
<a href="{{ '/talks/' | relative_url }}">All talks →</a>
</section>
</div>

<section class="scala-join" aria-labelledby="home-join">
<h2 id="home-join">Join us</h2>
<p>We welcome enquiries about research positions, thesis projects, visits, and collaboration.</p>
<a class="scala-button" href="{{ '/opportunities/' | relative_url }}">Explore opportunities →</a>
</section>
