---
layout: show
location: Victoria, BC
venue: The Phoenix
poster: '/assets/img/posters/the-phoenix.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
