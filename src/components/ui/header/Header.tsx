import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image src='/logo.png' width={200} height={150} alt='Logo' /> 
      </div>
      <div className="search"></div>
    </header>
  );
};

export default Header;
