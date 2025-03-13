// Hamburger menu
const nav = document.querySelector("nav");
let menu_open = false;
function toggleMenu() {
    // debounce the close (do not need to debounce open)
    if (!(nav.classList.contains("fade-out") && nav.classList.contains("show"))) {
        menu_open = !menu_open;
        if (menu_open) {
            nav.classList.add("show");
            setTimeout(() => {
                nav.classList.add("fade-in");
            }, 0);
        } else {
            nav.classList.add("fade-out");
            setTimeout(() => {
                nav.classList.remove("fade-out");
                nav.classList.remove("fade-in");
                nav.classList.remove("show");
            }, 700);
        }
    }
}

// On hover
let currentNavColor = "";
let currentLinkColor = "";
nav.querySelectorAll("a").forEach(link => {
    currentLinkColor = link.style.color;
    link.addEventListener("mouseover", e => {
        e.target.style.color = currentNavColor = randomColor(currentNavColor);
        e.target.style.textShadow = `${randomColor(currentNavColor)} 1px 1px`;
    });
    link.addEventListener("mouseout", e => {
        e.target.style.color = currentLinkColor;
        e.target.style.textShadow = "none";
    });
});
