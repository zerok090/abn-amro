import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="icon"></div>
      <div className="search"></div>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
