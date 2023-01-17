---
layout: show
location: Seattle
venue: Clock-Out Lounge
link: 'https://clockoutlounge.com/event-detail/12090475/the-crocodile-presents-blvck-hippie-w-black-ends-maya-marie/'
poster: '/assets/img/posters/blvk-hippie-clock-out.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
