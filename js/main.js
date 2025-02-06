
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburgerBars = document.querySelectorAll('.hamburger .bar');
  
  navLinks.classList.toggle('expanded');
  
  hamburgerBars.forEach(bar => {
    bar.classList.toggle('open');
  });
}

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







