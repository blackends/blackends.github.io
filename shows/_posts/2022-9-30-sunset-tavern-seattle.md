---
layout: show
location: Seattle
venue: Sunset Tavern
bands: 'Slang, Rachaels Children, Black Ends'
link: 'https://www.ticketweb.com/event/kexp-presents-slang-black-ends-sunset-tavern-tickets/12399525'
poster: '/assets/img/posters/slang-rc-sunset.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
