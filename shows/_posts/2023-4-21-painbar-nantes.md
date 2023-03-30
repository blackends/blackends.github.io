---
layout: show
location: Nantes, FR
venue: Painbar
link: http://mostanantes.com/index.php/2023/01/23/black-ends-gunk-pop-seattle-1ere-partie-21-04-23/
---

{% if page.poster %}
![{{ page.date | date: "%m/%-d/%Y" }}, {{ page.location }}, {{ page.venue }}]({{ page.poster }})
{% else %}
{{ page.bands }}
{% endif %}
