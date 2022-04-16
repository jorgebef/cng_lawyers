import { useState } from 'react'
import {
  Header as MantineHeader,
  Group,
  Burger,
  Paper,
  Text,
  Transition,
  useMantineTheme,
  Container,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useStyles } from './Header.styles'

interface ILink {
  link: string
  label: string
}

const links: ILink[] = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/contact', label: 'Contact' },
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

  return (
    <MantineHeader height={theme.other.headerH} className={classes.header}>
      <Container className={classes.inner}>
        <Text>LOGO</Text>
        <Group spacing={theme.spacing.sm} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={open}
          onClick={() => setOpen(!open)}
          className={classes.burger}
          size='md'
        />

        <Transition transition='slide-right' duration={200} mounted={open}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </MantineHeader>
  )
}
