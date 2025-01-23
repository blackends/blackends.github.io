---
layout: default
title: black ends
---
<ul>
<li class="next-show"></li>
<li><a target="_blank" href="https://calendar.google.com/calendar/u/0/r?cid=s6vsr6ql80nvek8738l8rit5nd7tvgc5@import.calendar.google.com">Subscribe to our show calendar!</a></li>
{% for post in site.tags.pinned %}
<li><hr /></li>
<li>
{% unless post.link == "" or post.link == null %}
<a target="_blank" href="{{ post.link }}"><h2>{{ post.title }}</h2></a>
{% else %}
<h2>{{ post.title }}</h2>
{% endunless %}
{% unless post.video == "" or post.video == null %}
<video controls src="{{ post.video }}"></video>
{% endunless %}
{% unless post.youtube == "" or post.youtube == null %}
<style>.codegena{position:relative;width:100%;height:0;padding-bottom:56.27198%;margin-bottom:20px}.codegena iframe{position:absolute;top:0;left:0;width:100%;height:100%;}</style><div class="codegena"><iframe width='500' height='294' src="https://www.youtube.com/embed/{{ post.youtube }}?&theme=dark&autohide=2&modestbranding=1&rel=0&iv_load_policy=3" frameborder="0"></iframe></div>
{% endunless %}
{{ post.content }}
<p><small>{{ post.date | date: "%B %-d, %Y" }}</small></p>
</li>
{% endfor %}
</ul>

<!-- get next show -->
<script src="/shows.js"></script>
