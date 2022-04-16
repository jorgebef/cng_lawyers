import {
  Container,
  Divider,
  Footer as MantineFooter,
  Text,
  useMantineTheme,
} from '@mantine/core'
import Image from 'next/image'
import { useStyles } from './Footer.styles'
import logo from '../../public/logo.svg'

interface IFooterContact {
  [key: string]: string
}

const footerContact: IFooterContact = {
  addr: 'C/ Pedro Lorca xxxxx',
  telf1: '+34 xxx xxx xxx',
  telf2: '+34 xxx xxx xxx',
  email: 'info@cnglawyers.com',
}

interface IFooterCol {
  title: string
  links: { label: string; link: string }[]
}

const footerCols: IFooterCol[] = [
  {
    title: 'Services',
    links: [
      { label: 'Conveyancing', link: '/services' },
      { label: 'Inheritance', link: '/services' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'XXXXX', link: '/contact' },
      { label: 'XXXXXXX', link: '/contact' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Follow on Instagram', link: '/contact' },
      { label: 'Email newsletter', link: '/contact' },
    ],
  },
]

export const Footer = () => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <MantineFooter height={theme.other.footerH} className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.info}>
          <div className={classes.companyInfo}>
            <div className={classes.logo}>
              <Image src={logo} quality={20} />
            </div>
            <div>
              {Object.values(footerContact).map(val => (
                <Text>{val}</Text>
              ))}
            </div>
          </div>
          <div className={classes.groups}>
            {footerCols.map((col, i) => (
              <div key={i}>
                <Text className={classes.title}>{col.title}</Text>
                {col.links.map(link => (
                  <Text variant='link'>{link.label}</Text>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Divider className={classes.divider} />
        <Text>© 2022 Jorge Befán - All rights reserved.</Text>
      </Container>
    </MantineFooter>
  )
}
