import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Head from "next/head";
import * as css from "../../styles/body.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";

const Layout = ({ children, activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (isMobileMenuOpen && windowSize.width > 700) {
      setIsMobileMenuOpen(false);
    }
  }, [windowSize]);

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
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          isOpen={isMobileMenuOpen}
          setIsOpen={setIsMobileMenuOpen}
        />
        {!isMobileMenuOpen && children}
      </div>
    </div>
  );
};

export default Layout;
