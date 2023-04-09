import React, { PropsWithChildren } from "react";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <footer></footer>
    </div>
  );
};
export default Layout;
