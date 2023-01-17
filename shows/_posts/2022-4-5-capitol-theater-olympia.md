---
layout: show
location: Olympia
venue: Capitol Theater
link: 'https://olympiafilmsociety.org/margaritas-podridas-w-black-ends/'
poster: '/assets/img/posters/margaritas-podridas.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
