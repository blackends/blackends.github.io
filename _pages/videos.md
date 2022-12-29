---
layout: default
title: videos
permalink: /videos/
---
## videos
<ul>
{% for video in site.categories.videos %}
<li>
<a href="{{ video.link | default: video.url }}" target="_blank">
<h3>{{ video.title }}</h3>
<p><small>{{ video.date | date: "%B %-d, %Y" }}</small></p>
</a>
{{ video.content }}
</li>
{% endfor %}
</ul>
