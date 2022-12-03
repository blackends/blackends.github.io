---
layout: show
location: Sacramento
venue: The Russ Room
bands: 'Winsome, Emilee Durbin, Broken Tapes, Shades of Jade, Black Ends'
poster: '/assets/img/posters/russ-room.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
