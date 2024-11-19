export interface ContactInfo {
  name: string,
  url: string,
  logoUrl: string,
};

const CONTACTS: ContactInfo[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-rieza-fachrezi",
    logoUrl: "/contact_logos/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/riezaf51",
    logoUrl: "/contact_logos/github.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/riezafachrezi",
    logoUrl: "/contact_logos/instagram.svg",
  },
  {
    name: "Google Mail",
    url: "mailto:riezaf51@gmail.com",
    logoUrl: "/contact_logos/gmail.svg",
  },
];

export default CONTACTS;