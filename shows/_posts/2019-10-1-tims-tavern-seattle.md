---
layout: show
location: Seattle
venue: Tim's Tavern
poster: '/assets/img/posters/captain-orca.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
