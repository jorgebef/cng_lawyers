import { AppShell, Container, createStyles } from '@mantine/core'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

const useStyles = createStyles(theme => ({
  layoutContainer: {
    padding: `${theme.spacing.xl}px 0`,
    minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
  },
}))

export const Layout = ({ children }: LayoutProps) => {
  const { classes } = useStyles()

  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      <Container className={classes.layoutContainer}>{children}</Container>
    </AppShell>
  )
}
