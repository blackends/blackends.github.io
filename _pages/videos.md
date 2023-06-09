---
layout: default
title: videos
permalink: /videos/
---
## videos
<ul>
{% for video in site.categories.videos %}
<li>
<a href="{{ video.link | default: video.url }}">
<h3>{{ video.title }}</h3>
<p><small>{{ video.date | date: "%B %-d, %Y" }}</small></p>
</a>
{% if video.video %}
<video controls src="{{ video.video }}"></video>
{% endif %}
{% if video.youtube %}
<style>.codegena{position:relative;width:100%;height:0;padding-bottom:56.27198%;margin-bottom:20px}.codegena iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="codegena"><iframe width='500' height='294' src="https://www.youtube.com/embed/{{ video.youtube }}?&theme=dark&autohide=2&modestbranding=1&rel=0&iv_load_policy=3" frameborder="0"></iframe></div>
{% endif %}
</li>
{% endfor %}
</ul>
