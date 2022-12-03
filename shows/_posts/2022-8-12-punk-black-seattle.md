---
layout: show
location: Seattle
venue: Belltown Yacht Club
bands: 'Glass Noose, Haley Graves, Bangzz, Maya Marie, Super Coze, Black Ends'
poster: '/assets/img/posters/punk-black.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
