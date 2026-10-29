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
  services?: string[];
  highlight?: { value: string; label: string };
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
    servicesTitle: string;
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
  data: ['PostgreSQL', 'SQL Server', 'Oracle', 'MySQL', 'Redis'],
  ai: ['Agentes de IA com LLMs', 'Webhooks', 'n8n', 'TOTVS Protheus'],
  infra: ['Docker', 'Linux', 'AWS', 'CI/CD', 'Git'],
};
const stackAiEn = ['AI agents with LLMs', 'Webhooks', 'n8n', 'TOTVS Protheus'];
const stackAiEs = ['Agentes de IA con LLMs', 'Webhooks', 'n8n', 'TOTVS Protheus'];

const certs = [
  'Google Cybersecurity',
  'Scrum Foundation (SFPC)',
  'Lean Six Sigma Yellow Belt (FM2S)',
  'SQL Advanced (HackerRank)',
  'Software Engineer (HackerRank)',
  'n8n Integrations: APIs and Connected Workflows',
  'Linux Essentials',
];

const rvlLinks = [
  { label: 'rvl-grupo.com', href: 'https://rvl-grupo.com' },
  { label: 'GitHub', href: 'https://github.com/DevPedroLimaB/rvl-grupo' },
];

const st = {
  billing: ['React', 'TypeScript', 'PostgreSQL'],
  portal: ['React', 'PostgreSQL', 'Tailwind CSS'],
  erp: ['SQL', 'APIs REST', 'TOTVS Protheus'],
  ai: ['LLMs', 'Node.js', 'APIs REST'],
  saas: ['React', 'TypeScript', 'PostgreSQL'],
  hack: ['React', 'Node.js'],
  rvl: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
};

export const content: Record<Lang, Content> = {
  pt: {
    nav: { projects: 'Projetos', experience: 'Experiência', about: 'Sobre', contact: 'Contato' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desenvolvedor full stack em Recife. Construo sistemas web, integrações com ERP e agentes de IA que rodam em produção.',
      sub: 'Antes do código, trabalhei com análise fiscal. Começo todo projeto pelo processo, depois pela tela.',
      primary: 'Ver projetos',
      secondary: 'Falar comigo',
    },
    projects: {
      title: 'Projetos',
      items: [
        {
          title: 'Sistema de disparo de cobranças',
          context: 'Hubvision',
          body: 'Front-end de um sistema que chega a emitir R$ 200 mil em boletos em um único dia. Quadro de inadimplência, réguas configuráveis e agendamento de disparos.',
          stack: st.billing,
        },
        {
          title: 'Portal de chamados',
          context: 'Hubvision',
          body: 'Construído do zero, com autenticação e acesso por perfil. Migrei todo o histórico do sistema anterior via API: chamados, usuários e anexos.',
          stack: st.portal,
        },
        {
          title: 'Autoatendimento integrado ao ERP',
          context: 'Hubvision',
          body: 'O cliente final consulta boletos, notas fiscais e prazo de entrega de pedidos direto no ERP da empresa, só informando o CPF ou CNPJ.',
          stack: st.erp,
        },
        {
          title: 'Agentes de IA',
          context: 'Hubvision',
          body: 'Agentes com LLMs para atendimento e para transformar fala ou texto livre em dados estruturados, como apontamento de horas por áudio.',
          stack: st.ai,
        },
        {
          title: 'SaaS B2B de gestão de contratos',
          context: 'Qavah, 2026',
          body: 'Módulos financeiros com várias linhas de receita e área do cliente de uma plataforma em produção.',
          stack: st.saas,
          note: 'Código privado.',
        },
        {
          title: 'Plataforma de acessibilidade para escolas',
          context: 'Vencedor do hackathon da faculdade',
          body: 'Ajuda professores a adaptar conteúdo para alunos com TEA e TDAH. Feita em equipe de quatro, dentro do prazo do evento.',
          stack: st.hack,
        },
        {
          title: 'Site institucional da RVL Grupo',
          context: 'Freelance, 2024',
          body: 'Site de uma empresa de pintura naval. Responsável pelo front-end.',
          stack: st.rvl,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experiência',
      qavahLink: 'Qavah no LinkedIn',
      servicesTitle: 'O que a Qavah entrega',
      items: [
        {
          org: 'Hubvision',
          role: 'Desenvolvedor de software',
          period: '2026 até hoje',
          brand: 'hubvision',
          highlight: { value: 'R$ 200 mil', label: 'em boletos disparados em um único dia pelo sistema que desenvolvi' },
          body: 'Desenvolvimento e sustentação de sistemas web, integrações com ERP e soluções com IA, para a operação interna e os clientes da empresa.',
          points: [
            'Sistema de disparo de cobranças, portal de chamados e autoatendimento integrado ao ERP.',
            'Agentes de IA com LLMs para atendimento e extração de dados.',
            'Relatórios de atendimento por atendente e canal, mais precisos e mais rápidos.',
            'Scripts em Python para migrar e consolidar grandes volumes de dados, como um lote de 16 mil arquivos.',
            'Servidores Linux com aplicações em containers: disponibilidade e resposta a incidentes.',
            'Implantação com clientes: requisitos, treinamentos, suporte e visitas presenciais.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 até hoje',
          brand: 'qavah',
          body: 'Minha empresa de desenvolvimento sob medida. Cuido do projeto de ponta a ponta: escopo, arquitetura, proposta, desenvolvimento e entrega.',
          points: [
            'Módulos financeiros e área do cliente de um SaaS B2B em produção.',
            'Sites institucionais e aplicações web para pequenas empresas.',
            'Arquitetura de solução e propostas técnico-comerciais com escopo, prazo e custo de infraestrutura.',
          ],
          services: [
            'Sistemas web e SaaS',
            'Sites e landing pages',
            'Painéis e análise de dados',
            'Integração entre sistemas e APIs',
            'Automação de processos internos',
            'Consultoria técnica',
          ],
        },
        {
          org: 'Análise fiscal e de dados',
          role: 'Autônomo',
          period: 'desde 2017',
          body: 'Declarações de imposto de renda e análise de dados para pessoas físicas e pequenos negócios. Foi onde aprendi a lidar com dado financeiro com rigor.',
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
        'Estou no 7º período de Ciência da Computação na Faculdade Nova Roma. Desenvolvo full stack desde 2023 e trabalho com dados desde 2017.',
        'Meu forte é o que fica entre os sistemas: integrações, dados e regras de negócio. Venho da análise fiscal, então entendo o financeiro e a operação de quem vai usar o que eu construo, e converso direto com essas pessoas.',
      ],
      stackTitle: 'Com o que trabalho',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Dados', items: stackItems.data },
        { group: 'Integração e IA', items: stackItems.ai },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Formação',
      degree: 'Ciência da Computação, 7º período',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certificações',
      certs,
    },
    contact: {
      title: 'Contato',
      body: 'Projetos, parcerias ou conversas técnicas. Respondo por e-mail.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Identidade visual da Qavah IO.',
  },

  en: {
    nav: { projects: 'Work', experience: 'Experience', about: 'About', contact: 'Contact' },
    langLabel: 'Language',
    hero: {
      lead: 'Full-stack developer in Recife, Brazil. I build web systems, ERP integrations and AI agents that run in production.',
      sub: 'Before code, I worked in tax analysis. I start every project with the process, then the screen.',
      primary: 'See work',
      secondary: 'Get in touch',
    },
    projects: {
      title: 'Work',
      items: [
        {
          title: 'Billing dispatch system',
          context: 'Hubvision',
          body: 'Front-end of a system that issues up to R$ 200k in invoices in a single day. Overdue board, configurable reminder flows and scheduled dispatches.',
          stack: st.billing,
        },
        {
          title: 'Support ticket portal',
          context: 'Hubvision',
          body: 'Built from scratch with authentication and role-based access. I migrated the full history of the previous system through its API: tickets, users and attachments.',
          stack: st.portal,
        },
        {
          title: 'ERP-integrated self-service',
          context: 'Hubvision',
          body: 'End customers look up invoices, tax documents and order delivery dates straight from the company ERP using only their tax ID.',
          stack: st.erp,
        },
        {
          title: 'AI agents',
          context: 'Hubvision',
          body: 'LLM agents for customer service and for turning speech or free text into structured data, such as logging work hours by voice.',
          stack: st.ai,
        },
        {
          title: 'B2B contract management SaaS',
          context: 'Qavah, 2026',
          body: 'Finance modules with multiple revenue lines and the client area of a platform in production.',
          stack: st.saas,
          note: 'Private code.',
        },
        {
          title: 'Accessibility platform for schools',
          context: 'University hackathon winner',
          body: 'Helps teachers adapt material for students with autism and ADHD. Built by a team of four within the event deadline.',
          stack: st.hack,
        },
        {
          title: 'RVL Grupo company website',
          context: 'Freelance, 2024',
          body: 'Website for a naval painting company. I owned the front-end.',
          stack: st.rvl,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experience',
      qavahLink: 'Qavah on LinkedIn',
      servicesTitle: 'What Qavah delivers',
      items: [
        {
          org: 'Hubvision',
          role: 'Software developer',
          period: '2026 to now',
          brand: 'hubvision',
          highlight: { value: 'R$ 200k', label: 'in invoices dispatched in a single day by the system I built' },
          body: 'Building and maintaining web systems, ERP integrations and AI solutions for internal operations and the company’s clients.',
          points: [
            'Billing dispatch system, support ticket portal and ERP-integrated self-service.',
            'LLM-based AI agents for customer service and data extraction.',
            'Customer service reports by agent and channel, more accurate and faster.',
            'Python scripts to migrate and consolidate large data volumes, such as a batch of 16,000 files.',
            'Linux servers running containerized applications: uptime and incident response.',
            'Client rollouts: requirements, training, support and on-site visits.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Founder',
          period: '2023 to now',
          brand: 'qavah',
          body: 'My custom software studio. I run projects end to end: scope, architecture, proposal, development and delivery.',
          points: [
            'Finance modules and client area for a B2B SaaS in production.',
            'Company websites and web applications for small businesses.',
            'Solution architecture and technical proposals with scope, timeline and infrastructure cost.',
          ],
          services: [
            'Web systems and SaaS',
            'Websites and landing pages',
            'Dashboards and data analysis',
            'System and API integration',
            'Internal process automation',
            'Technical consulting',
          ],
        },
        {
          org: 'Tax and data analysis',
          role: 'Self-employed',
          period: 'since 2017',
          body: 'Income tax returns and data analysis for individuals and small businesses. This is where I learned to handle financial data with rigor.',
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
        'I am in the 7th semester of Computer Science at Faculdade Nova Roma. I have built full-stack software since 2023 and worked with data since 2017.',
        'My strength is what sits between systems: integrations, data and business rules. Coming from tax analysis, I understand the finance and operations of the people who use what I build, and I talk to them directly.',
      ],
      stackTitle: 'What I work with',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Data', items: stackItems.data },
        { group: 'Integration and AI', items: stackAiEn },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Education',
      degree: 'Computer Science, 7th semester',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certifications',
      certs,
    },
    contact: {
      title: 'Contact',
      body: 'Projects, partnerships or technical conversations. I reply by email.',
      email: 'pedrolimab26@gmail.com',
    },
    footer: 'Pedro Lima, Recife. Visual identity by Qavah IO.',
  },

  es: {
    nav: { projects: 'Proyectos', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
    langLabel: 'Idioma',
    hero: {
      lead: 'Desarrollador full stack en Recife, Brasil. Construyo sistemas web, integraciones con ERP y agentes de IA que funcionan en producción.',
      sub: 'Antes del código, trabajé en análisis fiscal. Empiezo cada proyecto por el proceso, después por la pantalla.',
      primary: 'Ver proyectos',
      secondary: 'Hablemos',
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          title: 'Sistema de envío de cobros',
          context: 'Hubvision',
          body: 'Front-end de un sistema que llega a emitir R$ 200 mil en boletos en un solo día. Tablero de morosidad, flujos configurables y envíos programados.',
          stack: st.billing,
        },
        {
          title: 'Portal de tickets de soporte',
          context: 'Hubvision',
          body: 'Construido desde cero, con autenticación y acceso por perfil. Migré todo el historial del sistema anterior vía API: tickets, usuarios y adjuntos.',
          stack: st.portal,
        },
        {
          title: 'Autoservicio integrado al ERP',
          context: 'Hubvision',
          body: 'El cliente final consulta boletos, facturas y plazos de entrega directamente en el ERP de la empresa, solo con su CPF o CNPJ.',
          stack: st.erp,
        },
        {
          title: 'Agentes de IA',
          context: 'Hubvision',
          body: 'Agentes con LLMs para atención y para convertir voz o texto libre en datos estructurados, como el registro de horas por audio.',
          stack: st.ai,
        },
        {
          title: 'SaaS B2B de gestión de contratos',
          context: 'Qavah, 2026',
          body: 'Módulos financieros con varias líneas de ingreso y área del cliente de una plataforma en producción.',
          stack: st.saas,
          note: 'Código privado.',
        },
        {
          title: 'Plataforma de accesibilidad para escuelas',
          context: 'Ganador del hackathon de la universidad',
          body: 'Ayuda a los profesores a adaptar contenido para alumnos con TEA y TDAH. Hecha en equipo de cuatro, dentro del plazo del evento.',
          stack: st.hack,
        },
        {
          title: 'Sitio institucional de RVL Grupo',
          context: 'Freelance, 2024',
          body: 'Sitio de una empresa de pintura naval. Responsable del front-end.',
          stack: st.rvl,
          links: rvlLinks,
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      qavahLink: 'Qavah en LinkedIn',
      servicesTitle: 'Lo que entrega Qavah',
      items: [
        {
          org: 'Hubvision',
          role: 'Desarrollador de software',
          period: '2026 hasta hoy',
          brand: 'hubvision',
          highlight: { value: 'R$ 200 mil', label: 'en boletos enviados en un solo día por el sistema que desarrollé' },
          body: 'Desarrollo y mantenimiento de sistemas web, integraciones con ERP y soluciones con IA para la operación interna y los clientes de la empresa.',
          points: [
            'Sistema de envío de cobros, portal de tickets y autoservicio integrado al ERP.',
            'Agentes de IA con LLMs para atención y extracción de datos.',
            'Informes de atención por agente y canal, más precisos y más rápidos.',
            'Scripts en Python para migrar y consolidar grandes volúmenes de datos, como un lote de 16 mil archivos.',
            'Servidores Linux con aplicaciones en contenedores: disponibilidad y respuesta a incidentes.',
            'Implementación con clientes: requisitos, formación, soporte y visitas presenciales.',
          ],
        },
        {
          org: 'Qavah IO',
          role: 'Fundador',
          period: '2023 hasta hoy',
          brand: 'qavah',
          body: 'Mi empresa de desarrollo a medida. Llevo el proyecto de punta a punta: alcance, arquitectura, propuesta, desarrollo y entrega.',
          points: [
            'Módulos financieros y área del cliente de un SaaS B2B en producción.',
            'Sitios institucionales y aplicaciones web para pequeñas empresas.',
            'Arquitectura de soluciones y propuestas técnico-comerciales con alcance, plazo y costo de infraestructura.',
          ],
          services: [
            'Sistemas web y SaaS',
            'Sitios y landing pages',
            'Paneles y análisis de datos',
            'Integración entre sistemas y APIs',
            'Automatización de procesos internos',
            'Consultoría técnica',
          ],
        },
        {
          org: 'Análisis fiscal y de datos',
          role: 'Independiente',
          period: 'desde 2017',
          body: 'Declaraciones de impuesto a la renta y análisis de datos para personas y pequeños negocios. Ahí aprendí a tratar datos financieros con rigor.',
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
        'Estoy en el 7º semestre de Ciencias de la Computación en la Faculdade Nova Roma. Desarrollo full stack desde 2023 y trabajo con datos desde 2017.',
        'Mi fuerte es lo que queda entre los sistemas: integraciones, datos y reglas de negocio. Vengo del análisis fiscal, así que entiendo las finanzas y la operación de quienes usan lo que construyo, y hablo directamente con ellos.',
      ],
      stackTitle: 'Con qué trabajo',
      stack: [
        { group: 'Front-end', items: stackItems.front },
        { group: 'Back-end', items: stackItems.back },
        { group: 'Datos', items: stackItems.data },
        { group: 'Integración e IA', items: stackAiEs },
        { group: 'Infra', items: stackItems.infra },
      ],
    },
    education: {
      title: 'Formación',
      degree: 'Ciencias de la Computación, 7º semestre',
      school: 'Faculdade Nova Roma, Recife',
      certsTitle: 'Certificaciones',
      certs,
    },
    contact: {
      title: 'Contacto',
      body: 'Proyectos, alianzas o conversaciones técnicas. Respondo por correo.',
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
