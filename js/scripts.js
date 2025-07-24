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

// music
document.addEventListener('click', function playMusic() {
    const audio = new Audio('music/sleepy.mp3');
    audio.loop = true;
    audio.play().then(() => {
        console.log('背景音乐已开始播放');
    }).catch(error => {
        console.error('自动播放失败：', error);
    });
    // 只绑定一次，播放后解绑
    document.removeEventListener('click', playMusic);
});