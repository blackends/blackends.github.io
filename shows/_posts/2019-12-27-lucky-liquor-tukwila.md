---
layout: show
location: Tukwila
venue: Lucky Liquor
bands: 'Nicolle Solo Show'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
