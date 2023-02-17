---
layout: show
location: Seattle
venue: Elysian Capitol Hill Brewery
poster: /assets/img/posters/2023-3-4-elysian-seattle.jpg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
