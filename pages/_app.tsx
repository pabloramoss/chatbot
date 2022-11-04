import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'reactflow/dist/style.css';
import { NodesProvider } from "../src/context/NodesContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NodesProvider>
      <Component {...pageProps} />
    </NodesProvider>
  )
}
