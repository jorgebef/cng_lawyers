import { Container, Text, useMantineTheme } from '@mantine/core'
import { useStyles } from './Hero.styles'
import { motion } from 'framer-motion'

export const Hero = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <div className={classes.hero}>
      <Container
        px={0}
        className={classes.heroContainer}
        // sx={{ display: 'flex', flexDirection: 'row-reverse' }}
      >
        <div className={classes.imgContainer}>
          <img
            alt='handshake image'
            src='/handshake_cropped.jpg'
            loading='lazy'
            width='900'
            height='750'
            style={{
              height: 'auto',
              marginLeft:'-110px',
              // width: '100%',
              objectFit: 'cover',
            }}
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
              <img
                src='/apits_logo.png'
                alt='A Place in the Sun logo'
                loading='lazy'
                width='192'
                height='35'
                style={{ width: '100%', height: 'auto' }}
              />
              <img
                src='/logo_abogacia_white.png'
                alt='Logo Abogacia'
                loading='lazy'
                width='210'
                height='72'
                style={{ width: '100%', height: 'auto' }}
              />
              <svg width='0' height='0'>
                <defs>
                  <clipPath id='myCurve' clipPathUnits='objectBoundingBox'>
                    <motion.path d='M0.179,0.356 C0.351,0.221,0.421,0.081,0.43,0 H0.997 C1,0.044,1,0.228,0.819,0.409 C0.635,0.576,0.575,0.906,0.587,1 H0 C0.009,0.823,0.015,0.485,0.179,0.356' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
