---
layout: show
location: Seattle
venue: Barboza
bands: 'Monsterwatch, Flesh Produce, Black Ends'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
