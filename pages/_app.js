import "../styles/globals.css";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
  filecoinHyperspace,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import {AppProvider} from "../context/AppContext";


const { chains, provider } = configureChains(
  [filecoinHyperspace],
  [publicProvider()]
);

const wagmiClient = createClient(
  getDefaultClient({
    appName: "coterie",
    chains: chains,
  })
);

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.

    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider>
        <AppProvider>
        <Component {...pageProps} />
        </AppProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
