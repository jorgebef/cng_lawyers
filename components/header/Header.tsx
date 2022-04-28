import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { useAppCtx } from '../../context/AppCtx'
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { CloseRounded, MenuRounded } from '@mui/icons-material'

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
  const theme = useTheme()
  const router = useRouter()
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
      className={active === link.link ? 'active' : undefined}
      onClick={(e: React.MouseEvent) => handleNavigate(e, link.link)}
      sx={{
        color:
          active === link.link
            ? 'white'
            : link.label.toLowerCase() === 'contact us'
            ? theme.palette.error.main
            : theme.palette.primary.main,
        display: 'block',
        lineHeight: 1,
        px: theme.custom.spacing.md,
        py: theme.custom.spacing.xs,
        borderRadius: `${theme.shape.borderRadius}px`,
        textDecoration: 'none',
        cursor: 'pointer',
        fontWeight: 900,

        '&:hover': {
          backgroundColor: theme.palette.grey[200],
        },

        '&.active, &:hover.active': {
          backgroundColor: theme.palette.primary.main,
          color: 'white',
        },
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
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
          sx={{
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            height: theme.custom.header.height,
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

        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            gap: theme.custom.spacing.xs,
          }}
        >
          <Button
            onClick={(e: React.MouseEvent) => {
              viewContact()
              handleNavigate(e, '/contact')
            }}
            size='small'
            sx={{
              color: 'white',
              backgroundColor: theme.palette.error.main,
              // display: { xs: 'block', md: 'none' },
            }}
          >
            Contact us
          </Button>
          <IconButton onClick={() => setOpen(!open)}>
            {!open ? (
              <MenuRounded fontSize='large' />
            ) : (
              <CloseRounded fontSize='large' />
            )}
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: theme.custom.spacing.xs,
          }}
        >
          {items}
        </Box>

        <Box
          component={motion.div}
          initial={open ? 'open' : 'closed'}
          animate={open ? 'open' : 'closed'}
          variants={dropdownVariants}
          transition={{ type: 'spring', damping: 24, stiffness: 280 }}
          sx={{
            position: 'absolute',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            gap: theme.custom.spacing.xs,
            py: theme.custom.spacing.md,
            px: theme.custom.spacing.lg,
            height: `calc(100vh - ${theme.custom.header.height}px)`,
            top: theme.custom.header.height,
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
    </AppBar>
  )
}
