---
layout: show
location: Seattle
venue: SAM Sculpture Park
poster: '/assets/img/posters/summer-at-sam.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
