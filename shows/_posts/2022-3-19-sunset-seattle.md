---
layout: show
location: Seattle
venue: Sunset Tavern
bands: 'Prism Bitch, Monsterwatch, Black Ends'
poster: '/assets/img/posters/prism-bitch-sunset.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
