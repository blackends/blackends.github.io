---
layout: default
title: Videos
---
## Videos
<ul>
{% for video in site.categories.videos %}
<a href="{{ video.link }}" target="_blank">
<li>
<h3>{{ video.title }}</h3>
<p><small>{{ video.date | date: "%B %-d, %Y" }}</small></p>
{{ video.content }}
</li>
</a>
{% endfor %}
</ul>
