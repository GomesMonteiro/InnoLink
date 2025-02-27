
// Menu Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Alternar Tema
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1b75bc',
        secondary: '#f5f5f5',
        darkBg: '#1a202c',
        darkText: '#a0aec0',
        lightBg: '#ffffff',
        lightText: '#2d3748',
      },
    },
  },
};
 // Referências aos elementos do DOM
 const themeToggle = document.getElementById('theme-toggle');
 const themeIcon = document.getElementById('theme-icon');

 // Carrega o tema salvo no localStorage
 const savedTheme = localStorage.getItem('theme');
 if (savedTheme === 'dark') {
   document.documentElement.classList.add('dark');
   themeIcon.classList.replace('fa-sun', 'fa-moon'); // Mostra o ícone de lua
 } else {
   themeIcon.classList.replace('fa-moon', 'fa-sun'); // Mostra o ícone de sol
 }

 // Alterna o tema ao clicar no botão
 themeToggle.addEventListener('click', () => {
   if (document.documentElement.classList.contains('dark')) {
     document.documentElement.classList.remove('dark');
     themeIcon.classList.replace('fa-moon', 'fa-sun'); // Ícone de tema claro
     localStorage.setItem('theme', 'light'); // Salva tema claro
   } else {
     document.documentElement.classList.add('dark');
     themeIcon.classList.replace('fa-sun', 'fa-moon'); // Ícone de tema escuro
     localStorage.setItem('theme', 'dark'); // Salva tema escuro
   }
 });

    // Script para lidar com o envio de comentários
    const form = document.getElementById('comment-form');
    const commentsSection = document.getElementById('comments-section');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const commentText = document.getElementById('comment-text').value;

        if (commentText.trim()) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment', 'mb-6', 'p-4', 'border-b', 'border-gray-200');

            const commentHeader = document.createElement('div');
            commentHeader.classList.add('comment-header', 'flex', 'items-center', 'justify-between');
            const userName = document.createElement('span');
            userName.classList.add('font-semibold', 'text-gray-600', 'dark:text-gray-300');
            userName.textContent = 'Usuário Anônimo';
            const commentTime = document.createElement('span');
            commentTime.classList.add('text-gray-600', 'dark:text-gray-300', 'text-sm');
            commentTime.textContent = 'Agora';
            commentHeader.appendChild(userName);
            commentHeader.appendChild(commentTime);

            const commentBody = document.createElement('p');
            commentBody.classList.add('comment-body', 'text-gray-600', 'dark:text-gray-300', 'mt-2');
            commentBody.textContent = commentText;

            commentElement.appendChild(commentHeader);
            commentElement.appendChild(commentBody);

            commentsSection.prepend(commentElement);
            document.getElementById('comment-text').value = '';
        }
    });
//script para compartilhar
document.getElementById('share-button').addEventListener('click', function() {
  const url = window.location.href; // Pega o URL atual da página
  navigator.clipboard.writeText(url).then(function() {
      // Mostra feedback de sucesso
      const feedback = document.getElementById('feedback');
      feedback.classList.remove('hidden');
      setTimeout(function() {
          feedback.classList.add('hidden');
      }, 2000); // Esconde o feedback após 2 segundos
  }).catch(function(err) {
      console.error('Erro ao copiar o link: ', err);
  });
});

//filtrar cursos pagos e gratuitos

function filterCourses(type) {
  const courses = document.querySelectorAll('.course');
  courses.forEach(course => {
    course.style.display = course.classList.contains(type) ? 'block' : 'none';
  });
}

//partilhar curso em diferentes redes socias

(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

function shareOnSocialMedia(platform) {
  const url = window.location.href;
  let shareUrl = '';

  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=Confira este curso incrível!`;
      break;
    case 'instagram':
      alert('Instagram não suporta compartilhamento via web diretamente.');
      return;
    case 'telegram':
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=Confira este curso incrível!`;
      break;
    case 'whatsapp':
      shareUrl = `https://api.whatsapp.com/send?text=Confira este curso incrível! ${encodeURIComponent(url)}`;
      break;
    default:
      return;
  }

  window.open(shareUrl, '_blank', 'width=600,height=400');
}

//mapa

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([51.505, -0.09]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
