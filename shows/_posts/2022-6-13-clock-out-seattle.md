---
layout: show
location: Seattle
venue: Clock-Out Lounge
poster: '/assets/img/posters/blvk-hippie-clock-out.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
