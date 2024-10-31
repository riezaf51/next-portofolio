import React from "react";
import CONTACTS from "@/data/contacts";

import ContactIcon from "@/components/Icon/ContactIcon";

const Footer: React.FC = (): React.JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center bg-slate-900 w-full h-[150px] px-5 pb-10">
      <p className="text-center text-white font-bold mb-3">Connect with Me:</p>
      <ul className="flex list-none justify-center gap-5">
        {CONTACTS.map((contact) => (
          <li key={contact.name}>
            <ContactIcon
              name={contact.name}
              url={contact.url}
              logo={contact.logo}
              isInverted
            />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
