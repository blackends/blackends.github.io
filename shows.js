---
layout: none
---

const allShows = [
  {% for post in site.categories.shows %}
    {
      date: {
        human: "{{ post.date | date: '%B %-d, %Y' }}",
        machine: "{{ post.date | date: '%Y-%m-%d' }}"
      },
      poster: "{{ post.poster }}",
      url: "{{ post.url }}",
      title: "{{ post.date | date: '%m/%-d/%Y' }}, {{ post.location }}, {{ post.venue }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

// a show is in the future, not in the past, until the next day
function getComparisonDate(show) {
    const date = new Date(show.date.machine);
    date.setDate(date.getDate() + 1);
    return date;
}

const now = new Date();
let nextShow = allShows[0];

// find next show
allShows.forEach(s => {
    const thisShowDate = getComparisonDate(s),
        nextShowDate = getComparisonDate(nextShow);
    if (s !== nextShow &&
        now <= thisShowDate && 
        (thisShowDate - now) < 
        (nextShowDate - now)) {
        // if the show is in the future, and the distance between now and the show is the smallest
        nextShow = s;
    }
});

const li = document.querySelector(".next-show");

const h2 = document.createElement("h2");
h2.textContent = `next show: ${nextShow.title}`;
li.appendChild(h2);

if (nextShow.poster) {
    const p  = document.createElement("p");
    const img = document.createElement("img");
    img.src = nextShow.poster;
    img.alt = nextShow.title;
    p.appendChild(img);
    li.appendChild(p);
}
