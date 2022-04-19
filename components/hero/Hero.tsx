import { Button, Container, Text, useMantineTheme } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import Image from 'next/image'
import { useRouter } from 'next/router'
import handshake from '../../public/handshake.jpeg'
import { useStyles } from './Hero.styles'

export const Hero = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const router = useRouter()
  const { width, height: _ } = useViewportSize()

  const imgPosition =
    width > theme.breakpoints.lg
      ? '320px'
      : width > theme.breakpoints.md
      ? '13vw'
      : width < theme.breakpoints.sm
      ? '11vw'
      : '18vw'

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
            objectPosition={imgPosition}
            className={classes.heroImg}
          />
        </div>
        <div className={classes.heroLeft}>
          <div className={classes.textContainer}>
            <Text color={theme.white} className={classes.heroText}>
              LEGAL ADVICE
              <br />
              YOU CAN TRUST
            </Text>
            <Button
              color='red'
              size='sm'
              onClick={() => router.push('/contact')}
            >
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
