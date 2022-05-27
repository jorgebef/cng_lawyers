import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AOSCardQuote } from '../components/aosCardQuote'
import { ServiceCell } from '../components/services'
import { Hero } from '../components/hero'
import { GiReceiveMoney, GiDiploma } from 'react-icons/gi'
import { GoLaw } from 'react-icons/go'
import { MdOutlineFeed } from 'react-icons/md'
import { BsFillHouseFill, BsFillSignpost2Fill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useAppCtx } from '../context/AppCtx'
import { Box, Container, Divider, Typography, useTheme } from '@mui/material'
import { ContactButton } from '../components/contactButton'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

interface FeatureDivProps {
  number: string
  text: string
}

const FeatureDiv = ({ number, text }: FeatureDivProps) => {
  const theme = useTheme()
  const [count, setCount] = useState('0')

  useEffect(() => {
    let start = 0
    const duration = '1'

    const end = parseInt(number.substring(0, 3))

    if (start === end) return

    const totalMilSecDur = parseInt(duration)
    const incrementTime = (totalMilSecDur / end) * 4000

    const timer = setInterval(() => {
      start += 3
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)
    }, incrementTime)
  }, [number])

  return (
    <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
      <Typography
        fontWeight={900}
        borderColor={theme.palette.secondary.main}
        fontSize={theme.typography.h3.fontSize}
        sx={{
          background: `-webkit-linear-gradient(30deg, ${theme.palette.secondary.main} 10%, ${theme.palette.primary.main} 70%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          width: `${number.length + 2.6 + Math.log(number.length) * 1.8}rem`,
        }}
        component='span'
      >
        +{count}
      </Typography>
      <Typography
        component='span'
        fontWeight={700}
        fontSize={theme.typography.h5.fontSize}
        color={theme.palette.primary.main}
      >
        {text}
      </Typography>
    </div>
  )
}

const Home: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { viewContact } = useAppCtx()

  return (
    <>
      <Head>
        <title>CNG Lawyers - Home</title>
        <meta
          name='description'
          content='CNG Lawyers - The Costa Blanca lawfirm you can trust in Spain'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <Box
        component={motion.main}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.custom.spacing.md,
        }}
      >
        <Container
          sx={{
            px: theme.custom.spacing.sm,
            py: theme.custom.spacing.md,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.custom.spacing.xs,
          }}
        >
          <Typography
            component='span'
            align='center'
            color={theme.palette.primary.main}
            fontWeight={900}
            fontSize={theme.custom.fontSizes.xxl}
          >
            EXCELLENT SERVICE
          </Typography>
          <div>
            <FeatureDiv number='30' text='Years of experience' />
            <FeatureDiv number='690' text='Deals closed' />
            <FeatureDiv number='300' text='Cases won' />
            <FeatureDiv number='1200' text='Happy clients' />
          </div>
        </Container>

        <Box
          sx={{
            px: theme.custom.spacing.sm,
            py: theme.custom.spacing.lg,
            backgroundColor: theme.palette.grey[100],
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: theme.breakpoints.values.xl,
              gap: theme.custom.spacing.sm,
            }}
          >
            <Typography
              component='span'
              align='center'
              color={theme.palette.primary.main}
              fontSize={theme.typography.h5.fontSize}
              fontWeight={500}
            >
              Schedule a call or an appointment{' '}
              <Typography
                component='span'
                fontWeight={900}
                fontSize={theme.typography.h5.fontSize}
              >
                without obligation
              </Typography>
            </Typography>
            <ContactButton
              size='large'
              onClick={() => {
                viewContact()
                router.push('/contact')
              }}
              btnFontSize='lg'
            >
              Contact us
            </ContactButton>
          </Container>
        </Box>

        <Container
          sx={{
            px: theme.custom.spacing.sm,
            py: theme.custom.spacing.lg,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.custom.spacing.lg,
            justifyContent: 'center',
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            fontWeight={900}
            fontSize={theme.custom.fontSizes.xxl}
            sx={{ color: theme.palette.primary.main }}
          >
            LEGAL SERVICES
          </Typography>
          <Divider />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2,1fr)',
                lg: 'repeat(3,1fr)',
              },
              gap: theme.custom.spacing.lg,
              rowGap: '80px',
              textAlign: 'center',
            }}
          >
            <ServiceCell
              title='conveyancing experts'
              Icon={BsFillSignpost2Fill}
            >
              Our relocation team will help you in arranging your NIE
              (foreigner’s tax number), Residency Card, Health Card, Visas,
              Spanish Citizenship, Buying or Importing a Car and Paying your
              Taxes
            </ServiceCell>

            <ServiceCell title='real estate law' Icon={BsFillHouseFill}>
              Our specialist property team will guide you through all aspects of
              Purchasing & Selling your Property, Property Rentals, Commercial
              Leases, Building Projects, and Securing Off-Plan Purchases
            </ServiceCell>

            <ServiceCell
              title='qualified solicitors at your disposal'
              Icon={GiDiploma}
            >
              At CNG Lawyers, you will always receive the best legal advice from
              qualified and registered solicitors totalling 50+ years of
              experience between the team in various fields like from criminal
              law, real estate law or commercial law.
            </ServiceCell>

            <ServiceCell title='WILLS & INHERITANCE' Icon={MdOutlineFeed}>
              It is extremely important to make a Spanish will as Spanish law on
              inheritance is very different from other countries. We can assist
              with: Making Wills, Inheritances, Powers of Attorney, and any
              other situation
            </ServiceCell>

            <ServiceCell
              title='comprehensive legal representation'
              Icon={GoLaw}
            >
              At CNG Lawyers, we handle all matters of legal representation,
              including but not limited to Litigation, including Personal
              Injuries, Divorce, Family Law, tax representation for your tax
              declarations, whether resident or non-resident taxes and any other
              procedures.
            </ServiceCell>

            <ServiceCell title='taxation experts' Icon={GiReceiveMoney}>
              Assisting in all matters of fiscal representation before the
              Spanish tax office, both for private individuals and companies. We
              can assist you with your Personal Income Tax Declaration, Tax
              Appeals and Claims
            </ServiceCell>
          </Box>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.custom.spacing.lg,
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            fontWeight={900}
            align='center'
            color={theme.palette.primary.main}
            sx={{ fontSize: theme.custom.fontSizes.xxl }}
          >
            CLIENT TESTIMONIALS
          </Typography>
          <AOSCardQuote xfrom='-100%' cite='- Mrs. Grimason'>
            I bought a property in Torrevieja and I feel fortunate to have dealt
            with this company. Once I put a deposit down and I met Javier, he
            prepared a Power of Attorney for us to sign before we flew back and
            left everything in their hands. On our next trip back we had the
            keys to our apartment and everything was in our name, absolutely
            worry free.
          </AOSCardQuote>
          <AOSCardQuote xfrom='100%' cite='- Mr. Rowland'>
            CNG Lawyers have been a life saver for me, where others didn’t want
            to take the job, Daniel not only accepted it, but also made me feel
            safe and backed up by a team that deserves my trust.
          </AOSCardQuote>
          <AOSCardQuote xfrom='-100%' cite='- Mrs. Convy'>
            After my husband passed away I was completely lost and didn’t know
            what to do in Spain. Thankfully I met George who helped me with the
            inheritance process and now is more than my lawyer, I feel he is
            part of the family.
          </AOSCardQuote>
        </Container>
      </Box>
    </>
  )
}

export default Home
