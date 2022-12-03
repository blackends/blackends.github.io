---
layout: show
location: Olympia
venue: Capitol Theater
poster: '/assets/img/posters/margaritas-podridas.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
