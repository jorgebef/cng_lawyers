import { AppShell, Container, useMantineTheme } from '@mantine/core'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme()

  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      <Container
        px={theme.spacing.md}
        py={theme.spacing.xl}
        size='xl'
        sx={{
          minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
        }}
      >
        {children}
      </Container>
    </AppShell>
  )
}
