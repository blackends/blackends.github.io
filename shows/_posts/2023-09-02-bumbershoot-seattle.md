---
layout: show
location: Seattle
venue: Bumbershoot
poster: /assets/img/posters/2023-09-02-bumbershoot-seattle.jpg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
