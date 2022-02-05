import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Head from "next/head";
import * as css from "../../styles/body.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Valerio Cipolla</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.body}>
        <Navbar />
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
