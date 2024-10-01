const toggleButton = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.mobile-menu');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});