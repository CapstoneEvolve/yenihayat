const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');

let currentIndex = 0;

function updateSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
});