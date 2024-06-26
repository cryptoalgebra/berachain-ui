import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import './styles/_colors.css'
import './App.css'

import { WagmiConfig } from 'wagmi'
import Layout from "@/components/common/Layout"
import { defineChain } from "viem"

import BeraLogo from '@/assets/tokens/bera.png'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

const beraChainTestnet = defineChain({
  id: 80085,
  name: 'Berachain Artio',
  network: 'berachain-artio',
  nativeCurrency: { name: 'BERA', symbol: 'BERA', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://artio.rpc.berachain.com'],
    },
    public: {
      http: ['https://artio.rpc.berachain.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'beraExplorer',
      url: 'https://artio.beratrail.io/',
    },
  },
  testnet: true,
})

const chains = [beraChainTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata: { name: 'Berachain x Algebra Integral', description: 'Berachain x Algebra', url: 'https://berachain.algebra.finance', icons: [''] } })

createWeb3Modal({ 
  wagmiConfig, 
  projectId, 
  chains, 
  chainImages: {
    80085: BeraLogo
  },
  defaultChain: beraChainTestnet,
  themeVariables: {
    '--w3m-accent': '#2797ff'
  }
})

function App({ children }: { children: React.ReactNode }) {

  return (
    <WagmiConfig config={wagmiConfig}>
        <Layout>
          {children}
        </Layout>
    </WagmiConfig>
  )
}

export default App
