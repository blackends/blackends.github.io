---
layout: show
location: Seattle
venue: Clock-Out Lounge
bands: Loolowningen, Beautiful Freaks, Black Ends
link: https://www.ticketweb.com/event/clock-out-lounge-presents-black-clock-out-lounge-tickets/12925745
poster: /assets/img/posters/2023-3-26-clockout-seattle.jpg
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
