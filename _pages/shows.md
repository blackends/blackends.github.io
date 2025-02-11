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

<h2 class="upcoming-shows">Upcoming shows</h2>

<ul class="future-container">
{% for show in site.categories.shows %}

{% assign posterstyle = "" %}
{% unless show.poster == "" or show.poster == null %}
{% assign posterstyle = "background-image: url('" | append: show.poster | append: "')" %}
{% endunless %}

<li class="event dark-overlay" data-date="{{ show.date | date: '%B %-d, %Y' }}" style="{{ posterstyle }}">
<div class="date">
<a class="anchor" id="{{ show.date | date: "%m%-d%Y" }}" name="{{ show.date | date: "%m%-d%Y" }}" href="#{{ show.date | date: "%m%-d%Y" }}">
<p class="day">{{ show.date | date: '%-d' }}</p>
{% assign showyear = show.date | date: "%Y" %}
{% if showyear != currentyear %}
<p class="month">{{ show.date | date: '%b %Y' }}</p>
{% else if %}
<p class="month">{{ show.date | date: '%b' }}</p>
{% endif %}
</a>
</div>
<div class="details">
{% assign href = "" %}
{% unless show.link == "" or show.link == null %}
  {% assign href = show.link %}
{% else %}
  {% assign href = show.url %}
{% endunless %}

<a href="{{ href }}" target="_blank">
<h3>{{ show.location }}</h3>
<p>{{ show.venue }}</p>
{% unless show.bands == "" or show.bands == null %}
<p>{{ show.bands }}</p>
{% endunless %}
</a>

</div>
</li>
{% endfor %}
</ul>
<h2 class="past-shows">Past shows ▼</h2>
<ul class="past-container">
</ul>

<!-- sorts the shows based on date -->
<script src="/assets/js/shows.js" type="text/javascript"></script>
