---
layout: show
location: Portland
venue: Lollipop Shoppe
poster: /assets/img/posters/2023-2-12-lollipop-shoppe-portland.jpeg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
