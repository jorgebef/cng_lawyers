import { AppShell, Container, Footer, Text, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import NavbarCustom from './NavbarCustom'
import HeaderCustom from './HeaderCustom'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false)
  const theme = useMantineTheme()

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint='sm'
      header={<HeaderCustom open={open} setOpen={setOpen} />}
      navbar={<NavbarCustom open={open} />}
      footer={<Footer height={theme.other?.footerH}><Text>FOOTER</Text></Footer>}
    >
      <Container>{children}</Container>
    </AppShell>
  )
}

export default Layout
