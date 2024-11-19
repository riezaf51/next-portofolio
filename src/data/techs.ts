export interface TechStackInfo {
  name: string;
  logoUrl: string;
}

export enum TECHS_ENUM {
  // Programming Languages
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  PYTHON = "Python",
  JAVA = "Java",
  CPP = "C++",
  NODE = "Node.js",
  GO = "Go",
  PHP = "PHP",
  KOTLIN = "Kotlin",
  DART = "Dart",

  // Frontend Frameworks
  HTML = "HTML",
  CSS = "CSS",
  TAILWIND = "Tailwind CSS",
  REACT = "React",
  NEXT_JS = "Next.js",
  VUE = "Vue",
  NUXT_JS = "Nuxt.js",

  // Mobile Frameworks
  FLUTTER = "Flutter",
  ANDROID = "Android",

  // Backend Frameworks
  EXPRESS = "Express",
  HAPI = "Hapi",
  RESTIFY = "Restify",
  FLASK = "Flask",
  LARAVEL = "Laravel",
  SPRING = "Spring",

  // Database Management Systems
  POSTGRESQL = "PostgreSQL",
  MYSQL = "MySQL",
  BIGQUERY = "BigQuery",
  REDIS = "Redis",

  // Cloud Providers
  AWS = "Amazon Web Services",
  VERCEL = "Vercel",

  // Web Servers
  NGINX = "Nginx",
  APACHE = "Apache",

  // Testing Frameworks
  JEST = "Jest",
  MOCHA = "Mocha",
  CHAI = "Chai",

  // Containerization Tools
  DOCKER = "Docker",

  // Version Control Systems
  GIT = "Git",
  GITLAB = "GitLab",
  GITHUB = "GitHub",

  // Code Quality Tools
  ESLINT = "ESLint",

  // DevSecOps Tools
  ACTIONS = "GitHub Actions",
  TRIVY = "Trivy",

  // Tools
  POSTMAN = "Postman",
  JIRA = "Jira",
  TRELLO = "Trello",
  OFFICE = "Microsoft Office",

  // Low-Code Platforms
  OUTSYSTEMS = "OutSystems",

  // Data Science Tools
  TENSORFLOW = "TensorFlow",
  PANDAS = "Pandas",
  SCIKIT_LEARN = "scikit-learn",
};

const TECHS: TechStackInfo[] = Object.entries(TECHS_ENUM).map(([key, name]) => ({
  name,
  logoUrl: `/tech_logos/${key.toLowerCase().replace(/_/g, "-")}.svg`,
}));

const TECHS_MAP = TECHS.reduce((map, tech) => {
  map[tech.name] = tech;
  return map;
}, {} as Record<string, TechStackInfo>);

export { TECHS, TECHS_MAP };
