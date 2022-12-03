---
layout: show
location: Seattle
venue: Belltown Yacht Club
bands: 'Bad Optics, Dommengang, Help, Black Ends'
poster: '/assets/img/posters/help-belltown.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
