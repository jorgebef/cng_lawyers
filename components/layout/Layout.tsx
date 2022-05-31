import { Box } from '@mui/material'
import { theme } from '../../styles/theme'
import { Footer } from '../footer'
import { Header } from '../header'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          mt: `${theme.custom.header.height}px`,
          minHeight: `calc(100vh - ${theme.custom.header.height}px - ${theme.custom.footer.height}px)`,
          mb: '100px',
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}
