---
layout: show
title: 12/31/22, Seattle
location: Seattle
venue: Drongo Headquarters
poster: '/assets/img/posters/nye22.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
