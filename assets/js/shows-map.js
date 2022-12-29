const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

showData.forEach(show => {
    const loc = latlons[show.location];
    if (loc) {
        const marker = L.marker([loc.lat, loc.lon]).addTo(map);
        marker.bindPopup(`<b>${show.title}</b>`);
    } else {
        // console.log(show.location);
    }
});
