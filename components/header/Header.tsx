import { useState } from 'react'
import {
  Header as MantineHeader,
  Group,
  Burger,
  Text,
  useMantineTheme,
  Container,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useStyles } from './Header.styles'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ILink {
  link: string
  label: string
}

const links: ILink[] = [
  { link: '/', label: 'HOME' },
  { link: '/services', label: 'SERVICES' },
  { link: '/about-us', label: 'ABOUT US' },
  { link: '/contact', label: 'CONTACT' },
]

export const Header: React.FC = () => {
  const { classes, cx } = useStyles()
  const router = useRouter()
  const theme = useMantineTheme()

  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>(router.asPath)

  const handleToggle = (e: React.MouseEvent, link: ILink) => {
    e.preventDefault()
    setActive(link.link)
    setOpen(false)
    router.push(link.link)
  }

  const items = links.map(link => (
    <Text
      key={link.label}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(e: React.MouseEvent) => handleToggle(e, link)}
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
      <Container size='xl' className={classes.inner}>
        <div className={classes.logoContainer} onClick={() => router.push('/')}>
          <Image alt='CNG Lawyers logo' src={logo} />
        </div>
        <Group spacing={theme.spacing.sm} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={open}
          color={
            !open ? theme.colors[theme.primaryColor][0] : theme.colors.red[6]
          }
          onClick={() => setOpen(!open)}
          className={classes.burger}
          size='md'
        />

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
