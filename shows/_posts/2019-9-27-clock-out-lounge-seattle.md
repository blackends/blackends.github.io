---
layout: show
location: Seattle
venue: Clock-Out Lounge
link: 'https://www.spl.org/event-calendar?trumbaEmbed=view%3Devent%26eventid%3D133601794'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
