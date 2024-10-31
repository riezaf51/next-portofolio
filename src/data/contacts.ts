interface ContactInfo {
  name: string,
  url: string,
  logo: string,
};

const CONTACTS: ContactInfo[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-rieza-fachrezi",
    logo: "/logos/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/riezaf51",
    logo: "/logos/github.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/riezafachrezi",
    logo: "/logos/instagram.svg",
  },
  {
    name: "Google Mail",
    url: "mailto:riezaf51@gmail.com",
    logo: "/logos/gmail.svg",
  },
];

export default CONTACTS;