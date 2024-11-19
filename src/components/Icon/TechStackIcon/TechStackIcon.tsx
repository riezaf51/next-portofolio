import React from "react";
import Image from "next/image";

export interface TechStackIconProps {
  name: string,
  logoUrl: string,
  isInverted?: boolean,
};

const TechStackIcon: React.FC<TechStackIconProps> = ({
  name,
  logoUrl,
  isInverted = false
}): React.JSX.Element => {
  return (
    <Image
      className={isInverted ? "dark:invert" : ""}
      title={name}
      alt={name}
      src={logoUrl}
      width={50}
      height={50}
      loading="lazy"
    />
  );
};

export default TechStackIcon;
