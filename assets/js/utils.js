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
function transparentColors(o=0.5) {
    return [
        `rgba(220,20,60,${o})`,
        `rgba(65,105,225,${o})`,
        `rgba(255,215,0,${o})`,
        `rgba(34,139,34,${o})`
    ];
}
function randomColor(current='') {
    do {
        var color = colors[randomInt(0, colors.length - 1)];
    } while (color == current)
    return color;
}
function randomColorRGBA(o=0.5, current='') {
    const c = transparentColors(o);
    do {
        var color = c[randomInt(0, c.length - 1)];
    } while (color == current)
    return color;
}
