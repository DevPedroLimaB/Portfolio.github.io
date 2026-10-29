export type Lang = 'pt' | 'en' | 'es';

type Project = {
  title: string;
  context: string;
  body: string;
  stack: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

export type Brand = 'qavah' | 'hubvision';

type Job = {
  org: string;
  role: string;
  period?: string;
  body: string;
  points?: string[];
  brand?: Brand;
};

export type Content = {
  nav: { projects: string; experience: string; about: string; contact: string };
  langLabel: string;
  hero: { lead: string; sub: string; primary: string; secondary: string };
  projects: { title: string; items: Project[] };
  experience: {
    title: string;
    items: Job[];
    qavahLink: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    stackTitle: string;
    stack: { group: string; items: string[] }[];
  };
  education: {
    title: string;
    degree: string;
    school: string;
    certsTitle: string;
    certs: string[];
  };
  contact: { title: string; body: string; email: string };
  footer: string;
};

const stackItems = {
  front: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  back: ['Node.js', 'Java', 'Spring Boot', 'Python', 'APIs REST'],
  data: ['PostgreSQL', 'SQL Server', 'MySQL', 'Redis'],
  infra: ['Docker', 'AWS', 'Linux', 'CI/CD'],
};

const certs = [
  'Google Cybersecurity',
  'Scrum Foundation (SFPC)',
  'Lean Six Sigma Yellow Belt (FM2S)',
  'Linux Essentials',
  'n8n',
  'IT Help Desk Professional',
];

const rvlLinks = [
  { label: 'rvl-grupo.com', href: 'https://rvl-grupo.com' },
  { label: 'GitHub', href: 'https://github.com/DevPedroLimaB/rvl-grupo' },
];

const saasStack = ['React', 'TypeScript', 'PostgreSQL'];
const hackStack = ['React', 'Node.js'];
const rvlStack = ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'];

export const content: Record<Lang, Content> = {
  pt: {
    nav: { projects: 'Projetos', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desenvolvedor full stack em Recife. Construo sistemas web, APIs e integrações para empresas.',
      sub: 'Antes do código, trabalhei com análise fiscal. Começo todo projeto pelo processo, depois pela tela.',
      primary: 'Ver projetos',
      secondary: 'Falar comigo',
    },
    projects: {
      title: 'Projetos',
      items: [
        {
          title: 'SaaS B2B de gestão de contratos',
          context: 'Freelance, 2026',
          body: 'Módulos financeiros e área do cliente de uma plataforma de gestão.',
          stack: saasStack,
          note: 'Código privado.',
        },
        {
          title: 'Plataforma de acessibilidade para escolas',
          context: 'Vencedor do hackathon da faculdade',
          body: 'Ajuda professores a adaptar conteúdo para alunos com TEA e TDAH. Feita em equipe de quatro.',
          stack: hackStack,
        },
        {
          title: 'Site institucional da RVL Grupo',
          context: 'Front-end, 2024',
          body: 'Site de uma empresa de pintura naval. Responsável pelo front-end.',
          stack: rvlStack,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experiência',
      qavahLink: 'Qavah no LinkedIn',
      items: [
        {
          org: 'Hubvision',
          role: 'Desenvolvedor de software',
          period: '2026 até hoje',
          brand: 'hubvision',
          body: 'Sistemas web, integrações e soluções com IA para a operação e os clientes da empresa.',
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 até hoje',
          brand: 'qavah',
          body: 'Minha empresa de desenvolvimento sob medida, para empresas e profissionais.',
          points: [
            'Sistemas web e SaaS',
            'Sites e landing pages',
            'Painéis e análise de dados',
            'Integração entre sistemas e APIs',
            'Automação de processos internos',
          ],
        },
        {
          org: 'Faculdade Nova Roma',
          role: 'Monitor de Desenvolvimento Mobile',
          body: 'Apoio aos alunos em aula e na revisão dos projetos.',
        },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Estou no 7º período de Ciência da Computação na Faculdade Nova Roma. Trabalho com análise de dados desde 2017 e com desenvolvimento full stack desde 2023.',
        'A passagem pela análise fiscal me ensinou como o financeiro e a operação funcionam na prática. É o que eu levo para cada sistema que construo.',
      ],
      stackTitle: 'Com o que trabalho',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Dados', items: stackItems.data },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Formação',
      degree: 'Ciência da Computação, 7º período',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certificações',
      certs: [...certs, 'Excel Avançado'],
    },
    contact: {
      title: 'Contato',
      body: 'Projetos ou conversas técnicas. Respondo por e-mail.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Identidade visual da Qavah IO.',
  },

  en: {
    nav: { projects: 'Work', experience: 'Experience', about: 'About', contact: 'Contact' },
    langLabel: 'Language',
    hero: {
      lead: 'Full-stack developer in Recife, Brazil. I build web systems, APIs and integrations for companies.',
      sub: 'Before code, I worked in tax analysis. I start every project with the process, then the screen.',
      primary: 'See work',
      secondary: 'Get in touch',
    },
    projects: {
      title: 'Work',
      items: [
        {
          title: 'B2B contract management SaaS',
          context: 'Freelance, 2026',
          body: 'Finance modules and client area for a management platform.',
          stack: saasStack,
          note: 'Private code.',
        },
        {
          title: 'Accessibility platform for schools',
          context: 'University hackathon winner',
          body: 'Helps teachers adapt material for students with autism and ADHD. Built by a team of four.',
          stack: hackStack,
        },
        {
          title: 'RVL Grupo company website',
          context: 'Front-end, 2024',
          body: 'Website for a naval painting company. I owned the front-end.',
          stack: rvlStack,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experience',
      qavahLink: 'Qavah on LinkedIn',
      items: [
        {
          org: 'Hubvision',
          role: 'Software developer',
          period: '2026 to now',
          brand: 'hubvision',
          body: 'Web systems, integrations and AI solutions for the company’s operations and clients.',
        },
        {
          org: 'Qavah IO',
          role: 'Founder',
          period: '2023 to now',
          brand: 'qavah',
          body: 'My custom software studio, for companies and professionals.',
          points: [
            'Web systems and SaaS',
            'Websites and landing pages',
            'Dashboards and data analysis',
            'System and API integration',
            'Internal process automation',
          ],
        },
        {
          org: 'Faculdade Nova Roma',
          role: 'Mobile Development teaching assistant',
          body: 'Supported students in class and in project reviews.',
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'I am in the 7th semester of Computer Science at Faculdade Nova Roma. I have worked with data analysis since 2017 and with full-stack development since 2023.',
        'My time in tax analysis taught me how finance and operations really work. I bring that to every system I build.',
      ],
      stackTitle: 'What I work with',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Data', items: stackItems.data },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Education',
      degree: 'Computer Science, 7th semester',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certifications',
      certs: [...certs, 'Advanced Excel'],
    },
    contact: {
      title: 'Contact',
      body: 'Projects or technical conversations. I reply by email.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Visual identity by Qavah IO.',
  },

  es: {
    nav: { projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desarrollador full stack en Recife, Brasil. Construyo sistemas web, APIs e integraciones para empresas.',
      sub: 'Antes del código, trabajé en análisis fiscal. Empiezo cada proyecto por el proceso, después por la pantalla.',
      primary: 'Ver proyectos',
      secondary: 'Hablemos',
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          title: 'SaaS B2B de gestión de contratos',
          context: 'Freelance, 2026',
          body: 'Módulos financieros y área del cliente de una plataforma de gestión.',
          stack: saasStack,
          note: 'Código privado.',
        },
        {
          title: 'Plataforma de accesibilidad para escuelas',
          context: 'Ganador del hackathon de la universidad',
          body: 'Ayuda a los profesores a adaptar contenido para alumnos con TEA y TDAH. Hecha en equipo de cuatro.',
          stack: hackStack,
        },
        {
          title: 'Sitio institucional de RVL Grupo',
          context: 'Front-end, 2024',
          body: 'Sitio de una empresa de pintura naval. Responsable del front-end.',
          stack: rvlStack,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      qavahLink: 'Qavah en LinkedIn',
      items: [
        {
          org: 'Hubvision',
          role: 'Desarrollador de software',
          period: '2026 hasta hoy',
          brand: 'hubvision',
          body: 'Sistemas web, integraciones y soluciones con IA para la operación y los clientes de la empresa.',
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 hasta hoy',
          brand: 'qavah',
          body: 'Mi empresa de desarrollo a medida, para empresas y profesionales.',
          points: [
            'Sistemas web y SaaS',
            'Sitios y landing pages',
            'Paneles y análisis de datos',
            'Integración entre sistemas y APIs',
            'Automatización de procesos internos',
          ],
        },
        {
          org: 'Faculdade Nova Roma',
          role: 'Monitor de Desarrollo Mobile',
          body: 'Apoyo a los alumnos en clase y en la revisión de proyectos.',
        },
      ],
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Estoy en el 7º semestre de Ciencias de la Computación en la Faculdade Nova Roma. Trabajo con análisis de datos desde 2017 y con desarrollo full stack desde 2023.',
        'Mi paso por el análisis fiscal me enseñó cómo funcionan en la práctica las finanzas y la operación. Es lo que llevo a cada sistema que construyo.',
      ],
      stackTitle: 'Con qué trabajo',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Datos', items: stackItems.data },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Formación',
      degree: 'Ciencias de la Computación, 7º semestre',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certificaciones',
      certs: [...certs, 'Excel Avanzado'],
    },
    contact: {
      title: 'Contacto',
      body: 'Proyectos o conversaciones técnicas. Respondo por correo.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Identidad visual de Qavah IO.',
  },
};

export const links = {
  github: 'https://github.com/DevPedroLimaB',
  linkedin: 'https://www.linkedin.com/in/pedrolimasecedev',
  instagram: 'https://www.instagram.com/devpedrolima/',
  qavah: 'https://www.linkedin.com/company/qavah-io',
};
