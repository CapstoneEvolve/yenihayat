// Hamburger menüsünü kontrol et
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('expanded');
}

// Dropdown menüleri kontrol et
function initializeDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown'); // Tüm dropdown'ları seç

  dropdowns.forEach((dropdown) => {
    const dropBtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Her bir dropdown için tıklama işlevi ekle
    dropBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Linkin varsayılan davranışını engelle

      // Tüm diğer açık dropdown'ları kapat
      document.querySelectorAll('.dropdown-content').forEach((content) => {
        if (content !== dropdownContent) {
          content.style.display = 'none';
          content.classList.remove('active');
        }
      });

      // Şu anki dropdown'u göster/gizle
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        dropdownContent.classList.remove('active');
      } else {
        dropdownContent.style.display = 'block';
        dropdownContent.classList.add('active');
      }
    });
  });
}

// Sayfa yüklendiğinde dropdown işlevlerini başlat
document.addEventListener('DOMContentLoaded', () => {
  initializeDropdowns();
});
