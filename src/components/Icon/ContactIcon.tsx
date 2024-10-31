import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ContactIconProps {
  name: string,
  url: string,
  logo: string,
  isInverted?: boolean,
};

const ContactIcon: React.FC<ContactIconProps> = ({
  name,
  url,
  logo,
  isInverted = false
}): React.JSX.Element => {
  return (
    <Link href={url} target="_blank">
      <Image
        className={`${isInverted ? "dark:invert" : ""} transition transform duration-300 hover:scale-110 hover:opacity-75 active:scale-90 active:opacity-60`}
        alt={name}
        src={logo}
        width={30}
        height={30}
        priority
      />
    </Link>
  );
};

export default ContactIcon;
