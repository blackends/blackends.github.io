---
layout: show
location: Seattle
venue: "Madame Lou's"
bands: 'The Jins, Bad Optics, Black Ends'
poster: '/assets/img/posters/the-jins-boptics.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
