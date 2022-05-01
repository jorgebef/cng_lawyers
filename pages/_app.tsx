import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import nProgress from 'nprogress'
import { AppCtxProvider } from '../context/AppCtx'
import { ThemeProvider } from '@mui/material'
import { theme } from '../styles/theme'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <AppCtxProvider>
        <ThemeProvider theme={theme}>
          <AnimatePresence
            exitBeforeEnter
            // initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </ThemeProvider>
      </AppCtxProvider>
    </>
  )
}

export default MyApp
