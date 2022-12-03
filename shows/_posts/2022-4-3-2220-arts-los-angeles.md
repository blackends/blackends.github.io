---
layout: show
location: Los Angeles
venue: 2220 Arts
poster: '/assets/img/posters/2220-arts.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
