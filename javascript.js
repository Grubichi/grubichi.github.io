// Uzyskujemy dostęp do ikony menu i menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');

// Dodajemy event listener na kliknięcie
menuToggle.addEventListener('click', function() {
  // Toggle klasy 'active' na menu, aby rozwinąć/zwijać menu
  menu.classList.toggle('active');
});