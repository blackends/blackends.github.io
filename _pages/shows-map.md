---
layout: default
title: tour map
permalink: /map/
---
<p class="help" style="margin-bottom: 0;"><a href="/tour/">⬅️ back</a>&nbsp;</p>
## where have we played?
<!-- Leaflet's CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
<style>
#map { height: 500px; }
</style>

<div id="map"></div>

<!-- Leaflet's JS -->
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
    crossorigin=""></script>

<script>
const showData = [
{% for show in site.categories.shows %}
    {
        title: "{{ show.title }}",
        venue: "{{ show.venue }}",
        date: "{{ show.date }}",
        displayDate: '{{ show.date | date: "%m/%-d/%Y" }}',
        location: "{{ show.location }}",
        url: "{{ show.url }}",
        poster: "{{ show.poster }}",
    },
{% endfor %}
];
</script>

<!-- custom leaflet js -->
<script src="/assets/js/latlons.js" type="text/javascript"></script>
<script src="/assets/js/shows-map.js" type="text/javascript"></script>
