import React, { createContext, useContext, useEffect, useState } from "react";

const STR = {
  en: {
    location: "Madrid, Spain",
    nav: {
      about: "About",
      work: "Work",
      projects: "Projects",
      uses: "Uses",
      education: "Education",
      contact: "Contact",
      menu: "Toggle menu",
      cv: "CV",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      lang: "Language",
    },
    hero: {
      title: "Software engineer building event-driven products.",
      a: "I'm",
      b: ", FullStack Developer at",
      c: "in",
      d: "— microservices with Spring Boot + Kafka, APIs with NestJS, frontends with Vue 3, and data platforms on BigQuery + DBT. I also lead AI tooling enablement and share the journey on",
      linkedin: "LinkedIn",
      viewWork: "View work",
      downloadCV: "Download CV",
      avatarAlt: "Alberto Llamas González",
    },
    photos: {
      label: "Personal photos",
      items: [
        "Alberto Llamas — portrait",
        "Alberto Llamas",
        "Playing basketball",
        "Archery",
      ],
    },
    about: {
      eyebrow: "About",
      title: "I'm Alberto. I live in Madrid, building and sharing the journey.",
      p1: "I studied Computer Engineering at the University of Granada (2019–2023, 7.8/10, honors in Agile Development Methodologies) because I liked creating things from scratch. That instinct still drives my work today.",
      p2: "I currently work at Leroy Merlin as a FullStack Developer, building web apps at enterprise level — event-driven microservices with Spring Boot and Kafka, production backends migrated from Express to NestJS under hexagonal architecture, and frontends with Vue 3 + Pinia. Most of my time goes into making complex systems feel straightforward for the people using them.",
      p3: "My expertise is full-stack, but I really love the platform side: data pipelines in BigQuery, ETL modernized from Pentaho to DBT with CI/CD on Argo Workflows, and AI-assisted engineering — I defined spec-driven development practices and trained 150+ engineers on compliant, effective AI tooling use.",
      p4: "When I'm not working, you'll usually find me playing sports, travelling, or tinkering with side projects — some of which are below.",
      linkIn: "Connect on LinkedIn",
      linkGh: "Follow on GitHub",
    },
    exp: {
      eyebrow: "Work",
      title: "Where I've worked",
      company: "Company",
      role: "Role",
      date: "Date",
      period: "September 2023 – Present",
      location: "Madrid, Spain",
      bullets: [
        "Developed microservices with Spring Boot in an event-driven architecture, integrating systems through Kafka and AsyncAPI contracts.",
        "Led adoption of AI tools for engineering productivity: defined best practices for spec-driven development and delivered internal enablement sessions to 150+ users, ensuring compliant and effective use under enterprise licensing.",
        "Spearheaded data platform modernization migrating ETL workflows from Pentaho to DBT for modular, scalable transformations, integrating CI/CD pipelines with Argo Workflows.",
        "Designed and optimized high-volume data pipelines in BigQuery, ensuring data quality, observability and high-performance processing.",
        "Led migration of a production backend from Express to NestJS (TypeScript) with hexagonal architecture to consolidate services and reduce technical debt.",
        "Developed and scaled frontend applications with Vue 3, TypeScript and Pinia to improve performance and maintainability.",
      ],
      linkedin: "View LinkedIn",
    },
    pf: {
      eyebrow: "Projects",
      title: "Side projects and things I've shipped along the way",
      subA: "A mix of university work, freelance and experiments across frameworks and languages. You can find even more on",
      subB: "GitHub",
      subC: "Production work at Leroy Merlin lives behind enterprise repos — happy to walk through it on a call.",
      demo: "Play demo",
      tags: [
        "FullStack · Accessibility",
        "Mobile · Backend",
        "WebGL · Game",
        "E-commerce · FullStack",
      ],
      descs: [
        "Accessible app to manage students and teachers — ordering menus, assigning tasks — for San Rafael Special Needs School in Granada.",
        "Twitter-like Android app for universities and researchers. Only verified university members can publish research and news.",
        "3D Angry Birds-like game built with Three.js. Playable in the browser.",
        "Custom pet store with login management, catalogue and shopping cart.",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Stack & practices",
      groups: [
        "Languages",
        "Frameworks",
        "Databases",
        "Technologies / Tools",
        "Practices",
      ],
    },
    uses: {
      eyebrow: "Uses",
      title: "What I use every day to build and ship",
      sub: "Stack and apps I actually rely on — backend, data and AI-assisted workflows.",
      groups: [
        {
          group: "Daily driver",
          items: [
            { name: "TypeScript + NestJS", note: "Production APIs with hexagonal architecture." },
            { name: "Vue 3 + Pinia", note: "Frontend apps I build and scale at Leroy Merlin." },
            { name: "GitHub Copilot", note: "Pair-programming daily; I led its enablement for 150+ engineers." },
            { name: "Figma", note: "Where interfaces start before they become components." },
          ],
        },
        {
          group: "Backend & data",
          items: [
            { name: "Spring Boot + Kafka", note: "Event-driven microservices with AsyncAPI contracts." },
            { name: "BigQuery + DBT", note: "High-volume pipelines; migrated ETL off Pentaho." },
            { name: "GitHub Actions + Argo", note: "CI/CD for services and data transformations." },
            { name: "MongoDB / Firestore", note: "Document stores for product backends." },
          ],
        },
        {
          group: "Practices",
          items: [
            { name: "Spec-driven development", note: "The workflow I teach for AI-assisted engineering." },
            { name: "Hexagonal architecture", note: "How I keep backends testable and replaceable." },
            { name: "SonarQube", note: "Quality gates on every pipeline." },
          ],
        },
      ],
    },
    edu: {
      eyebrow: "Background",
      title: "Education & languages",
      school: "University of Granada",
      degree: "Bachelor's in Computer Engineering",
      period: "2019 – 2023",
      details: [
        "GPA: 7.8/10",
        "Honors in Agile Development Methodologies",
        "Top 20 Digital Talent",
      ],
      langsTitle: "Languages",
      langs: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "C2 · Cambridge & Trinity" },
        { lang: "French", level: "B2 · DELF" },
      ],
      cvBox: "Want the full detail in PDF?",
      downloadCV: "Download CV",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      basedIn: "Based in",
      replies: "usually replies within 48h",
      prefer: "Prefer email?",
      name: "Name",
      email: "Email",
      message: "Message",
      phName: "Your name",
      phEmail: "you@company.com",
      phMsg: "Tell me about your project, role or idea…",
      send: "Send a message",
      thanks: "Thank you!",
      thanksSub: "Message received — I'll get back to you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    location: "Madrid, España",
    nav: {
      about: "Sobre mí",
      work: "Trabajo",
      projects: "Proyectos",
      uses: "Setup",
      education: "Educación",
      contact: "Contacto",
      menu: "Abrir/cerrar menú",
      cv: "CV",
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
      lang: "Idioma",
    },
    hero: {
      title: "Ingeniero de software construyendo productos event-driven.",
      a: "Soy",
      b: ", FullStack Developer en",
      c: "en",
      d: "— microservicios con Spring Boot + Kafka, APIs con NestJS, frontends con Vue 3 y plataformas de datos sobre BigQuery + DBT. También lidero la adopción de herramientas de IA y comparto el camino en",
      linkedin: "LinkedIn",
      viewWork: "Ver mi trabajo",
      downloadCV: "Descargar CV",
      avatarAlt: "Alberto Llamas González",
    },
    photos: {
      label: "Fotos personales",
      items: [
        "Alberto Llamas — retrato",
        "Alberto Llamas",
        "Jugando al baloncesto",
        "Tiro con arco",
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Soy Alberto. Vivo en Madrid, construyendo y compartiendo el camino.",
      p1: "Estudié Ingeniería Informática en la Universidad de Granada (2019–2023, 7,8/10, matrícula en Metodologías Ágiles de Desarrollo) porque me gustaba crear cosas desde cero. Ese instinto sigue moviendo mi trabajo hoy.",
      p2: "Actualmente trabajo en Leroy Merlin como FullStack Developer, construyendo aplicaciones web a nivel enterprise — microservicios event-driven con Spring Boot y Kafka, backends productivos migrados de Express a NestJS con arquitectura hexagonal, y frontends con Vue 3 + Pinia. La mayor parte de mi tiempo la dedico a que los sistemas complejos se sientan sencillos para quien los usa.",
      p3: "Mi especialidad es full-stack, pero lo que más me gusta es la parte de plataforma: pipelines de datos en BigQuery, ETL modernizado de Pentaho a DBT con CI/CD sobre Argo Workflows, e ingeniería asistida por IA — definí prácticas de desarrollo spec-driven y formé a más de 150 ingenieros en un uso eficaz y conforme de herramientas de IA.",
      p4: "Cuando no estoy trabajando, me encontrarás haciendo deporte, viajando o trasteando con side projects — algunos están aquí abajo.",
      linkIn: "Conecta en LinkedIn",
      linkGh: "Sígueme en GitHub",
    },
    exp: {
      eyebrow: "Trabajo",
      title: "Dónde he trabajado",
      company: "Empresa",
      role: "Puesto",
      date: "Fecha",
      period: "Septiembre 2023 – Actualidad",
      location: "Madrid, España",
      bullets: [
        "Desarrollo de microservicios con Spring Boot en arquitectura event-driven, integrando sistemas mediante Kafka y contratos AsyncAPI.",
        "Lideré la adopción de IA para la productividad: definí buenas prácticas de spec-driven development e impartí sesiones internas a más de 150 personas, garantizando un uso conforme y eficaz bajo licencia enterprise.",
        "Modernicé la plataforma de datos migrando ETL de Pentaho a DBT para transformaciones modulares y escalables, con pipelines CI/CD sobre Argo Workflows.",
        "Diseñé y optimicé pipelines de alto volumen en BigQuery, asegurando calidad del dato, observabilidad y procesamiento de alto rendimiento.",
        "Lideré la migración de un backend productivo de Express a NestJS (TypeScript) con arquitectura hexagonal para consolidar servicios y reducir deuda técnica.",
        "Desarrollé y escalé aplicaciones frontend con Vue 3, TypeScript y Pinia, mejorando rendimiento y mantenibilidad.",
      ],
      linkedin: "Ver LinkedIn",
    },
    pf: {
      eyebrow: "Proyectos",
      title: "Side projects y cosas que he publicado por el camino",
      subA: "Una mezcla de trabajos universitarios, freelance y experimentos con distintos frameworks y lenguajes. Puedes ver más en",
      subB: "GitHub",
      subC: "El trabajo productivo de Leroy Merlin vive en repos enterprise — encantado de contarlo en una llamada.",
      demo: "Probar demo",
      tags: [
        "FullStack · Accesibilidad",
        "Móvil · Backend",
        "WebGL · Juego",
        "E-commerce · FullStack",
      ],
      descs: [
        "App accesible para gestionar alumnos y profesores — pedir menús, asignar tareas — para el Colegio de Educación Especial San Rafael de Granada.",
        "App Android tipo Twitter para universidades e investigadores. Solo miembros verificados pueden publicar investigaciones y noticias.",
        "Juego 3D tipo Angry Birds construido con Three.js. Jugable en el navegador.",
        "Tienda de mascotas a medida con gestión de login, catálogo y carrito.",
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Stack y prácticas",
      groups: [
        "Lenguajes",
        "Frameworks",
        "Bases de datos",
        "Tecnologías / Herramientas",
        "Prácticas",
      ],
    },
    uses: {
      eyebrow: "Setup",
      title: "Lo que uso cada día para construir y publicar",
      sub: "Stack y apps en las que me apoyo de verdad — backend, datos y flujos asistidos por IA.",
      groups: [
        {
          group: "Uso diario",
          items: [
            { name: "TypeScript + NestJS", note: "APIs productivas con arquitectura hexagonal." },
            { name: "Vue 3 + Pinia", note: "Frontends que construyo y escalo en Leroy Merlin." },
            { name: "GitHub Copilot", note: "Pair-programming a diario; lideré su adopción para más de 150 ingenieros." },
            { name: "Figma", note: "Donde las interfaces nacen antes de ser componentes." },
          ],
        },
        {
          group: "Backend y datos",
          items: [
            { name: "Spring Boot + Kafka", note: "Microservicios event-driven con contratos AsyncAPI." },
            { name: "BigQuery + DBT", note: "Pipelines de alto volumen; migré el ETL fuera de Pentaho." },
            { name: "GitHub Actions + Argo", note: "CI/CD para servicios y transformaciones de datos." },
            { name: "MongoDB / Firestore", note: "Bases documentales para backends de producto." },
          ],
        },
        {
          group: "Prácticas",
          items: [
            { name: "Spec-driven development", note: "El flujo que enseño para ingeniería asistida por IA." },
            { name: "Hexagonal architecture", note: "Así mantengo los backends testeables y reemplazables." },
            { name: "SonarQube", note: "Puertas de calidad en cada pipeline." },
          ],
        },
      ],
    },
    edu: {
      eyebrow: "Trayectoria",
      title: "Educación e idiomas",
      school: "Universidad de Granada",
      degree: "Grado en Ingeniería Informática",
      period: "2019 – 2023",
      details: [
        "Nota media: 7,8/10",
        "Matrícula en Metodologías Ágiles de Desarrollo",
        "Top 20 Talento Digital",
      ],
      langsTitle: "Idiomas",
      langs: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "C2 · Cambridge & Trinity" },
        { lang: "Francés", level: "B2 · DELF" },
      ],
      cvBox: "¿Quieres el detalle completo en PDF?",
      downloadCV: "Descargar CV",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      basedIn: "Con base en",
      replies: "suelo responder en 48h",
      prefer: "¿Prefieres email?",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      phName: "Tu nombre",
      phEmail: "tu@empresa.com",
      phMsg: "Cuéntame sobre tu proyecto, puesto o idea…",
      send: "Enviar mensaje",
      thanks: "¡Gracias!",
      thanksSub: "Mensaje recibido — te responderé pronto.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

function lookup(lang, path) {
  let node = STR[lang];
  for (const part of path.split(".")) {
    if (node == null) break;
    node = node[part];
  }
  if (node === undefined && lang !== "en") return lookup("en", path);
  return node === undefined ? path : node;
}

const LangCtx = createContext({ lang: "en", setLang: () => {}, t: (p) => p });
export const useLang = () => useContext(LangCtx);

function detectLang() {
  try {
    const saved = localStorage.getItem("site-lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  try {
    if ((navigator.language || "").toLowerCase().startsWith("es")) return "es";
  } catch {}
  return "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setLang(detectLang());
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("site-lang", lang);
    } catch {}
  }, [lang]);
  const t = (path) => lookup(lang, path);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

const ThemeCtx = createContext({ dark: false, toggle: () => {} });
export const useTheme = () => useContext(ThemeCtx);

function detectTheme() {
  try {
    const saved = localStorage.getItem("site-theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {}
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(detectTheme());
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("site-theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);
  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      {children}
    </ThemeCtx.Provider>
  );
}
