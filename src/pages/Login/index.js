import {
  ConnectButton,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { createClient, WagmiConfig, configureChains } from "wagmi";
// import { rainbowWeb3AuthConnector } from "./RainbowWeb3authConnector";
import { rainbowWeb3AuthConnector } from "../../RainbowWeb3authConnector";
import { mainnet, polygon } from "wagmi/chains";
import {
  walletConnectWallet,
  rainbowWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet, polygon],
  [
    alchemyProvider({ apiKey: "qYiJwyA_sOdvrcKcbfqVK_QCaP1NuYCi" }),
    // alchemyProvider({ apiKey: "fGXusgBUDC-OPy6XI8IFRvu1i7sbWsYj" }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      metaMaskWallet({ chains }),
      rainbowWeb3AuthConnector({ chains }),
    ],
  },
]);
const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export default function Login() {
  console.log(chains, "chains");

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
