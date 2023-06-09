const map = L.map('map').setView([34.809423, -40.317467], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const now = new Date();
function showIsFuture(date) {
    date = new Date(date);
    date.setDate(date.getDate() + 1);
    return now <= date;
}

const showsByLocation = {};
showData.forEach(show => {
    if (showsByLocation[show.location]) {
        showsByLocation[show.location].push(show);
    } else {
        showsByLocation[show.location] = [show];
    }
});
const showPerLocationLimit = 10;
Object.keys(showsByLocation).forEach(locKey => {
    const locShows = showsByLocation[locKey],
        loc = latlons[locKey];
    if (loc) {
        let title = locShows.length > 1 ? `<b>${locKey} show count: ${locShows.length}</b>` : "";
        let count = 0;
        for (let show of locShows) {
            if (count < showPerLocationLimit) {
                title += `<p><a href="${ show.url }"><span class="date">${ show.displayDate }</span>, <span class="location">${ show.location }</span>, ${ show.venue } ${showIsFuture(show.displayDate) ? "(future)" : ""}</a></p>`
            } else {
                title += `<p><b><a href ="/tour/">+${locShows.length - count} other shows...</a></b></p>`
                break;
            }
            count++;
        };
        const marker = L.marker([loc.lat, loc.lon]).addTo(map);
        marker.bindPopup(title);
    } else {
        console.log("Missing lat/lon: " + locKey);
    }
});

