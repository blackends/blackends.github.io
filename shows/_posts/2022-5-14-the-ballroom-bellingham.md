---
layout: show
location: Bellingham
venue: The Ballroom
poster: '/assets/img/posters/the-ballroom-bellingham.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
