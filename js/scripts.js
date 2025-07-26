// music
document.addEventListener('click', function playMusic() {
    const audio = new Audio('music/sleepy.mp3');
    audio.loop = true;
    audio.play().then(() => {
        console.log('背景音乐已开始播放');
    }).catch(error => {
        console.error('自动播放失败：', error);
    });
    document.removeEventListener('click', playMusic);
});