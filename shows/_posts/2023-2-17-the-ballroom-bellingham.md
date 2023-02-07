---
layout: show
location: Bellingham
venue: The Ballroom
poster: /assets/img/posters/2023-2-17-the-ballroom-bellingham.jpg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
