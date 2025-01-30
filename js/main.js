
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('expanded');
}
document.addEventListener("DOMContentLoaded", function () {

  const dropdownContent = document.querySelector(".dropdown-content");
  
  dropdownContent.addEventListener("click", function (event) {
      event.preventDefault();
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


