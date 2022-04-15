import { Box, Container, useMantineTheme } from '@mantine/core'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme()

  return (
    <Box>
      <Header />
      <Container
        sx={{
          padding: `${theme.spacing.xl}px 0`,
          minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
