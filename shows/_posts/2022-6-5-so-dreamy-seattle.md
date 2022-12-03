---
layout: show
location: Seattle
venue: So Dreamy Fest, Cafe Racer
poster: '/assets/img/posters/so-dreamy.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
