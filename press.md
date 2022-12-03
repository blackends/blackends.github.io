---
layout: default
title: Press
---
## [EPK](https://drive.google.com/drive/folders/1x2ruIM24ParliPgWUqqJePIfYAbf7wuA?usp=sharing){:target="_blank"}
---
<ul class="alternate-text-align">
{% for post in site.categories.press %}
<li>
<a href="{{ post.link }}" target="_blank">
<div>
<h3>{{ post.title }}</h3>
<blockquote>{{ post.quote }}</blockquote>

<small>by {{ post.article-author }}</small>
<small>{{ post.date | date: "%B %-d, %Y" }}</small>
</div>
</a>
</li>
{% endfor %}
</ul>
