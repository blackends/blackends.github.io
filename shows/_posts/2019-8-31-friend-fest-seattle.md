---
layout: show
location: Seattle
venue: Friend Fest, Werewolf Vacation
poster: '/assets/img/posters/friend-fest.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
