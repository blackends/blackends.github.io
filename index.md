---
layout: default
title: black ends
---
<ul>
{% for post in site.tags.pinned %}
<li>
<h2>{{ post.title }}</h2>
{% if post.video %}
<video controls src="{{ post.video }}"></video>
{% endif %}
{% if post.youtube %}
<style>.codegena{position:relative;width:100%;height:0;padding-bottom:56.27198%;margin-bottom:20px}.codegena iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="codegena"><iframe width='500' height='294' src="https://www.youtube.com/embed/{{ post.youtube }}?&theme=dark&autohide=2&modestbranding=1&rel=0&iv_load_policy=3" frameborder="0"></iframe></div>
{% endif %}
{{ post.content }}
<p><small>{{ post.date | date: "%B %-d, %Y" }}</small></p>
</li>
<li><hr /></li>
{% endfor %}
<li class="next-show"></li>
<li><a target="_blank" href="https://calendar.google.com/calendar/u/0/r?cid=s6vsr6ql80nvek8738l8rit5nd7tvgc5@import.calendar.google.com">Subscribe to our show calendar!</a></li>
</ul>

<!-- get next show -->
<script src="/shows.js"></script>
