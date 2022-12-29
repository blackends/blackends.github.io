function randomInt(min, max) {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}

const colors = [
    'crimson',
    'royalblue',
    'gold',
    'forestgreen'
];

function randomColor(current='') {
    do {
        var color = colors[randomInt(0, colors.length - 1)];
    } while(color == current)
    return color;
}

[...document.querySelectorAll('.letter')].forEach(l => {
    l.style.fill = randomColor();
    l.addEventListener('mouseover', e => e.target.style.fill = randomColor(e.target.style.fill));
});

