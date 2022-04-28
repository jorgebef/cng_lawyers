import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { mantineTheme, theme } from '../styles/theme'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import nProgress from 'nprogress'
import { AppCtxProvider } from '../context/AppCtx'
import { NotificationsProvider } from '@mantine/notifications'
import { ThemeProvider } from '@mui/material'

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
        <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
          <ThemeProvider theme={theme}>
            <NotificationsProvider position='bottom-center'>
              <AnimatePresence
                exitBeforeEnter
                // initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </AnimatePresence>
            </NotificationsProvider>
          </ThemeProvider>
        </MantineProvider>
      </AppCtxProvider>
    </>
  )
}

export default MyApp
