import { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  const [activePage, setActivePage] = useState("home");

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      <Component
        {...pageProps}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Layout>
  );
}

export default MyApp;
