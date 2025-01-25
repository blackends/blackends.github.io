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
    } while (color == current)
    return color;
}
