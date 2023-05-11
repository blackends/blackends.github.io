---
layout: show
location: Portland
venue: Mississippi Studios
bands: Ganser, Hollow Sidewalks, Black Ends
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
