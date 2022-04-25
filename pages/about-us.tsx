import { Container,  Text, useMantineTheme } from '@mantine/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const About: NextPage = () => {
  const theme = useMantineTheme()

  return (
    <div className='container'>
      <Head>
        <title>CNG Lawyers - About us</title>
        <meta
          name='CNG Lawyers about us'
          content='About CNG Lawyers, international lawfirm'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <motion.main
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.xl,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing.lg,
            justifyContent: 'center',
            padding: theme.spacing.lg,
            maxWidth: theme.breakpoints.xl,
          }}
        >
          <Text
            weight={900}
            color={theme.colors[theme.primaryColor][0]}
            sx={{ fontSize: 40 }}
          >
            ABOUT US
          </Text>
          <div>
            <img src='/team.jpg' alt='CNG Lawyers team' loading='lazy' />
          </div>
        </Container>
      </motion.main>
    </div>
  )
}

export default About
