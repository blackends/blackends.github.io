---
layout: show
location: Seattle
venue: Sunset Tavern
bands: 'Slang, Rachaels Children, Black Ends'
poster: '/assets/img/posters/slang-rc-sunset.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
