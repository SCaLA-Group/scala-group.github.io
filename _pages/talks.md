---
layout: page
title: talks
permalink: /talks/
description: Research talks, invited seminars, and conference presentations.
math: true
nav: true
nav_order: 4
---

<label for="bibsearch">Search talks by title, speaker, venue, or year</label>
{% include bib_search.liquid %}

<div class="publications scala-talks" data-collapse-years>
{% bibliography -f talks %}
</div>
