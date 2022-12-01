---
title: News
layout: default
---
## News
<ul>
{% for post in site.categories.news %}
<a href="{{ post.url }}">
<li>
<h3>{{ post.title }}</h3>
{{ post.excerpt }}
<small>{{ post.date | date: "%B %-d, %Y" }}</small>
</li>
</a>
{% endfor %}
</ul>
