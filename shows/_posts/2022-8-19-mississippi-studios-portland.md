---
layout: show
location: Portland
venue: Mississippi Studios
bands: 'Dommengang, Help, Black Ends'
poster: '/assets/img/posters/help-portland.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
