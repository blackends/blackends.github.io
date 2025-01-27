const hero = document.querySelector(".hero-bg");

if (hero) {
    hero.style.backgroundImage = `url("/assets/img/gallery/hero${randomInt(0,2)}.jpg")`;
}

