// Hamburger menu toggle
const menuBtn = document.getElementById('menu-btn');
const navBar = document.querySelector('.nav-bar');

if (menuBtn && navBar) {
  menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });

  // Close nav when a link is clicked
  navBar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navBar.classList.remove('open');
    });
  });

  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navBar.contains(e.target)) {
      navBar.classList.remove('open');
    }
  });
}