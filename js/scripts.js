// Hero Section Parallax Effect
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
    const scrollOffset = window.scrollY;
    hero.style.backgroundPositionY = `${scrollOffset * 0.7}px`;
});

// Auto-Radio Switching
const radios = document.querySelectorAll('input[type="radio"]');
let currentIndex = 0;

setInterval(() => {
    if (radios.length > 0) {
        radios[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % radios.length;
        radios[currentIndex].checked = true;
    }
}, 2000);