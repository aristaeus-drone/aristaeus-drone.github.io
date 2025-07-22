document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.querySelector('.main-nav');

    // 1. Toggle mobile navigation
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        navLinks.classList.toggle('open');
    });

    // 2. Add a background to the nav on scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
});