---
layout: show
location: Tacoma
venue: ALMA
poster: '/assets/img/posters/tacoma-rooftop.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
