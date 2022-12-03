---
layout: show
location: Reno
venue: The Holland Project
bands: 'Quitter, Evening Spirits, Black Ends'
link : 'https://www.hollandreno.org/event/black-ends/'
poster: '/assets/img/posters/blackends-handbill-web-holland-project.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
