import React from "react";
import styles from "./Search.module.scss";
import SearchIcon from "@/../public/icons/search-icon.svg";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function Search({ value, onChange, onSubmit }: SearchProps) {
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className={styles.searchContainer}
      onSubmit={handleOnSubmit}
      name="search"
    >
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon className={styles.icon} />
      </button>
    </form>
  );
}

export default Search;
