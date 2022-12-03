---
layout: show
location: Seattle
venue: The Royal Room
bands: 'Nicolle Swims, Participators, Clay Beds, Flowers, Patrick Toney'
poster: '/assets/img/posters/royal-room.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
