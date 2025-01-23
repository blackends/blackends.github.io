---
title: poster collage
layout: default
permalink: /poster-collage/
---
<p class="help" style="margin-bottom: 0;"><a href="/tour/">⬅️ back</a>&nbsp;</p>
## posters!
<section id="collage">
{% for show in site.categories.shows %}
{% unless show.poster == "" or show.poster == null %}
<a href="/tour/#{{ show.date | date: "%m%-d%Y" }}">
<img src="{{ show.poster }}" alt="{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}">
</a>
{% endunless %}
{% endfor %}
</section>
