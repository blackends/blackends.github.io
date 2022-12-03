---
layout: show
location: Portland
venue: Kelly's Olympian
poster: '/assets/img/posters/kellys-olympian.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
