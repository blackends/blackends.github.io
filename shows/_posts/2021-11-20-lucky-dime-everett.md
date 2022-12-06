---
layout: show
location: Everett
venue: Lucky Dime
bands: 'Asterhouse, Black Ends'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
