---
layout: show
location: Boise
venue: Treefort, Hops and Bottles
poster: '/assets/img/posters/treefort-2022.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
