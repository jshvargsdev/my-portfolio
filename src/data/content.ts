// ============================================================
//  Central content source — bilingual (ES / EN)
//  Single source of truth for Joshua Vargas' portfolio.
// ============================================================

export type Bi = { es: string; en: string };

export const profile = {
  name: "Joshua Vargas",
  monogram: "JV",
  role: { es: "Full Stack Developer", en: "Full Stack Developer" } as Bi,
  location: { es: "Caracas, Venezuela", en: "Caracas, Venezuela" } as Bi,
  email: "jshvargsdev@gmail.com",
  phone: "+58 414-1181314",
  github: "https://github.com/jshvargsdev",
  githubHandle: "jshvargsdev",
  cv: "/CV-Joshua-Vargas.pdf",
  available: { es: "Disponible para proyectos", en: "Available for work" } as Bi,
};

export const nav: { id: string; label: Bi }[] = [
  { id: "sobre-mi",    label: { es: "Sobre mí",    en: "About" } },
  { id: "experiencia", label: { es: "Experiencia", en: "Experience" } },
  { id: "skills",      label: { es: "Skills",      en: "Skills" } },
  { id: "proyectos",   label: { es: "Proyectos",   en: "Projects" } },
  { id: "contacto",    label: { es: "Contacto",    en: "Contact" } },
];

export const hero = {
  kicker: { es: "Full Stack Developer · Caracas, VE", en: "Full Stack Developer · Caracas, VE" } as Bi,
  // The name is rendered in two emphasized lines
  headline1: "Joshua",
  headline2: "Vargas",
  tagline: {
    es: "Construyo arquitecturas eficientes y aplicaciones web de alto rendimiento en el ecosistema JavaScript & TypeScript.",
    en: "I build efficient architectures and high-performance web applications across the JavaScript & TypeScript ecosystem.",
  } as Bi,
  ctaPrimary: { es: "Hablemos", en: "Get in touch" } as Bi,
  ctaSecondary: { es: "Descargar CV", en: "Download CV" } as Bi,
  stats: [
    { value: "3+", label: { es: "Años de experiencia", en: "Years of experience" } },
    { value: "JS/TS", label: { es: "Stack principal", en: "Core stack" } },
    { value: "API", label: { es: "Diseño backend", en: "Backend design" } },
  ],
};

export const about = {
  title: { es: "Sobre mí", en: "About" } as Bi,
  paragraphs: [
    {
      es: "Desarrollador full stack con alma de backend. Con más de 3 años de experiencia, pasé de Backend Developer a liderar un equipo de tecnología, diseñando sistemas que escalan sin romperse.",
      en: "Full stack developer with a backend soul. With 3+ years of experience, I went from Backend Developer to leading a technology team, designing systems that scale without breaking.",
    },
    {
      es: "Vivo en el ecosistema JavaScript y TypeScript — Node.js, Express y NestJS del lado del servidor, React en el cliente, con PostgreSQL, MongoDB y AWS. Me obsesionan las arquitecturas eficientes y el rendimiento real.",
      en: "I live in the JavaScript and TypeScript ecosystem — Node.js, Express and NestJS on the server, React on the client, with PostgreSQL, MongoDB and AWS. I'm obsessed with efficient architectures and real performance.",
    },
  ] as Bi[],
  educationLabel: { es: "Educación", en: "Education" } as Bi,
  education: {
    degree: { es: "T.S.U. en Informática", en: "Associate Degree in Computer Science" } as Bi,
    school: { es: "Instituto Universitario Jesús Obrero", en: "Instituto Universitario Jesús Obrero" } as Bi,
    year: "2026",
  },
  focusLabel: { es: "Enfoque", en: "Focus" } as Bi,
  focus: {
    es: "Arquitectura backend · APIs RESTful · rendimiento",
    en: "Backend architecture · RESTful APIs · performance",
  } as Bi,
};

export type Job = {
  company: string;
  role: Bi;
  period: Bi;
  desc: Bi;
  tags: string[];
  current?: boolean;
  promotedFrom?: Bi;
};

export const experience: { title: Bi; jobs: Job[] } = {
  title: { es: "Experiencia", en: "Experience" },
  jobs: [
    {
      company: "Grupo Moto Go App C.A.",
      role: { es: "Technology Team Leader", en: "Technology Team Leader" },
      promotedFrom: { es: "Backend Developer", en: "Backend Developer" },
      period: { es: "Feb 2026 — Presente", en: "Feb 2026 — Present" },
      desc: {
        es: "Empecé como Backend Developer y escalé a Líder del Equipo de Tecnología. Potencio la infraestructura de MotoGo con foco en la arquitectura del lado del servidor, apoyando además como Full Stack en las plataformas web.",
        en: "I started as a Backend Developer and grew into Technology Team Leader. I power MotoGo's infrastructure with a focus on server-side architecture, while also supporting as Full Stack across the web platforms.",
      },
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Prisma", "AWS"],
      current: true,
    },
    {
      company: "Wlink Telecom C.A.",
      role: { es: "Desarrollador de Software", en: "Software Developer" },
      period: { es: "Ago 2025 — Nov 2025", en: "Aug 2025 — Nov 2025" },
      desc: {
        es: "Desarrollo de sistemas internos logrando una arquitectura escalable y reduciendo tiempos de respuesta.",
        en: "Built internal systems achieving a scalable architecture and reducing response times.",
      },
      tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    },
    {
      company: "CursosGerenciales.com",
      role: { es: "Pasante de Desarrollo de Software", en: "Software Development Intern" },
      period: { es: "Ago 2025 — Oct 2025", en: "Aug 2025 — Oct 2025" },
      desc: {
        es: "Desarrollo de una API RESTful de alto rendimiento, diseñada para servir datos y contenido dinámico a una aplicación móvil.",
        en: "Developed a high-performance RESTful API designed to serve data and dynamic content to a mobile application.",
      },
      tags: ["NestJS", "REST API", "PostgreSQL", "TypeORM"],
    },
    {
      company: "Universidad Pedagógica Experimental Libertador",
      role: { es: "Desarrollador Web", en: "Web Developer" },
      period: { es: "Nov 2024 — Sep 2025", en: "Nov 2024 — Sep 2025" },
      desc: {
        es: "Mantenimiento y optimización de aplicaciones web: mejora del rendimiento mediante refactorización de código y resolución de errores en el backend.",
        en: "Maintenance and optimization of web applications: improved performance through code refactoring and backend bug fixing.",
      },
      tags: ["Express.js", "Node.js"],
    },
    {
      company: "Directa Group C.A.",
      role: { es: "Programador Informático", en: "Software Programmer" },
      period: { es: "Feb 2023 — Nov 2023", en: "Feb 2023 — Nov 2023" },
      desc: {
        es: "Desarrollo de scripts de Web Scraping automatizados. Procesamiento y limpieza de datos, estructurando la información en reportes JSON/CSV.",
        en: "Built automated Web Scraping scripts. Processed and cleaned data, structuring information into JSON/CSV reports.",
      },
      tags: ["JavaScript", "Node.js", "Puppeteer"],
    },
  ],
};

export type SkillGroup = { label: Bi; items: string[] };

export const skills: { title: Bi; groups: SkillGroup[] } = {
  title: { es: "Skills & Stack", en: "Skills & Stack" },
  groups: [
    { label: { es: "Lenguajes", en: "Languages" }, items: ["JavaScript", "TypeScript"] },
    { label: { es: "Frontend", en: "Frontend" }, items: ["React.js"] },
    { label: { es: "Backend", en: "Backend" }, items: ["Node.js", "Express.js", "NestJS"] },
    { label: { es: "Bases de datos", en: "Databases" }, items: ["PostgreSQL", "MongoDB"] },
    { label: { es: "Cloud & DevOps", en: "Cloud & DevOps" }, items: ["AWS", "Docker"] },
    { label: { es: "Herramientas", en: "Tools" }, items: ["Git", "Postman"] },
    { label: { es: "IA", en: "AI" }, items: ["Claude", "Cursor"] },
  ],
};

export type Project = {
  name: string;
  desc: Bi;
  tags: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
};

export const projects: { title: Bi; note: Bi; items: Project[] } = {
  title: { es: "Proyectos", en: "Projects" },
  note: {
    es: "Una selección de mi trabajo reciente.",
    en: "A selection of my recent work.",
  },
  items: [
    {
      name: "GoldCore",
      desc: {
        es: "App full stack de finanzas personales con IA: presupuestos, deudas, metas, ingresos recurrentes, transacciones y reportes, con tips inteligentes y dashboards interactivos.",
        en: "Full-stack personal finance app with AI: budgets, debts, goals, recurring income, transactions and reports, featuring smart tips and interactive dashboards.",
      },
      tags: ["React", "Express", "PostgreSQL", "Prisma", "Gemini AI"],
      repo: "https://github.com/jshvargsdev/goldcore-app",
      featured: true,
    },
    {
      name: "Lukas Sync",
      desc: {
        es: "App móvil en Flutter para la cotización y el cálculo de tasas y divisas de Venezuela.",
        en: "Flutter mobile app for quoting and calculating Venezuela's exchange rates and currencies.",
      },
      tags: ["Flutter", "Dart"],
      repo: "https://github.com/jshvargsdev/lukas_sync_app",
    },
    {
      name: "Pokédex API",
      desc: {
        es: "API REST construida con NestJS para gestionar información de Pokémon, con validación de datos y MongoDB.",
        en: "REST API built with NestJS to manage Pokémon data, with data validation and MongoDB.",
      },
      tags: ["NestJS", "MongoDB", "TypeScript"],
      repo: "https://github.com/jshvargsdev/pokedex-app-api",
    },
    {
      name: "Auth API",
      desc: {
        es: "API RESTful de autenticación y autorización: registro, login con JWT, protección de rutas y control de acceso por roles.",
        en: "RESTful authentication & authorization API: registration, JWT login, route protection and role-based access control.",
      },
      tags: ["Express", "Prisma", "JWT", "TypeScript"],
      repo: "https://github.com/jshvargsdev/auth-api",
    },
    {
      name: "GIFs Search",
      desc: {
        es: "Aplicación web en React para buscar y visualizar GIFs animados usando la API de Giphy.",
        en: "React web app to search and view animated GIFs using the Giphy API.",
      },
      tags: ["React", "TypeScript", "Giphy API"],
      repo: "https://github.com/jshvargsdev/gifs-search-app",
    },
    {
      name: "Todo List API",
      desc: {
        es: "API REST para gestionar tareas con Express y MongoDB, documentada con Swagger.",
        en: "REST API to manage tasks with Express and MongoDB, documented with Swagger.",
      },
      tags: ["Express", "MongoDB", "Swagger"],
      repo: "https://github.com/jshvargsdev/todo-list-api",
    },
  ],
};

export const contact = {
  title: { es: "Contacto", en: "Contact" } as Bi,
  lead: {
    es: "¿Tienes un proyecto en mente o una vacante? Hablemos.",
    en: "Got a project in mind or an opening? Let's talk.",
  } as Bi,
  emailLabel: { es: "Escríbeme", en: "Email me" } as Bi,
  cvLabel: { es: "Descargar CV", en: "Download CV" } as Bi,
};

export const footer = {
  tagline: {
    es: "Diseñado y construido con Astro.",
    en: "Designed & built with Astro.",
  } as Bi,
  rights: { es: "Todos los derechos reservados.", en: "All rights reserved." } as Bi,
};
