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
const anagrams = [
    'bled snack',
    'elk nabs cd',
    'bed clanks',
    'ben slackd',
    'blend sack',
    'bald necks',
    'lsd backne'
];
const relativeLetterPos = {
    b: { x: 0, y: 0 },
    l: { x: -130, y: 0 },
    a: { x: -260, y: 0 },
    c: { x: -380, y: 30 },
    k: { x: -510, y: 50 },
    e: { x: -720, y: 50 },
    n: { x: -850, y: 60 },
    d: { x: -1010, y: 30 },
    s: { x: -1160, y: 10 }
};
const letterWidth = 135,
    spaceWidth = 100;

function randomColor(current='') {
    do {
        var color = colors[randomInt(0, colors.length - 1)];
    } while (color == current)
    return color;
}

const link = document.querySelector("#logo-link");
const container = document.querySelector("#black-ends-logo");
const letters = [...document.querySelectorAll('.black-ends-logo-letter')];
let animationClass = colors[0];

if (window.location.pathname === '/') {
    link.removeChild(container);
    link.parentNode.insertBefore(container, link);
    link.parentNode.removeChild(link);
}

function allColorsMatch() {
    const color = letters[0].style.fill;
    return letters.every(l => l.style.fill == color);
}

function applyMagic() {
    if (!letters.some(l => l.classList.contains(animationClass))) {
        animationClass = 'anagram';
        applyAnagram();
    }
}

function superMagicMatch() {
    const answer = [0,3,2,1,1,2,0,1,3]
    let match = true;
    const strLetters = 'blackends'.split('');
    for (let i = 0; i < strLetters.length; i++) {
        const letter = strLetters[i];
        const elt = letters.find(l =>
            l.id.toLowerCase() == `black-ends-logo-${letter}`);
        match &= elt.style.fill == colors[answer[i]];
    }
    return match;
}

function applySuperMagic() {
    animationClass = 'super';
    let t = 0;
    letters.forEach(l => {
        t += randomInt(500, 1500);
        setTimeout(() => {
            l.classList.add('super');
        }, t);
    });
}

function applyAnagram() {
    const anagram = selectAnagram();
    let currentXpos = 0;
    for (let i = 0; i < anagram.length; i++) {
        const letter = anagram[i];
        if (letter != ' ') {
            const elt = letters.find(l => 
                l.id.toLowerCase() == `black-ends-logo-${letter}`);
            elt.classList.add(animationClass);
            const relPos = relativeLetterPos[letter];
            elt.style.translate = 
                `${relPos.x + currentXpos}px ${relPos.y}px`;
            currentXpos += letterWidth;
        } else {
            currentXpos += spaceWidth;
        }
    }
}

let usedAnagrams = [];
function selectAnagram() {
    if (usedAnagrams.length == anagrams.length) {
        usedAnagrams = [];
    }
    do {
        var anagram = anagrams[randomInt(0, anagrams.length - 1)];
    } while (usedAnagrams.includes(anagram))
    usedAnagrams.push(anagram);
    return anagram;
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
    if (superMagicMatch() || allColorsMatch()) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            if (superMagicMatch()) {
                applySuperMagic();
            } else if (allColorsMatch()) {
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

