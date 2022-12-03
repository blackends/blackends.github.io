---
layout: show
location: Seattle
venue: Black & Loud Fest, LTD Bar & Grill
link: 'https://www.blackandloudfest.com/event-details/black-loud-fest'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
