import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Head from "next/head";
import * as css from "../../styles/body.module.css";

const Layout = ({ children, activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Valerio Cipolla</title>
        <meta
          name="Valerio Cipolla Portfolio"
          content="A great web dev/software engineer portofolio created using Next and React"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.body}>
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
        <Sidebar />
        {!isMobileMenuOpen && children}
      </div>
    </div>
  );
};

export default Layout;
