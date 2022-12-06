---
layout: show
location: Seattle
venue: Bar House
poster: '/assets/img/posters/k-bar-house.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
