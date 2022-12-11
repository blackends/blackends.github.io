---
layout: show
location: Seattle
venue: Barboza
bands: 'Nicolle Solo Show'
poster: '/assets/img/posters/barboza-jayomi.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}