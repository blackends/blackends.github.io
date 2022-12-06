---
layout: show
location: Everett
venue: Fisherman's Village, Lucky Dime
poster: '/assets/img/posters/fishermans-village.jpg'
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
