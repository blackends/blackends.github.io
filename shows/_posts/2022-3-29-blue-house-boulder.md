---
layout: show
location: Boulder
venue: The Blue House
poster: '/assets/img/posters/boulder-blue-house.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
