---
layout: show
location: Seattle
venue: Substation
poster: '/assets/img/posters/substation-medejin.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
