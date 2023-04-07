import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/**
 * 
 * Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a
 * 
 */
const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /** @todo add debounce function */
    const value = e.currentTarget.value;
    setInputValue(value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="logo">
        <Link href={"/"}>
          <Image src="/logoNav.png" width={150} height={150} alt="Logo" />
        </Link>
      </div>
      <div className="search">
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
