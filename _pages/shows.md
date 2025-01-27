---
layout: default
title: tour dates
permalink: /tour/
---
<!--
<p class="help"><a href="/poster-collage/">🪧</a>&nbsp;</p>
<p class="help"><a href="/map/">🌍</a></p>
<p class="help"><a href="/calendar/">📅</a>&nbsp;</p>
-->
{% assign currentyear = "now" | date: "%Y" %}

<ul class="future-container">
{% for show in site.categories.shows %}
<li class="event" data-date="{{ show.date | date: '%B %-d, %Y' }}">
<div class="date">
<p class="day">{{ show.date | date: '%-d' }}</p>
{% assign showyear = show.date | date: "%Y" %}
{% if showyear != currentyear %}
<p class="month">{{ show.date | date: '%b %Y' }}</p>
{% else if %}
<p class="month">{{ show.date | date: '%b' }}</p>
{% endif %}
</div>
<div class="details">
<h3><a class="anchor" id="{{ show.date | date: "%m%-d%Y" }}" name="{{ show.date | date: "%m%-d%Y" }}" href="#{{ show.date | date: "%m%-d%Y" }}">@</a> <a href="{{ show.url }}">{{ show.venue }}</a></h3>
{% unless show.link == "" or show.link == null %}
{% unless show.bands == "" or show.bands == null %}
<a href="{{ show.link }}" target="_blank"><p>🔗 {{ show.bands }}</p></a>
{% else %}
<a href="{{ show.link }}" target="_blank"><p>🔗 Event Link</p></a>
{% endunless %}
{% else %}
{% unless show.bands == "" or show.bands == null %}
<p>{{ show.bands }}</p>
{% endunless %}
{% endunless %}
<p>{{ show.location }}</p>
</div>
{% unless show.poster == "" or show.poster == null %}
<div class="poster">
<img src="{{ show.poster }}" alt="{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}" />
</div>
{% endunless %}
<!--
{% unless show.link == "" or show.link == null %}
<a href="{{ show.link }}" target="_blank">
{% endunless %}
{% unless show.link == "" or show.link == null %}
</a>
{% endunless %}
-->
</li>
{% endfor %}
</ul>
<ul class="past-container">
<li><h2>past</h2></li>
</ul>
<p>total shows: <b>{{ site.categories.shows | size }}</b>!</p>

<!-- sorts the shows based on date -->
<script src="/assets/js/shows.js" type="text/javascript"></script>
