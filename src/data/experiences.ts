import { TECHS_ENUM } from "./techs";

export interface ExperienceInfo {
  title: string,
  company: string,
  companyLogoUrl?: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string | string[],
  techStack: TECHS_ENUM[],
};

const EXPERIENCES: ExperienceInfo[] = [
  {
    title: "Back-End Developer Intern",
    company: "Telkom Indonesia",
    companyLogoUrl: "/company_logos/telkom-indonesia.svg",
    location: "Bandung, Indonesia",
    startDate: "2024-04-01",
    endDate: "2024-09-30",
    description: [
      "Involved in the development of two main projects: Integrated Digital Operation (IDO) and Digitalpass ITR (Integrated Test Report).",
      "Collaborated effectively with the development teams, leveraging Agile Scrum methodologies to enhance project delivery and foster continuous improvement.",
      "Implemented unit tests to ensure code quality and reliability.",
      "Documented APIs in Postman, including creating functional tests for application validation.",
    ],
    techStack: [
      TECHS_ENUM.NODE,
      TECHS_ENUM.RESTIFY,
      TECHS_ENUM.MYSQL,
      TECHS_ENUM.POSTGRESQL,
      TECHS_ENUM.BIGQUERY,
      TECHS_ENUM.REDIS,
      TECHS_ENUM.DOCKER,
      TECHS_ENUM.TRIVY,
      TECHS_ENUM.GITLAB,
      TECHS_ENUM.POSTMAN,
      TECHS_ENUM.JIRA,
    ],
  },
  {
    title: "Project-Based Virtual Intern: Mobile Apps Developer Bank Mandiri x Rakamin Academy",
    company: "Bank Mandiri",
    location: "Remote",
    startDate: "2024-05-01",
    endDate: "2024-06-01",
    description: [
      "Gained hands-on experience in Kotlin and the MVVM architectural pattern for Android development.",
      "Implemented API consumption to fetch and display data within mobile applications.",
      "Completed a final project that involved developing a news application, showcasing skills in mobile development and API integration.",
    ],
    techStack: [
      TECHS_ENUM.KOTLIN,
      TECHS_ENUM.ANDROID,
      TECHS_ENUM.GITHUB,
    ],
  },
  {
    title: "My Digital Academy Awardee",
    company: "Bank Mandiri",
    location: "Remote",
    startDate: "2023-12-01",
    endDate: "2024-01-01",
    description: "Developed key functionalities for the E-Integrity mobile app, enabling flexible payment options within the honesty canteen, including cart, transaction history, product favoriting, and detailed product information.",
    techStack: [
      TECHS_ENUM.OUTSYSTEMS,
    ],
  },
  {
    title: "Indigo Incubation Management Intern",
    company: "Telkom Indonesia",
    location: "Bandung, Indonesia",
    startDate: "2023-07-01",
    endDate: "2023-12-31",
    description: [
      "Orchestrated the running of Indigo's mentoring program encompassing BizTech Mentoring and Fundamental Mentoring for Indigo's regular startups, achieving an overall CSI of 92%, while also gaining valuable insights from technical and business perspectives.",
      "Assisted in the implementation of Game Technical Mentoring for Indigo's game startups.",
      "Planned the implementation of IndigoGame Jam 2024.",
    ],
    techStack: [
      TECHS_ENUM.TRELLO,
      TECHS_ENUM.OFFICE,
    ],
  },
  {
    title: "Back-End Developer",
    company: "School of Computing Telkom University",
    location: "Bandung, Indonesia",
    startDate: "2023-06-01",
    endDate: "2023-12-07",
    description: [
      "Developed and configured routing systems for ordinary users and administrators.",
      "Designed and implemented business logic for the website's back-end.",
      "Collaborated closely with the project's team members to seamlessly integrate the back-end API with the website's user interface.",
    ],
    techStack: [
      TECHS_ENUM.HTML,
      TECHS_ENUM.CSS,
      TECHS_ENUM.JAVASCRIPT,
      TECHS_ENUM.PHP,
      TECHS_ENUM.LARAVEL,
      TECHS_ENUM.MYSQL,
      TECHS_ENUM.GITHUB,
      TECHS_ENUM.POSTMAN,
    ],
  },
  {
    title: "Android Mobile Programmer",
    company: "Mobile Innovation Laboratory",
    location: "Bandung, Indonesia",
    startDate: "2022-11-01",
    endDate: "2023-08-01",
    description: [
      "Created an android application implementing CRUD and MVVM using Kotlin.",
      "Worked together in a group to create an application in MotionHack event.",
    ],
    techStack: [
      TECHS_ENUM.KOTLIN,
      TECHS_ENUM.ANDROID,
      TECHS_ENUM.GITHUB,
    ],
  },
];

export default EXPERIENCES;