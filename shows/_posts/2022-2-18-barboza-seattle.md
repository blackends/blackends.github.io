---
layout: show
location: Seattle
venue: Barboza
bands: 'Dining Dead, Mr. Dinkles, Black Ends'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
