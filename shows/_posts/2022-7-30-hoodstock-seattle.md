---
layout: show
location: Seattle
venue: Hoodstock
poster: '/assets/img/posters/hoodstock.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
