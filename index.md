---
layout: default
title: black ends
---

<ul>
<li class="next-show"></li>
{% for post in site.tags.pinned %}
<li>
<h2>{{ post.title }}</h2>
{{ post.content }}
<p><small>{{ post.date | date: "%B %-d, %Y" }}</small></p>
</li>
{% endfor %}
</ul>

<!-- get next show -->
<script src="/shows.js"></script>
