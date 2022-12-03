---
layout: show
location: Long Beach
venue: Que Sera
poster: '/assets/img/posters/que-sera.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
