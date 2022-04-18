import { Button, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import handshake from '../../public/handshake.jpeg'
import { useStyles } from './Hero.styles'

export const Hero = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <div className={classes.hero}>
      <Image
        src={handshake}
        objectFit='cover'
        quality={50}
        loading='eager'
        objectPosition='20vh'
        className={classes.heroImg}
      />
      <div className={classes.heroLeft}>
        <div className={classes.textContainer}>
          <Text color={theme.white} className={classes.heroText}>
            LEGAL ADVICE
            <br />
            YOU CAN TRUST
          </Text>
          <Button color='red' size='sm'>
            Contact us
          </Button>
        </div>
      </div>
    </div>
  )
}
