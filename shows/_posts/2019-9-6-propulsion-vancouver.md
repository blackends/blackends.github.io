---
layout: show
location: Vancouver, BC
venue: Propulsion
poster: '/assets/img/posters/the-jins-propulsion.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
