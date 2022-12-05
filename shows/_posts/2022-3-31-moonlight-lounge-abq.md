---
layout: show
location: Albuquerque
venue: Moonlight Lounge
poster: '/assets/img/posters/abq-moonlight.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
