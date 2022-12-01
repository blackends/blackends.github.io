---
layout: default
title: Tour Dates
permalink: /tour/
---
## Tour Dates
<ul>
{% for show in site.categories.shows %}
<li>
  <a href="{{ show.url }}"><h3>{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}</h3></a>
  {{ show.content }}
</li>
{% endfor %}
</ul>
