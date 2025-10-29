// Carousel auto-slide (optional)
const carousel = document.querySelector('.carousel');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 320;
    if (scrollAmount >= carousel.scrollWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 3000);

// Form submit animation
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('mouseenter', () => {
    submitBtn.innerHTML = '<i class="fas fa-plane"></i> AA Noor Travels will contact you soon ✈️';
});
submitBtn.addEventListener('mouseleave', () => {
    submitBtn.innerHTML = 'BOOK NOW';
});

// Mobile nav toggle (if needed, add a hamburger menu in HTML)