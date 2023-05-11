---
layout: show
location: Seattle
venue: Pink Castle
bands: Twistur, Rhododendron, Queen Chimera, Black Ends
poster: /assets/img/posters/2023-7-15-pink-castle-seattle.jpeg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}