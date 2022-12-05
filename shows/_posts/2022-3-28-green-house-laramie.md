---
layout: show
location: Laramie
venue: The Green House
poster: '/assets/img/posters/laramie-green-house.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
