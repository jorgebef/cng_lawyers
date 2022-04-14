import { createStyles, Navbar } from '@mantine/core'

const useStyles = createStyles(theme => ({
  navbar: {
    [theme.fn.largerThan('sm')]: { display: 'none' },
    padding: theme.spacing.md,
    // transition: theme.transitionTimingFunction,
    // backgroundColor: theme.primaryColor,
  },
}))

interface NavbarCustomProps {
  open: boolean
}

const NavbarCustom = ({ open }: NavbarCustomProps) => {
  const { classes } = useStyles()

  return (
    <Navbar
      className={classes.navbar}
      width={{ base: '100%', sm: 0 }}
      height='auto'
      hidden={!open}
    >
      <Navbar.Section>Navigation</Navbar.Section>
    </Navbar>
  )
}

export default NavbarCustom
