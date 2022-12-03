---
layout: show
location: Seattle
venue: Madame Lou's
poster: '/assets/img/posters/belltown-bloom.png'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
