---
layout: show
location: Seattle
venue: Reuben's Brews
poster: /assets/img/posters/2023-6-10-reubens-brews-seattle.png
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
