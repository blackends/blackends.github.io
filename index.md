---
layout: default
title: black ends
---
<ul>
{% for post in site.tags.pinned %}
<li>
{% if post.categories contains "shows" %}
<h2>next show: {{ post.title }}</h2>
{% else %}
<h2>{{ post.title }}</h2>
{% endif %}
{{ post.content }}
<p><small>{{ post.date | date: "%B %-d, %Y" }}</small></p>
</li>
{% endfor %}
</ul>
