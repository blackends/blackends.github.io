---
layout: show
location: Barnsley, UK
venue: CODAC
poster: /assets/img/posters/2023-4-28-codac-barnsley.jpg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
