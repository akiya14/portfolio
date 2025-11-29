const toggleButton = document.getElementById('theme-toggle');
const wallpaperButton = document.getElementById('wallpaper-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    toggleButton.style.transform = "scale(0.95)";
    setTimeout(() => {
        toggleButton.style.transform = "scale(1)";
    }, 150);
});

const wallpapers = [
    "url('pastel-gradient.jpg')",
    "url('study-desk.jpg')",
    "url('sunset-city.jpg')",
    "url('mint-waves.jpg')",
    "url('lavender-dream.jpg')",
    "url('grid-paper.jpg')"
];

let currentWallpaper = 0;

wallpaperButton.addEventListener('click', () => {
    currentWallpaper = (currentWallpaper + 1) % wallpapers.length;
    body.style.backgroundImage = wallpapers[currentWallpaper];
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "fixed";
    body.style.backgroundRepeat = "no-repeat";

    wallpaperButton.style.transform = "scale(0.95)";
    setTimeout(() => {
        wallpaperButton.style.transform = "scale(1)";
    }, 150);
});
