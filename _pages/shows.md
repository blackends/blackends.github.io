---
layout: default
title: tour dates
permalink: /tour/
---
<p class="help"><a href="/map/">map</a></p>
<p class="help"><a href="/calendar/">cal</a>&nbsp;</p>
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
<p class="help"><a href="/2022/12/06/show-project">contribute to this list</a></p>
<p>total shows: <b>{{ site.categories.shows | size }}</b>!</p>

<!-- sorts the shows based on date -->
<script src="/assets/js/shows.js" type="text/javascript"></script>
