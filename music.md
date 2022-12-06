---
layout: default
title: music
---
## music
<ul>
{% for release in site.categories.music %}
<a href="{{ release.url }}">
<li>
<h3>{{ release.title }}</h3>
<p><small>{{ release.date | date: "%B %-d, %Y" }}</small></p>
{{ release.content }}
</li>
</a>
{% endfor %}
</ul>
