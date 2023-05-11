---
layout: show
location: Seattle
venue: Pier Sounds, Pier 62
link: https://waterfrontparkseattle.org/event/pier-sounds-2023/
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
