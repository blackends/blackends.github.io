---
layout: show
location: Tuscon
venue: Groundworks
poster: '/assets/img/posters/groundworks.webp'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
