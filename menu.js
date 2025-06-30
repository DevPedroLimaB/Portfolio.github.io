const btnMenu = document.getElementById('btn-menu');
const mobileMenu = document.getElementById('mobile-menu');
const btnCloseMenu = document.getElementById('btn-close-menu');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const scrollTopBtn = document.getElementById('btn-scroll-top');
const form = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// Abrir menu mobile
btnMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  mobileMenu.setAttribute('aria-hidden', 'false');
});

// Fechar menu mobile
btnCloseMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  mobileMenu.setAttribute('aria-hidden', 'true');
});

// Fechar menu ao clicar em um link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// Alternar tema claro / escuro
btnThemeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const icon = btnThemeToggle.querySelector('i');
  if (document.body.classList.contains('dark-theme')) {
    icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
});

// Mostrar botão voltar ao topo ao rolar página
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll suave para topo
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Filtrar projetos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
        card.classList.remove('fade-in');
      }
    });
  });
});

// Formulário simples (apenas feedback visual)
form.addEventListener('submit', e => {
  e.preventDefault();
  formFeedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
  form.reset();
  setTimeout(() => {
    formFeedback.textContent = '';
  }, 5000);
});
