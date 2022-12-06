---
layout: show
title: 12/20/22, Seattle, Cherry Pit
location: Seattle
venue: Cherry Pit
bands: 'Castoff, CSTMR, Rhododendron, Black Ends'
poster: '/assets/img/posters/BLACK ENDS DEC 20th POSTER.png'
tags: pinned
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
