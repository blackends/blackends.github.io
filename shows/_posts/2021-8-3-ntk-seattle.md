---
layout: show
location: Seattle
venue: Taste of Caribbean & Peloton Cafe
poster: '/assets/img/posters/ntk.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
