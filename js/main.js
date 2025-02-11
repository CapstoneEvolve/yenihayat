
// nav
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerBars = document.querySelectorAll('.hamburger .bar');
    
    navLinks.classList.toggle('expanded');
    
    hamburgerBars.forEach(bar => {
        bar.classList.toggle('open');
    });
};

document.querySelectorAll(".dropdown-link").forEach(link => {
    link.addEventListener("click", function () {
        dropdownContent.style.opacity = "0";
        setTimeout(() => {
            dropdownContent.style.display = "none";
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.');
    
    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('expanded');
            document.querySelectorAll('.hamburger .bar').forEach(bar => {
                bar.classList.remove('open');
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    function toggleDropdown() {
        if (window.innerWidth >= 320 && window.innerWidth <= 768) {
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.opacity = "0";
                setTimeout(() => {
                    dropdownContent.style.display = "none";
                }, 100);
            } else {
                dropdownContent.style.display = "block";
                setTimeout(() => {
                    dropdownContent.style.opacity = "1";
                }, 10);
            }
        }
    }

dropBtn.addEventListener("click", function (event) {
    event.preventDefault();
    toggleDropdown();
});

window.addEventListener("resize", function () {
    if (window.innerWidth < 576 || window.innerWidth > 768) {
            dropdownContent.style.display = "";
            dropdownContent.style.opacity = "";
        }
    });
});
// .\end nav

// hero
const slides = document.querySelectorAll('.hero-slides');
const paginationContainer = document.querySelector('.pagination');
let currentSlide = 0;
let autoSlideInterval;

// Create pagination dots
const createPagination = () => {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        dot.addEventListener('click', () => {
            currentSlide = index; // Update currentSlide to the dot's index
            updateSlider();
            resetAutoSlide(); // Reset the timer when manually navigating
        });
        paginationContainer.appendChild(dot);
    });
};

// Update the slider and pagination dots
const updateSlider = () => {
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });

    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

// Start auto-slide
const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 6000); // 6 seconds
};

// Reset auto-slide when user interacts
const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
};

// Initialize
createPagination();
updateSlider();
startAutoSlide(); // Begin auto-slide

// Next/Previous buttons
document.querySelectorAll('.next-btn').forEach(button =>
    button.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
        resetAutoSlide(); // Reset timer when manually navigating
    })
);

document.querySelectorAll('.prev-btn').forEach(button =>
    button.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        resetAutoSlide(); // Reset timer when manually navigating
    })
);

// Touch swipe functionality
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.hero-container').addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.querySelector('.hero-container').addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
        resetAutoSlide();
    }
    if (touchEndX - touchStartX > 50) {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        resetAutoSlide();
    }
});
// .\end hero