---
layout: default
title: tour dates
permalink: /tour/
---
<p class="help"><a href="/poster-collage/">🪧</a>&nbsp;</p>
<p class="help"><a href="/map/">🌍</a></p>
<p class="help"><a href="/calendar/">📅</a>&nbsp;</p>
<h2>tour dates</h2>
<ul class="future-container">
{% for show in site.categories.shows %}
<li class="show">
<a class="anchor" id="{{ show.date | date: "%m%-d%Y" }}" name="{{ show.date | date: "%m%-d%Y" }}" href="#{{ show.date | date: "%m%-d%Y" }}">#</a>
<h3><a href="{{ show.url }}"><span class="date">{{ show.date | date: '%B %-d, %Y' }}</span> @ <span class="location">{{ show.venue }}</span>, {{ show.location }}</a></h3>
{% if show.link %}
{% if show.bands %}
<a href="{{ show.link }}" target="_blank"><p>🔗 {{ show.bands }}</p></a>
{% else %}
<a href="{{ show.link }}" target="_blank"><p>🔗 Event Link</p></a>
{% endif %}
{% else %}
{% if show.bands %}
<p>{{ show.bands }}</p>
{% endif %}
{% endif %}
{% if show.poster %}
{% if show.link %}
<a href="{{ show.link }}" target="_blank">
{% endif %}
<img src="{{ show.poster }}" alt="{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}">
{% if show.link %}
</a>
{% endif %}
{% endif %}
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
