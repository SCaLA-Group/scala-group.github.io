---
layout: page
title: Mitchell Maassen van den Brink
description: Former member
permalink: /people/mitchell-maassen-van-den-brink/
nav: false
member_id: mitchell-maassen-van-den-brink
---

{% assign member = site.data.people | where: 'id', page.member_id | first %}

{% if member.photo %}
<img class="scala-portrait scala-portrait-profile" src="{{ member.photo }}" alt="{{ member.name }}" width="200" height="200">
{% else %}
<div class="scala-avatar scala-avatar-profile" aria-hidden="true">{{ member.initials }}</div>
{% endif %}

<p class="scala-role">{{ member.role }}</p>

{% if member.department %}**{{ member.department }}**  
{% endif %}
{% if member.university %}{{ member.university }}{% endif %}

{% if member.note %}{{ member.note }}{% endif %}

## Contact and links

{% if member.email %}[Email](mailto:{{ member.email }}){% endif %}
{% if member.website %}[External profile]({{ member.website }}){% endif %}

[Back to the SCaLA group]({{ '/group/' | relative_url }})
