---
title: Poster Collage
layout: default
permalink: /poster-collage/
---
<p class="help"><a href="/tour/">⬅️ back</a>&nbsp;</p>
<section id="collage">
{% for show in site.categories.shows %}
{% if show.poster %}
<img src="{{ show.poster }}" alt="{{ show.date | date: "%m/%-d/%Y" }}, {{ show.location }}, {{ show.venue }}">
{% endif %}
{% endfor %}
</section>
