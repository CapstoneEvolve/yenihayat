// Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerBars = document.querySelectorAll('.hamburger .bar');
    
    navLinks.classList.toggle('expanded');
    
    hamburgerBars.forEach(bar => {
        bar.classList.toggle('open');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger'); // FIXED INVALID SELECTOR

    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('expanded');
            document.querySelectorAll('.hamburger .bar').forEach(bar => {
                bar.classList.remove('open');
            });
        }
    });
});

// Dropdown Menu
document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content"); // FIXED MISSING DECLARATION

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
// Navigation Menu

// Hero Section - Auto Slider
const slides = document.querySelectorAll('.hero-slides');
const paginationContainer = document.querySelector('.pagination');
let currentSlide = 0;
let autoSlideInterval;

const createPagination = () => {
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('pagination-dot');
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
            resetAutoSlide();
        });
        paginationContainer.appendChild(dot);
    });
};

const updateSlider = () => {
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });

    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }, 6000);
};

const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
};

createPagination();
updateSlider();
startAutoSlide();

document.querySelectorAll('.next-btn').forEach(button =>
    button.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
        resetAutoSlide();
    })
);

document.querySelectorAll('.prev-btn').forEach(button =>
    button.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
        resetAutoSlide();
    })
);

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
// Hero Section End

// Highlights Section 
function formatArticleDate(publishDate) {
    const now = new Date();
    const published = new Date(publishDate);
    const diffInMs = now - published;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInHours < 24) {
        if (diffInMinutes < 60) {
            // less than an hour - display time in minutes
            return diffInMinutes === 1 ? `${diffInMinutes} minute ago` : `${diffInMinutes} minutes ago`;
        } else {
            // one or more than an hour - display in hours
            return diffInHours === 1 ? `${diffInHours} hour ago` : `${diffInHours} hours ago`;
        };
    } else {
        return published.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }
}

// Here are the articles with their respective publish dates
const article1PublishDate = new Date('2025-02-06T22:09:00');
document.getElementById('article1-time').textContent = formatArticleDate(article1PublishDate);

const article2PublishDate = new Date('2025-02-06T22:08:00');
document.getElementById('article2-time').textContent = formatArticleDate(article2PublishDate);

const article3PublishDate = new Date('2025-02-06T20:54:00');
document.getElementById('article3-time').textContent = formatArticleDate(article3PublishDate);

const article4PublishDate = new Date('2025-02-06T19:30:00');
document.getElementById('article4-time').textContent = formatArticleDate(article4PublishDate);

// Highlights Section End

// Contact Form - Google Apps Script Integration
document.getElementById("submit-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyOPM2wRqpCrwl7bM04epq7181YeV_uZkpMfs_KS_W4KXlb5_y4w7s8LPRYSmhQEcwpoQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(() => {
        alert("Message sent successfully!");
        document.getElementById("submit-form").reset();
    })
    .catch(error => console.error("Error:", error));
});
//  Contact Us Form End