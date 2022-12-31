const now = new Date();

// get all show list elements
const shows = [...document.querySelectorAll('.show')];

// a show is in the future, not in the past, until the next day
function getComparisonDate(show) {
    const date = new Date(show.querySelector('.date').innerText);
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

