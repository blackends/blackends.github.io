---
layout: show
location: Marseille, FR
link: 'https://dice.fm/event/on5o5-black-ends-18th-apr-le-molotov-marseille-tickets'
venue: Le Molotov
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
