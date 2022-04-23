import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { theme } from '../styles/theme'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </MantineProvider>
    </>
  )
}

export default MyApp
