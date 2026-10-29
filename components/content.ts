export type Lang = 'pt' | 'en' | 'es';

type Project = {
  title: string;
  context: string;
  body: string;
  stack: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

type Job = {
  org: string;
  role: string;
  period?: string;
  body: string;
  points?: string[];
  qavah?: boolean;
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

export const content: Record<Lang, Content> = {
  pt: {
    nav: { projects: 'Projetos', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desenvolvedor full stack em Recife. Construo sistemas web, APIs e integrações que a operação de uma empresa usa todo dia.',
      sub: 'Antes do código, trabalhei com análise fiscal. Por isso começo todo projeto pelo processo, e só depois pela tela.',
      primary: 'Ver projetos',
      secondary: 'Falar comigo',
    },
    projects: {
      title: 'Projetos',
      items: [
        {
          title: 'Módulos financeiros para um SaaS de contratos imobiliários',
          context: 'Freelance pela Qavah, 2026',
          body: 'Desenvolvi o módulo financeiro, o fluxo de salas comerciais e a área do cliente de uma plataforma B2B que gerencia contratos de imóveis comerciais. Lançamentos por contrato, várias linhas de receita e um acesso em que cada cliente vê só os próprios dados, garantido por regras no banco.',
          stack: ['React', 'TypeScript', 'PostgreSQL', 'Edge Functions'],
          note: 'Projeto sob contrato, código privado.',
        },
        {
          title: 'Plataforma de acessibilidade para escolas',
          context: 'Projeto vencedor do hackathon da faculdade',
          body: 'Sistema que ajuda professores a criar e adaptar conteúdo para alunos com TEA e TDAH. Feito por uma equipe de quatro pessoas dentro do prazo do hackathon. Fiquei com a ponta a ponta da aplicação, do front ao back.',
          stack: ['React', 'Node.js'],
        },
        {
          title: 'Site institucional da RVL Grupo',
          context: 'Front-end, 2024',
          body: 'Site de uma empresa de tratamento de superfícies e pintura naval. Cuidei do front-end inteiro: layout responsivo, performance e a forma como cada serviço é apresentado para quem contrata.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experiência',
      qavahLink: 'Página da Qavah no LinkedIn',
      items: [
        {
          org: 'Hubvision',
          role: 'Desenvolvedor de software',
          period: '2026 até hoje',
          body: 'Desenvolvimento e sustentação de sistemas web, integrações com ERP e soluções com IA, atendendo a operação interna e clientes da empresa.',
          points: [
            'Implantação junto aos clientes, com suporte e visitas presenciais, independente do tamanho da conta.',
            'Do levantamento de requisitos à sustentação em produção.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 até hoje',
          qavah: true,
          body: 'Minha empresa de desenvolvimento sob medida. Atendo empresas e profissionais que precisam de um sistema feito para o processo deles, e não o contrário.',
          points: [
            'Módulos para um SaaS B2B de gestão de contratos imobiliários.',
            'Aplicações web sob medida para pequenas empresas.',
            'Automação de rotinas internas, como relatórios e tarefas de back-office.',
          ],
        },
        {
          org: 'Faculdade Nova Roma',
          role: 'Monitor de Desenvolvimento Mobile',
          body: 'Apoio aos alunos da disciplina em aula e na revisão dos projetos.',
        },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Estou no 7º período de Ciência da Computação na Faculdade Nova Roma e desenvolvo software desde 2023. Trabalho bem nos dois lados da aplicação e gosto mais da parte que ninguém vê: modelagem de dados, integrações e o que acontece quando dois sistemas precisam conversar.',
        'Comecei com análise de dados e análise fiscal, como autônomo. Isso me deu algo que falta em muito projeto de software: saber como o financeiro, o fiscal e a operação funcionam na prática, e conversar com quem trabalha neles.',
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
      body: 'Um projeto, uma conversa técnica ou uma ideia que precisa sair do papel. Respondo por e-mail.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Identidade visual da Qavah IO.',
  },

  en: {
    nav: { projects: 'Work', experience: 'Experience', about: 'About', contact: 'Contact' },
    langLabel: 'Language',
    hero: {
      lead: 'Full-stack developer in Recife, Brazil. I build web systems, APIs and integrations that a company runs on every day.',
      sub: 'Before code, I worked in tax analysis. That is why I start every project with the process, and only then the screen.',
      primary: 'See work',
      secondary: 'Get in touch',
    },
    projects: {
      title: 'Work',
      items: [
        {
          title: 'Finance modules for a real estate contracts SaaS',
          context: 'Freelance through Qavah, 2026',
          body: 'I built the finance module, the commercial rooms flow and the client area of a B2B platform that manages commercial property contracts. Entries per contract, multiple revenue lines and an area where each client only sees their own data, enforced by database rules.',
          stack: ['React', 'TypeScript', 'PostgreSQL', 'Edge Functions'],
          note: 'Client project, private code.',
        },
        {
          title: 'Accessibility platform for schools',
          context: 'Winning project at my university hackathon',
          body: 'A system that helps teachers create and adapt material for students with autism and ADHD. Built by a team of four within the hackathon deadline. I worked across the whole application, front to back.',
          stack: ['React', 'Node.js'],
        },
        {
          title: 'RVL Grupo company website',
          context: 'Front-end, 2024',
          body: 'Website for a surface treatment and naval painting company. I owned the front-end: responsive layout, performance and how each service is presented to buyers.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
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
          body: 'Building and maintaining web systems, ERP integrations and AI solutions for internal operations and the company’s clients.',
          points: [
            'Rolling out systems with clients, including support and on-site visits, regardless of account size.',
            'From requirements gathering to running in production.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Founder',
          period: '2023 to now',
          qavah: true,
          body: 'My custom software studio. I work with companies and professionals who need a system built around their process, not the other way around.',
          points: [
            'Modules for a B2B real estate contract management SaaS.',
            'Custom web applications for small businesses.',
            'Automation of internal routines such as reports and back-office tasks.',
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
        'I am in the 7th semester of Computer Science at Faculdade Nova Roma and have been building software since 2023. I am comfortable on both sides of an application and like the part nobody sees best: data modeling, integrations and what happens when two systems need to talk.',
        'I started out in data analysis and tax analysis as a freelancer. That gave me something many software projects lack: knowing how finance, tax and operations actually work, and being able to talk to the people who run them.',
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
      body: 'A project, a technical conversation or an idea that needs to get built. I reply by email.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Visual identity by Qavah IO.',
  },

  es: {
    nav: { projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desarrollador full stack en Recife, Brasil. Construyo sistemas web, APIs e integraciones que la operación de una empresa usa todos los días.',
      sub: 'Antes del código, trabajé en análisis fiscal. Por eso empiezo cada proyecto por el proceso, y solo después por la pantalla.',
      primary: 'Ver proyectos',
      secondary: 'Hablemos',
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          title: 'Módulos financieros para un SaaS de contratos inmobiliarios',
          context: 'Freelance a través de Qavah, 2026',
          body: 'Desarrollé el módulo financiero, el flujo de salas comerciales y el área del cliente de una plataforma B2B que gestiona contratos de inmuebles comerciales. Movimientos por contrato, varias líneas de ingreso y un acceso en el que cada cliente ve solo sus propios datos, garantizado por reglas en la base de datos.',
          stack: ['React', 'TypeScript', 'PostgreSQL', 'Edge Functions'],
          note: 'Proyecto bajo contrato, código privado.',
        },
        {
          title: 'Plataforma de accesibilidad para escuelas',
          context: 'Proyecto ganador del hackathon de la universidad',
          body: 'Sistema que ayuda a los profesores a crear y adaptar contenido para alumnos con TEA y TDAH. Hecho por un equipo de cuatro personas dentro del plazo del hackathon. Trabajé en toda la aplicación, del front al back.',
          stack: ['React', 'Node.js'],
        },
        {
          title: 'Sitio institucional de RVL Grupo',
          context: 'Front-end, 2024',
          body: 'Sitio de una empresa de tratamiento de superficies y pintura naval. Me encargué de todo el front-end: diseño responsivo, rendimiento y la forma en que se presenta cada servicio.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
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
          body: 'Desarrollo y mantenimiento de sistemas web, integraciones con ERP y soluciones con IA para la operación interna y los clientes de la empresa.',
          points: [
            'Implementación con los clientes, con soporte y visitas presenciales, sin importar el tamaño de la cuenta.',
            'Desde el levantamiento de requisitos hasta la operación en producción.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 hasta hoy',
          qavah: true,
          body: 'Mi empresa de desarrollo a medida. Trabajo con empresas y profesionales que necesitan un sistema hecho para su proceso, y no al revés.',
          points: [
            'Módulos para un SaaS B2B de gestión de contratos inmobiliarios.',
            'Aplicaciones web a medida para pequeñas empresas.',
            'Automatización de rutinas internas, como reportes y tareas de back-office.',
          ],
        },
        {
          org: 'Faculdade Nova Roma',
          role: 'Monitor de Desarrollo Mobile',
          body: 'Apoyo a los alumnos de la materia en clase y en la revisión de proyectos.',
        },
      ],
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Estoy en el 7º semestre de Ciencias de la Computación en la Faculdade Nova Roma y desarrollo software desde 2023. Me muevo bien en los dos lados de una aplicación y disfruto más la parte que nadie ve: modelado de datos, integraciones y lo que pasa cuando dos sistemas necesitan hablar.',
        'Empecé con análisis de datos y análisis fiscal, como independiente. Eso me dio algo que le falta a muchos proyectos de software: saber cómo funcionan en la práctica las finanzas, lo fiscal y la operación, y hablar con quienes trabajan en ellos.',
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
      body: 'Un proyecto, una conversación técnica o una idea que necesita salir del papel. Respondo por correo.',
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
