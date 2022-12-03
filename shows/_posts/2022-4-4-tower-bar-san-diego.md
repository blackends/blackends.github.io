---
layout: show
location: San Diego
venue: Tower Bar
bands: 'Moon Talk, Black Ends, No Interest'
link: 'http://www.thetowerbar.com/calendar/black-ends/'
poster: '/assets/img/posters/tower-bar.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
