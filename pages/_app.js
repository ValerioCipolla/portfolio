import { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [activePage, setActivePage] = useState("home");

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      <Component {...pageProps} setActivePage={setActivePage} />
    </Layout>
  );
}

export default MyApp;
