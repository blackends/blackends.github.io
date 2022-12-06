---
layout: show
location: Seattle
venue: Chop Suey
poster: '/assets/img/posters/black-tones.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
