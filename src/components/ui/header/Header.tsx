import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../search/Search";

/**
 * 
 * Search meal by name
www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
List all meals by first letter
www.themealdb.com/api/json/v1/1/search.php?f=a
 * 
 */
const Header = () => {
  

  return (
    <header>
      <div className="logo">
        <Link href={"/"}>
          <Image src="/logoNav.png" width={150} height={150} alt="Logo" priority/>
        </Link>
      </div>
      <div className="search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
