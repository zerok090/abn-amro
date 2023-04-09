import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../../common/search/Search";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    if (!inputValue || inputValue === "") return;

    /** @todo might want to use encodeURIComponent */
    const href = `/meals/${inputValue}`;
    router.push(href);
  };

  /** @todo make navigation responsive with media query */
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <Image
            src="/logoNav.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
        </Link>
      </div>
      <div className={styles.searchContainer}>
        <Search
          value={inputValue}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
      </div>
      <nav className={styles.navigationContainer}></nav>
    </header>
  );
};

export default Header;
