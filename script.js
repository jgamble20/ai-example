// Add a background div dynamically to create a full-screen flashy effect
document.addEventListener('DOMContentLoaded', () => {
    const bg = document.createElement('div');
    bg.classList.add('background');
    document.body.appendChild(bg);
});
