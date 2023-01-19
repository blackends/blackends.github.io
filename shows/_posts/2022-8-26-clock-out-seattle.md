---
layout: show
location: Seattle
venue: Clock-Out Lounge
bands: 'Rat Queen, Actionesse, Black Ends'
link: 'https://clockoutlounge.com/event-detail/12282995/rat-queen-album-release-party-w-special-guests-black-ends-actionesse/'
poster: '/assets/img/posters/rat-queen.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
