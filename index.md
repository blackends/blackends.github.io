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
<h2>{{ post.title }}</h2>
{{ post.content }}
<p><small>{{ post.date | date: "%B %-d, %Y" }}</small></p>
</li>
{% endfor %}
</ul>

<!-- get next show -->
<script src="/shows.js"></script>
