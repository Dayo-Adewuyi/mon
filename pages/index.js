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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div>
      <Head>
        <title>Coterie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isConnected ? (
        <div className="bg-white min-h-screen flex max-w-[1500px] mx-auto">
          <Sidebar />
          <Feed />
          <Suggestions />

          {/* {isOpen && <Modal />} */}
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
    </div>
  );
}
