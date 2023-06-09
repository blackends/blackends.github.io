---
layout: show
location: Seattle
venue: Neumos
link: https://www.neumos.com/events/detail/ayron-jones-tickets-483958
bands: Ayron Jones, Wyatt Olney and the Wreckage, Black Ends
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
