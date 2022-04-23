import {
  AppShell,
  Box,
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

export const Layout = ({ children }: LayoutProps) => {
  const theme = useMantineTheme()
  const router = useRouter()

  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.xl,
          marginTop: theme.other.headerH,
          paddingBottom: theme.spacing.xl,
          minHeight: `calc(100vh - ${theme.other.footerH}px - ${theme.other.headerH}px)`,
        }}
      >
        {children}
      </Box>
    </AppShell>
  )
}
