import { useEffect, useState } from 'react'
import {
  //   Header as MantineHeader,
  //   Group,
  Burger,
  //   Text,
  useMantineTheme,
  //   Container,
  //   Button,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useStyles } from './Header.styles'
import { motion } from 'framer-motion'
import { useAppCtx } from '../../context/AppCtx'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import { muiTheme } from '../../styles/theme'

interface ILink {
  link: string
  label: string
}

const links: ILink[] = [
  { link: '/', label: 'HOME' },
  { link: '/services', label: 'SERVICES' },
  { link: '/about-us', label: 'ABOUT US' },
  { link: '/contact', label: 'CONTACT US' },
]

export const Header: React.FC = () => {
  const { classes, cx } = useStyles()
  const router = useRouter()
  const theme = useMantineTheme()
  const { viewContact } = useAppCtx()

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>(router.asPath)

  useEffect(() => {
    setActive(router.asPath)
  }, [router.asPath])

  const handleNavigate = (e: React.MouseEvent, link: string) => {
    e.preventDefault()
    setOpen(false)
    router.push(link)
  }

  const items = links.map(link => (
    <Typography
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(e: React.MouseEvent) => handleNavigate(e, link.link)}
      sx={{
        color:
          link.label.toLowerCase() === 'contact us'
            ? theme.colors.red[0]
            : 'none',
      }}
    >
      {link.label}
    </Typography>
  ))

  const dropdownVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'white' }}>
      {/* <Container size='xl' px={theme.spacing.md} className={classes.inner}> */}
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Toolbar>
          {/* <div */}
          {/*   className={classes.logoContainer} */}
          {/*   onClick={(e: React.MouseEvent) => handleNavigate(e, '/')} */}
          {/* > */}
          <Box
            onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
            sx={{
              display: 'flex',
              position: 'relative',
              alignItems: 'center',
              height: muiTheme.custom.header.height,
              cursor: 'pointer',
            }}
          >
            <img
              alt='CNG Lawyers logo'
              src='/logo.svg'
              loading='lazy'
              width='128px'
              height='50px'
            />
          </Box>

          {/* <div className={classes.smButtons}> */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              gap: theme.spacing.xs,
            }}
          >
            <Button
              className={classes.contactBtn}
              // color='red'
              // size='xs'
              onClick={(e: React.MouseEvent) => {
                viewContact()
                handleNavigate(e, '/contact')
              }}
            >
              Contact us
            </Button>
            <Burger
              opened={open}
              color={
                !open
                  ? theme.colors[theme.primaryColor][0]
                  : theme.colors.red[6]
              }
              onClick={() => setOpen(!open)}
              className={classes.burger}
              size='md'
            />
          </Box>

          {/* <Group spacing={theme.spacing.xs} className={classes.links}> */}
          <Box className={classes.links}>
            {items}
            {/* </Group> */}
          </Box>

          <Box
            component={motion.div}
            initial={open ? 'open' : 'closed'}
            animate={open ? 'open' : 'closed'}
            variants={dropdownVariants}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            sx={{
              position: 'absolute',
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              gap: theme.spacing.xs,
              padding: theme.spacing.md,
              height: `calc(100vh - ${muiTheme.custom.header.height}px)`,
              top: muiTheme.custom.header.height,
              left: 0,
              right: 0,
              zIndex: 90,
              border: 0,
              borderRadius: 0,
              overflow: 'hidden',
              backgroundColor: 'white',
            }}
          >
            {items}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
