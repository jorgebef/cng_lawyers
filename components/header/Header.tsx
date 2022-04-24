import { useEffect, useState } from 'react'
import {
  Header as MantineHeader,
  Group,
  Burger,
  Image,
  Text,
  useMantineTheme,
  Container,
  Button,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useStyles } from './Header.styles'
import { motion } from 'framer-motion'
import { useAppCtx } from '../../context/AppCtx'

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
    <Text
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
    </Text>
  ))

  const dropdownVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  }

  return (
    <MantineHeader height={theme.other.headerH} className={classes.navbar}>
      <Container size='xl' px={theme.spacing.md} className={classes.inner}>
        <div
          className={classes.logoContainer}
          onClick={(e: React.MouseEvent) => handleNavigate(e, '/')}
        >
          <Image alt='CNG Lawyers logo' src='/logo.svg' />
        </div>

        <div className={classes.smButtons}>
          <Button
            className={classes.contactBtn}
            color='red'
            size='xs'
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
              !open ? theme.colors[theme.primaryColor][0] : theme.colors.red[6]
            }
            onClick={() => setOpen(!open)}
            className={classes.burger}
            size='md'
          />
        </div>

        <Group spacing={theme.spacing.xs} className={classes.links}>
          {items}
        </Group>

        <motion.div
          initial={open ? 'open' : 'closed'}
          animate={open ? 'open' : 'closed'}
          variants={dropdownVariants}
          transition={{ type: 'spring', damping: 24, stiffness: 280 }}
          className={classes.dropdown}
        >
          {items}
        </motion.div>
      </Container>
    </MantineHeader>
  )
}
