import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Box, Container, Typography, useTheme } from '@mui/material'

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

      <Box
        component={motion.main}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        sx={{
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
        <Container>
          <div>
            At CNG Lawyers we are an independent law firm where we offer you the
            legal experience you deserve, provided by qualified lawyers that not
            only speak English, but also understand the way you think. We have
            helped thousands of people in their quest to buy or sell a property
            in Spain as well as managing their legal representation, taxes, and
            all affairs in the country. We always go that one step further for
            our clients. We are conveyancing experts.
          </div>
        </Container>
      </Box>
    </div>
  )
}

export default About
