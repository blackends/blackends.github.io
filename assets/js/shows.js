const now = new Date();

// get all show list elements
const shows = [...document.querySelectorAll('.event')];

// a show is in the future, not in the past, until the next day
function getComparisonDate(show) {
    const date = new Date(show.dataset.date);
    date.setDate(date.getDate() + 1);
    return date;
}

// create a list of past shows
const pastShows = shows.filter(show => now > getComparisonDate(show));

// create a list of future shows sorted and reverse it
const futureShows = shows.filter(show => now <= getComparisonDate(show)).reverse();

// move the shows to their proper locations
const pastContainer = document.querySelector('.past-container');
pastShows.forEach(show => pastContainer.appendChild(show));

const futureContainer = document.querySelector('.future-container');
futureShows.forEach(show => futureContainer.appendChild(show));

let prevBgImage = "";
shows.forEach(show => {
    if (!show.style.backgroundImage) {
        prevBgImage = show.style.backgroundColor = randomColorRGBA(0.2, prevBgImage);
    }
});

const pastTitle = document.querySelector(".past-shows");
pastTitle.addEventListener("click", e => {
    pastContainer.classList.toggle("open");

    // Update arrow indicator
    if (pastContainer.classList.contains("open")) {
        pastTitle.textContent = pastTitle.textContent.replace("▼", "▲");
    } else {
        pastTitle.textContent = pastTitle.textContent.replace("▲", "▼");
    }
});
