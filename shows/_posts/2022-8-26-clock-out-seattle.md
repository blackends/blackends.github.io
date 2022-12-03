---
layout: show
location: Seattle
venue: Clock-Out Lounge
bands: 'Rat Queen, Actionesse, Black Ends'
poster: '/assets/img/posters/rat-queen.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
