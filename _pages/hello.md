---
layout: default
title: hello
permalink: /hello/
---
<ul>
{% for item in site.data.hello %}
<a href="{{ item.href }}">
<li>
{{ item.title }}
</li>
</a>
{% endfor %}
</ul>

<svg height="100%" width="100%">
  <defs>
    <pattern id="doodad" width="128" height="128" viewBox="0 0 40 40" patternUnits="userSpaceOnUse" patternTransform="rotate(331)">
      <rect width="100%" height="100%" fill="rgba(229, 62, 62,1)"/>
      <path d="M0 0L20 0L20 20L0 20L0 0zM5.1 5.1L6 14L14 14L14 6zM20 20L40 20L40 40L20 40L20 20zM26 26L26 34L34.9 34.9L34 26z" fill="rgba(44, 82, 130,1)"/>
      <path d="M26 6L34.9 5.1L34 14L23.3 16.7zM6 26L16.7 23.3L14 34L5.1 34.9z" fill="rgba(246, 224, 94,1)"/>
    </pattern>
  </defs>
  <rect fill="url(#doodad)" height="200%" width="200%"/>
</svg>

