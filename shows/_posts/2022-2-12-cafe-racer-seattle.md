---
layout: show
location: Seattle
venue: Cafe Racer
poster: '/assets/img/posters/cafe-racer.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
