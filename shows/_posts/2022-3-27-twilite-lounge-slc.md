---
layout: show
location: Salt Lake City
venue: Twilite Lounge
poster: '/assets/img/posters/slc-twilite-lounge.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
