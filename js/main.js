// Navigation Menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerBars = document.querySelectorAll('.hamburger .bar');

    if (navLinks) {
        navLinks.classList.toggle('expanded');
    }

    hamburgerBars.forEach(bar => {
        bar.classList.toggle('open');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (hamburger && navLinks) {
        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('expanded');
                document.querySelectorAll('.hamburger .bar').forEach(bar => {
                    bar.classList.remove('open');
                });
            }
        });
    }
});

// Dropdown Menu
document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropBtn && dropdownContent) {
        function toggleDropdown() {
            if (window.innerWidth >= 320 && window.innerWidth <= 768) {
                dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
                dropdownContent.style.opacity = dropdownContent.style.display === "block" ? "1" : "0";
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
    }
});

// Hero Section - Auto Slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.hero-slides');
    const paginationContainer = document.querySelector('.pagination');
    const heroContainer = document.querySelector('.hero-container');
    let currentSlide = 0;
    let autoSlideInterval;

    if (slides.length > 0 && paginationContainer) {
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

        if (heroContainer) {
            let touchStartX = 0, touchEndX = 0;

            heroContainer.addEventListener('touchstart', (event) => {
                touchStartX = event.changedTouches[0].screenX;
            });

            heroContainer.addEventListener('touchend', (event) => {
                touchEndX = event.changedTouches[0].screenX;
                if (touchStartX - touchEndX > 50) {
                    currentSlide = (currentSlide + 1) % slides.length;
                } else if (touchEndX - touchStartX > 50) {
                    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                }
                updateSlider();
                resetAutoSlide();
            });
        }
    }
});

// Highlights Section 
function formatArticleDate(publishDate) {
    const now = new Date();
    const published = new Date(publishDate);
    const diffInMs = now - published;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInHours < 24) {
        return diffInMinutes < 60 ? `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
            : `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
        return published.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const articles = [
        { id: 'article1-time', date: '2025-02-06T22:09:00' },
        { id: 'article2-time', date: '2025-02-06T22:08:00' },
        { id: 'article3-time', date: '2025-02-06T20:54:00' },
        { id: 'article4-time', date: '2025-02-06T19:30:00' }
    ];

    articles.forEach(article => {
        const element = document.getElementById(article.id);
        if (element) {
            element.textContent = formatArticleDate(article.date);
        }
    });
});

// Contact Form - Google Apps Script Integration
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submit-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById("name").value.trim(),
                email: document.getElementById("email").value.trim(),
                message: document.getElementById("message").value.trim()
            };

            if (!formData.name || !formData.email || !formData.message) {
                alert("Please fill out all fields.");
                return;
            }

            fetch("https://script.google.com/macros/s/AKfycbyOPM2wRqpCrwl7bM04epq7181YeV_uZkpMfs_KS_W4KXlb5_y4w7s8LPRYSmhQEcwpoQ/exec", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            })
            .catch(error => {
                console.error("Error:", error);
                alert("There was an error sending your message. Please try again.");
            });
        });
    }
});




// first way

// (function() {
//     emailjs.init("YMC-Yh8IX8vBeyb_e"); // Replace with your EmailJS Public Key
//   })();

//   function sendMail(event) {
//     event.preventDefault(); // Prevent default form submission

//     let params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value
//     };

//     emailjs.send("service_dtl756r", "template_1abqjig", params)
//       .then(function(response) {
//         alert("Email sent successfully!");
//         document.getElementById("contact-form").reset(); // Clear form after sending
//       }, function(error) {
//         alert("Failed to send email: " + error.text);
//       });
//   }



//third way

// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     let formData = new FormData(this);

//     fetch("https://script.google.com/macros/s/AKfycbzwXDtLOnd4VdYGnN4HJvg358i2jx7xJ5KE-K_w0INQaP5rB4G7MvSLDB8d5AK2RSirMA/exec", { // Replace with your actual URL
//       method: "POST",
//       body: formData
//     })
//     .then(response => response.text())
//     .then(data => {
//       alert("Message sent successfully!");
//       document.getElementById("contact-form").reset();
//     })
//     .catch(error => alert("Error sending message: " + error));
//   });

