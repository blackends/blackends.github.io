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
      anchor: "{{ post.date | date: '%m%-d%Y' }}",
      poster: "{{ post.poster }}",
      bands: "{{ post.bands }}",
      link: "{{ post.link }}",
      title: "{{ post.date | date: '%B %-d, %Y' }} @ {{ post.venue }}, {{ post.location }}"
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
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
let nextShow = allShows[0];

console.log(now)

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
h2.textContent = "next show: ";
li.appendChild(h2);

const a = document.createElement("a");
a.href = `/tour/#${nextShow.anchor}`;
a.textContent = `${nextShow.title}`;
h2.appendChild(a);

if (nextShow.link) {
    const linka = document.createElement("a");
    linka.href = nextShow.link;
    linka.textContent = `🔗 ${ nextShow.bands ? nextShow.bands : "Event Link" }`;
    const p  = document.createElement("p");
    p.appendChild(linka);
    li.appendChild(p);
} else {
    const p  = document.createElement("p");
    p.textContent = nextShow.bands;
    li.appendChild(p);
}

if (nextShow.poster) {
    const p  = document.createElement("p");
    const img = document.createElement("img");
    img.src = nextShow.poster;
    img.alt = nextShow.title;
    p.appendChild(img);

    if (nextShow.link) {
        const linka = document.createElement("a");
        linka.href = nextShow.link;
        linka.alt = `${ nextShow.title }`;
        linka.appendChild(p);
        li.appendChild(linka);
    } else {
        li.appendChild(p);
    }
}

