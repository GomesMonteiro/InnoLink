
// Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Alternar Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.getElementById('body');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2m-14 0H3m16.364-7.364l-1.414 1.414m-12.728 0l1.414-1.414m0 12.728l-1.414-1.414m12.728 0l1.414 1.414M15 12a3 3 0 11-6 0 3 3 0 016 0z" />';
  } else {
    themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3.1a8.9 8.9 0 100 17.8 9 9 0 000-17.8z" />';
  }
});
