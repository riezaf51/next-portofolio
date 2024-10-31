import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = (): React.JSX.Element => {
  return (
    <footer className="flex items-center justify-around bg-slate-900 w-full h-[200px]">
      <div className="flex-col items-center justify-around w-full">
        <p className="text-center font-bold mb-3">Connect with me:</p>
        <ul className="flex justify-center gap-5">
          <li>
            <Link href="https://www.linkedin/in/muhammad-rieza-fachrezi" target="_blank">
              <Image
                alt="Linkedin"
                src="/logos/linkedin.svg"
                width={30}
                height={30}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/riezaf51" target="_blank">
              <Image
                alt="Github"
                src="/logos/github.svg"
                width={30}
                height={30}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/riezafachrezi" target="_blank">
              <Image
                alt="Instagram"
                src="/logos/instagram.svg"
                width={30}
                height={30}
                priority
              />
            </Link>
          </li>
          <li>
            <Link href="mailto:riezaf51@gmail.com" target="_blank">
              <Image
                className="dark:invert"
                alt="Google Mail"
                src="/logos/gmail.svg"
                width={30}
                height={30}
                priority
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;