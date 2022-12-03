---
layout: show
location: Seattle
venue: Freakout Fest, Tractor Tavern
poster: '/assets/img/posters/FOF 10 6.28 Announce Poster.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
