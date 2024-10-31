import React from "react";

const Header: React.FC = (): React.JSX.Element => {
  return (
    <header className="w-full flex">
      <div>
        header
      </div>
      <nav className="flex gap-10">
        <div>About Me</div>
        <div>Work</div>
        <div>Portofolio</div>
      </nav>
    </header>
  );
};

export default Header;