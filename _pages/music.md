---
layout: default
title: music
permalink: /music/
---

<ul class="releases">
{% for release in site.data.music %}
<li>
<iframe style="border: 0; width: 300px; height: 300px;" src="{{ release.bandcampEmbeddedSrc }}" seamless><a href="{{ release.bandcampHref }}">{{ release.title }} by Black Ends</a></iframe>
<h3>{{ release.title }}</h3>
<p>{{ release.date | date: "%B %-d, %Y" }}</p>
</li>
{% endfor %}
</ul>
