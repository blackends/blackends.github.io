---
layout: show
location: Olympia
venue: Octapas Cafe
poster: '/assets/img/posters/weeed.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
