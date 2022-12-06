---
layout: show
location: Seattle
venue: The Neptune Theater
poster: '/assets/img/posters/neptune.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
