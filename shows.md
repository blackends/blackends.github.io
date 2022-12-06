---
layout: default
title: tour dates
permalink: /tour/
---
## tour dates
<ul>
{% for show in site.categories.shows %}
<li class="show">
<a class="anchor" id="{{ show.date | date: "%m%-d%Y" }}" name="{{ show.date | date: "%m%-d%Y" }}" href="#{{ show.date | date: "%m%-d%Y" }}">#</a>
<h3><a href="{{ show.url }}">{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}</a></h3>
{{ show.content }}
</li>
{% endfor %}
</ul>
total shows: {{ site.categories.shows | size }}  !
