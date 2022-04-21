import {
  AppShell,
  Container,
  createStyles,
  useMantineTheme,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { Footer } from '../footer'
import { Header } from '../header'
import { Hero } from '../hero'

type LayoutProps = {
  children: React.ReactNode
}

const useStyles = createStyles(theme => ({
  appWrapper: {
    marginTop: theme.other.headerH,
    minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
  },

  pageContainer: {
    maxWidth: theme.breakpoints.xl,
  },
}))

export const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme()
  const router = useRouter()
  const { classes } = useStyles()

  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      <div className={classes.appWrapper}>
        {router.asPath === '/' && <Hero />}
        <Container py={theme.spacing.xl} className={classes.pageContainer}>
          {children}
        </Container>
      </div>
    </AppShell>
  )
}
