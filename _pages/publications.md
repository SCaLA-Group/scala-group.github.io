---
layout: page
title: publications
permalink: /publications/
description: Publications by SCaLA members and collaborators.
math: true
nav: true
nav_order: 3
---

{% include bib_search.liquid %}
<div class="publications" data-collapse-years>
{% capture publication_list %}{% bibliography %}{% endcapture %}
{{ publication_list | replace: '<h2 class="bibliography"></h2>', '<h2 class="bibliography">Undated</h2>' }}
</div>
