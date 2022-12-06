---
layout: show
location: Seattle
venue: Tim's Tavern
bands: 'Nicolle Solo Show'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
