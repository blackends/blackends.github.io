---
layout: show
location: Santa Ana
venue: FTG Warehouse
poster: '/assets/img/posters/ftg.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
