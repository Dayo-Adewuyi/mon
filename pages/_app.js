import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function App({ Component, pageProps }) {
  const [nav, setNav] = useState(true);

  return (
    <>
      <Head>
        <title>Coterie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav ? (
        <div className="bg-[#f1f1f1] min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Component {...pageProps} />
          <Suggestions />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero
            heading="Coterie"
            message="Connect,share and earn with friends and communities"
          />
        </div>
      )}
    </>
  );
}
