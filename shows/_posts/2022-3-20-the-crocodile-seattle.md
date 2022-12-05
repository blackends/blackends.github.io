---
layout: show
location: Seattle
venue: The Crocodile
bands: 'Shannon and the Clams, Black Ends'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
