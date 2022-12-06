---
layout: show
location: Tacoma
venue: Space Planet
bands: 'Nicolle Solo Show'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
