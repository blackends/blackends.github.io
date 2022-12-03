---
layout: show
location: Portland
venue: Lose Yr Mind Fest, Bunk Bar
poster: '/assets/img/posters/lose-yr-mind.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
