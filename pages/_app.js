import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "../components"
import theme from "../public/theme"
import '../public/app.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Component.title}</title>
      </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </>
  )
}

export default App