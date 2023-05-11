---
layout: show
location: Seattle
venue: Tractor Tavern
bands: Zookraught, Black Ends
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
