---
layout: default
title: Tour Dates
permalink: /tour/
---
## Tour Dates
<ul>
{% for show in site.categories.shows %}
<li>
  <h3><a href="{{ show.url }}">{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}</a></h3>
  {{ show.content }}
</li>
{% endfor %}
</ul>
