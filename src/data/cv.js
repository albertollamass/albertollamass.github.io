export const profile = {
  name: "Alberto Llamas González",
  firstName: "Alberto",
  lastName: "Llamas",
  role: "Software Engineer",
  tagline: "FullStack Developer · Event-driven systems · Data platforms · AI enablement",
  location: "Madrid, Spain",
  email: "alberto.ll.go@gmail.com",
  phone: "+34 618 731 788",
  linkedin: "https://linkedin.com/in/albertollamass",
  github: "https://github.com/albertollamass",
  cvPdfPath: "/Alberto_Llamas_Gonzalez_CV.pdf",
};

export const skills = [
  { category: "Languages", items: ["TypeScript", "Java", "Python", "C/C++", "Node.js"] },
  { category: "Frameworks", items: ["Vue 3", "NestJS", "Spring Boot", "Pinia", "DBT", "Flutter"] },
  { category: "Databases", items: ["BigQuery", "MongoDB", "Google Firestore"] },
  {
    category: "Technologies / Tools",
    items: ["Kafka", "AsyncAPI", "GitHub Actions", "SonarQube", "GitHub Copilot", "Figma", "Argo Workflows"],
  },
  {
    category: "Practices",
    items: [
      "Hexagonal architecture",
      "Event-driven architecture",
      "Async communication patterns",
      "CI/CD",
      "Distributed systems",
      "Spec-driven development",
    ],
  },
];

export const experience = [
  {
    company: "Leroy Merlin",
    role: "FullStack Developer",
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
    stack: ["Spring Boot", "Kafka", "AsyncAPI", "NestJS", "TypeScript", "Vue 3", "BigQuery", "DBT", "Argo"],
  },
];

export const education = [
  {
    school: "University of Granada",
    degree: "Bachelor's in Computer Engineering",
    period: "2019 – 2023",
    details: [
      "GPA: 7.8/10",
      "Honors in Agile Development Methodologies",
      "Top 20 Digital Talent",
    ],
  },
];

export const languages = [
  { lang: "Spanish", level: "Native" },
  { lang: "English", level: "C2 · Cambridge & Trinity" },
  { lang: "French", level: "B2 · DELF" },
];

export const uses = [
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
];
