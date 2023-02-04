import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Feed from "../components/Feed";
import { useAccount } from "wagmi";
import Sidebar from "../components/Sidebar";
import Suggestions from "../components/Suggestions";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Page from "@/components/Page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <Page title="Home-Feeds">
          <Feed />
        </Page>
      ) : (
        <div>
          <Head>
            <title>Coterie</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <>
            <div className="h-screen">
              <Navbar />
              <Hero
                heading="Coterie"
                message="Connect,share and earn with friends and communities"
              />
            </div>
          </>
        </div>
      )}
    </div>
  );
}
