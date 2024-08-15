const scroller = document.getElementById('scroller');

// Drag to scroll functionality (optional)
let isDown = false;
let startX;
let scrollLeft;

scroller.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
});

scroller.addEventListener('mouseleave', () => {
    isDown = false;
});

scroller.addEventListener('mouseup', () => {
    isDown = false;
});

scroller.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the function if not mousedown
    e.preventDefault(); // Prevent default behavior
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scroller.scrollLeft = scrollLeft - walk;
});