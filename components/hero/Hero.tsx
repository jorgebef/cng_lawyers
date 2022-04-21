import { Container, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import handshake from '../../public/handshake_cropped.jpg'
import { useStyles } from './Hero.styles'
import apits_logo from '../../public/apits_logo.png'
import logo_abogacia from '../../public/logo_abogacia.png'

export const Hero = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <div className={classes.hero}>
      <Container px={0} className={classes.heroContainer}>
        <div className={classes.imgContainer}>
          <Image
            alt='handshake image'
            src={handshake}
            priority
            objectFit='cover'
            quality={50}
            loading='eager'
          />
        </div>
        <div className={classes.heroLeft}>
          <div className={classes.textContainer}>
            <Text color={theme.white} className={classes.heroText}>
              LEGAL ADVICE
              <br />
              YOU CAN TRUST
            </Text>
            <div className={classes.otherLogos}>
              <Image
                src={logo_abogacia}
                objectFit='scale-down'
                alt='Logo Abogacia'
              />
              <Image
                src={apits_logo}
                objectFit='scale-down'
                alt='A Place in the Sun logo'
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
