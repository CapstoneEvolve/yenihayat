
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('expanded');
}
document.addEventListener("DOMContentLoaded", function () {
  // Dropdown menü açıldığında, herhangi bir linke otomatik odaklanmasını engelle
  const dropdownContent = document.querySelector(".dropdown-content");
  
  dropdownContent.addEventListener("click", function (event) {
      event.preventDefault();  // Linke otomatik odaklanmayı engelle
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const activitiesMenu = document.querySelector(".activities-menu")
  const activitiesLink = document.querySelector(".activities-link");

  activitiesLink.addEventListener("click", function (event) {
      event.preventDefault();
      activitiesMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
      if (!activitiesLink.contains(event.target) && !activitiesMenu.contains(event.target)) {
          activitiesMenu.classList.remove("show");
      }
    });
});


