import {
  Anchor,
  Box,
  Burger,
  createStyles,
  Header,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles(theme => ({
  links: {
    [theme.fn.smallerThan('sm')]: { display: 'none' },
  },
}))

interface HeaderCustomProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderCustom = ({ open, setOpen }: HeaderCustomProps) => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <Header
      height={theme.other?.headerH}
      p='md'
      sx={{ backgroundColor: theme.primaryColor }}
    >
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger opened={open} onClick={() => setOpen(o => !o)} size='sm' />
      </MediaQuery>
      <Box className={classes.links}>
        <Link href='/' passHref><Anchor>Home</Anchor></Link>
        <Anchor>Links</Anchor>
      </Box>
    </Header>
  )
}

export default HeaderCustom
