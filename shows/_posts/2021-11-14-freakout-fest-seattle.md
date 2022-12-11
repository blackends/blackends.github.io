---
layout: show
location: Seattle
venue: Freakout Fest, Salmon Bay Eagles Club
poster: '/assets/img/posters/freakout-2021.jpeg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}