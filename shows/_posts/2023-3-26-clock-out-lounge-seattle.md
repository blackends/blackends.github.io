---
layout: show
location: Seattle
venue: Clock-Out Lounge
bands: Loolowningen, Black Ends
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}

