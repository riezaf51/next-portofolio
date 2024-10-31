"use client";
import React, { useState, useEffect } from "react";

const Header: React.FC = (): React.JSX.Element => {
  const [isTransparent, setIsTransparent] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full h-[100px] flex items-center justify-center bg-slate-900 transition-color duration-300 backdrop-blur ${isTransparent ? "bg-opacity-60" : "bg-opacity-100"}`}
    >
      <nav>
        <ul className="flex gap-10 list-none font-bold text-white">
          <li>
            About Me
          </li>
          <li>
            Work
          </li>
          <li>
            Portofolios
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
