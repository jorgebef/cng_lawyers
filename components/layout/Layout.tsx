import { AppShell, Box, useMantineTheme } from '@mantine/core'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme()

  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      <Box
        sx={{
          minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
        }}
      >
        {children}
      </Box>
    </AppShell>
  )
}
