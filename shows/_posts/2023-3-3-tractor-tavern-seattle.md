---
layout: show
location: Seattle
venue: Tractor Tavern
link : 'https://www.ticketweb.com/event/quasi-w-no-2-black-tractor-tickets/12601835'
bands: Quasi, No. 2, Black Ends
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}

