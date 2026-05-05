const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a, button, .skill-tag, .skill-cell').forEach(el => {
el.addEventListener('mouseenter', () => { ring.style.transform = 'translate(-50%,-50%) scale(1.6)'; ring.style.opacity = '0.9'; });
el.addEventListener('mouseleave', () => { ring.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.opacity = '0.5'; });
});

const io = new IntersectionObserver(entries => {
entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.exp-item').forEach(el => io.observe(el));

const langObs = new IntersectionObserver(entries => {
entries.forEach(e => {
    if (e.isIntersecting) {
    e.target.querySelectorAll('.lang-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
    });
    }
});
}, { threshold: 0.3 });
const langSection = document.getElementById('languages');
if (langSection) langObs.observe(langSection);
