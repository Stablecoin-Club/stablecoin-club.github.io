// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Terminal window controls
document.querySelector('.terminal-control.close').addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.close();
    }, 300);
});

document.querySelector('.terminal-control.minimize').addEventListener('click', () => {
    document.body.style.transform = 'scale(0.8)';
    document.body.style.opacity = '0.5';
});

document.querySelector('.terminal-control.maximize').addEventListener('click', () => {
    document.body.style.transform = 'scale(1)';
    document.body.style.opacity = '1';
}); 