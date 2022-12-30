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

const container = document.querySelector(".svg-logo");
const letters = [...document.querySelectorAll('.letter')];
let interval;

function checkMagic() {
    console.log('checking for magic')
    if (allColorsMatch()) {
        applyMagic()
    } else {
        removeMagic();
    }
}

function allColorsMatch() {
    const color = letters[0].style.fill;
    return letters.every(l => l.style.fill == color);
}

function applyMagic() {
    console.log('apply magic')
    if (!letters.some(l => l.classList.contains('meander'))) {
        console.log('magic not applied yet')
        let t = 0;
        letters.forEach(l => {
            t += 1750;
            setTimeout(() => {
                l.classList.add('meander');
            }, t)
        });
    }
}

function removeMagic() {
    console.log('remove magic')
    letters.forEach(l => {
        l.classList.remove('meander');
    });
}

function resetInterval() {
    console.log('reset interval')
    clearInterval(interval);
    interval = setInterval(() => {
        checkMagic();
    }, 5000);
}

letters.forEach(l => {
    l.style.fill = randomColor();
    l.addEventListener('mouseover', e => {
        console.log('moused over, changing color')
        e.target.style.fill = randomColor(e.target.style.fill)
        removeMagic();
        resetInterval();
    });
});

checkMagic();
resetInterval();

