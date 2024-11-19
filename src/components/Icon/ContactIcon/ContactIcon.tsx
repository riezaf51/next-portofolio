import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface ContactIconProps {
  name: string,
  url: string,
  logoUrl: string,
  isInverted?: boolean,
};

const ContactIcon: React.FC<ContactIconProps> = ({
  name,
  url,
  logoUrl,
  isInverted = false
}): React.JSX.Element => {
  return (
    <Link href={url} target="_blank" title={`Connect with Me on ${name}!`}>
      <Image
        className={`${isInverted ? "dark:invert" : ""} transition transform duration-300 hover:scale-110 hover:opacity-75 active:scale-90 active:opacity-60`}
        alt={name}
        src={logoUrl}
        width={30}
        height={30}
        priority
      />
    </Link>
  );
};

export default ContactIcon;
