---
layout: show
location: Vancouver, BC
venue: Buddhas
poster: '/assets/img/posters/buddhas.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
