---
layout: show
location: Seattle
venue: The Crocodile
bands: 'Nicolle Solo Show'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
