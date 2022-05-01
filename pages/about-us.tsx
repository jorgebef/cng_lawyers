import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container, Typography, useTheme } from '@mui/material'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const About: NextPage = () => {
  const theme = useTheme()

  return (
    <div>
      <Head>
        <title>CNG Lawyers - About us</title>
        <meta
          name='description'
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
          gap: theme.custom.spacing.xl,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.custom.spacing.lg,
            justifyContent: 'center',
            padding: theme.custom.spacing.lg,
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            fontWeight={900}
            color={theme.palette.primary.main}
            sx={{ fontSize: 40 }}
          >
            ABOUT US
          </Typography>
          <div>
            <img src='/team.jpg' alt='CNG Lawyers team' loading='lazy' />
          </div>
        </Container>
      </motion.main>
    </div>
  )
}

export default About
