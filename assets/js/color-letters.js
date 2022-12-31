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

const container = document.querySelector("#black-ends-logo");
const letters = [...document.querySelectorAll('.black-ends-logo-letter')];
let animationClass = colors[0];

function allColorsMatch() {
    const color = letters[0].style.fill;
    return letters.every(l => l.style.fill == color);
}

function applyMagic() {
    if (!letters.some(l => l.classList.contains(animationClass))) {
        animationClass = letters[0].style.fill;
        let t = 0;
        letters.forEach(l => {
            t += 1000;
            setTimeout(() => {
                l.classList.add(animationClass);
            }, t);
        });
    }
}

function removeMagic() {
    letters.forEach(l => {
        if (l.classList.contains(animationClass)) {
            const style = getComputedStyle(l);
            const computedTranslate = style.getPropertyValue('translate');
            l.style.translate = computedTranslate;
            l.classList.remove(animationClass);
            setTimeout(() => {
                l.style.translate = '0px 0px';
            }, 0);
        }
    });
}

let timeout;
function checkMagic() {
    if (allColorsMatch()) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (allColorsMatch()) {
                applyMagic();
            }
        }, 5000);
    } else {
        removeMagic();
    }
}

letters.forEach(l => {
    l.style.fill = randomColor();
    l.addEventListener('mouseover', e => {
        e.target.style.fill = randomColor(e.target.style.fill);
        checkMagic();
    });
});
checkMagic();

