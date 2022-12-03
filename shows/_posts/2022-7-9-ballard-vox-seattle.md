---
layout: show
location: Seattle
venue: Ballard Vox, The Sunset Tavern
poster: '/assets/img/posters/ballard-vox.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
