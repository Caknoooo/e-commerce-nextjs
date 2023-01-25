import '@/styles/globals.css'
import { ProductsContextProvider } from 'components/ProductsContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  );
}
