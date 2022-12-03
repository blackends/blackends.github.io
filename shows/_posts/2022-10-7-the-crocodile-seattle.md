---
layout: show
location: Seattle
venue: The Crocodile
bands: 'Otoboke Beaver, Black Ends'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
