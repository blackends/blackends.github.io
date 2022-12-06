---
layout: show
location: Boise
venue: Treefort, Linen Building
poster: '/assets/img/posters/treefort-2021.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
