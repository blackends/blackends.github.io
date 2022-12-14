const now = new Date();

// get all show list elements
const shows = [...document.querySelectorAll('.show')];

// create a list of past shows
const pastShows = shows.filter(show => now > new Date(show.querySelector('.date').innerText));

// create a list of future shows sorted and reverse it
const futureShows = shows.filter(show => now <= new Date(show.querySelector('.date').innerText)).reverse();

// move the shows to their proper locations
const pastContainer = document.querySelector('.past-container');
pastShows.forEach(show => pastContainer.appendChild(show));

const futureContainer = document.querySelector('.future-container');
futureShows.forEach(show => futureContainer.appendChild(show));
