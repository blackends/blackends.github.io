const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const showsByLocation = {};
showData.forEach(show => {
    if (showsByLocation[show.location]) {
        showsByLocation[show.location].push(show);
    } else {
        showsByLocation[show.location] = [show];
    }
});
Object.keys(showsByLocation).forEach(locKey => {
    const locShows = showsByLocation[locKey],
        loc = latlons[locKey];
    if (loc) {
        let title = '';
        locShows.forEach(show => {
            title += `<p><b>${show.title}</b></p>`
        });
        const marker = L.marker([loc.lat, loc.lon]).addTo(map);
        marker.bindPopup(title);
    } else {
        console.log(locKey);
    }
})
