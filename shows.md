---
layout: default
title: tour dates
permalink: /tour/
---
<p class="help"><a href="/2022/12/06/show-project">help!</a></p>
<h2>tour dates</h2>
<ul class="future-container">
{% for show in site.categories.shows %}
<li class="show">
<a class="anchor" id="{{ show.date | date: "%m%-d%Y" }}" name="{{ show.date | date: "%m%-d%Y" }}" href="#{{ show.date | date: "%m%-d%Y" }}">#</a>
<h3><a href="{{ show.url }}"><span class="date">{{ show.date | date: "%m/%-d/%Y" }}</span>, <span class="location">{{ show.location }}</span>, {{ show.venue }}</a></h3>
{{ show.content }}
</li>
{% endfor %}
</ul>
<hr />
<ul class="past-container">
<li><h2>past</h2></li>
</ul>
total shows: {{ site.categories.shows | size }}  !

<!-- sorts the shows based on date -->
<script src="{{ base.url | prepend: site.url }}/assets/js/shows.js"></script>
