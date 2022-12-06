---
layout: show
location: Seattle
venue: Push/Pull
bands: 'Nicolle Solo Show'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
