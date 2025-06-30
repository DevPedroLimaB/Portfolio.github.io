document.addEventListener('DOMContentLoaded', () => {
  // Animação das barras de skill
  const skills = document.querySelectorAll('.progress-bar');

  function animateSkills() {
    skills.forEach(skill => {
      const percent = skill.getAttribute('data-percent');
      const bar = skill.querySelector('span');
      bar.style.width = percent + '%';
    });
  }

  // Rodar animação quando skills entrarem na viewport (usando Intersection Observer)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animateSkills();
        observer.disconnect(); // Só anima 1x
      }
    });
  }, {threshold: 0.5});

  const skillsSection = document.querySelector('.skills-section');
  if(skillsSection) observer.observe(skillsSection);

  // Filtro dos projetos
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      projects.forEach(project => {
        if(filter === 'all' || project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  // Validação simples formulário
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // Simples validação (mais pode ser adicionada)
    if(!form.name.value || !form.email.value || !form.message.value) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.style.color = 'red';
      return;
    }
    feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    feedback.style.color = 'limegreen';
    form.reset();
  });
});
