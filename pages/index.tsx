import {
  Box,
  Button,
  Container,
  Space,
  Text,
  useMantineTheme,
} from '@mantine/core'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AOSCardQuote } from '../components/aosCardQuote'
import { ServiceCell } from '../components/services'
import { Hero } from '../components/hero'
import { GoLaw } from 'react-icons/go'
import {
  GiHouse,
  GiDirectionSigns,
  GiReceiveMoney,
  GiHandcuffs,
} from 'react-icons/gi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import { useAppCtx } from '../context/AppCtx'

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
  const theme = useMantineTheme()
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
      <Text
        weight={900}
        variant='gradient'
        gradient={{
          from: theme.colors[theme.primaryColor][1],
          to: theme.colors[theme.primaryColor][0],
          deg: 30,
        }}
        sx={{
          fontSize: 45,
          width: `${number.length + 2.2 + Math.log(number.length) * 1.8}rem`,
        }}
        component='span'
      >
        +{count}
      </Text>
      <Text
        component='span'
        weight={700}
        color={theme.colors[theme.primaryColor][0]}
        size='xl'
        // sx={{opacity:'0.9'}}
      >
        {text}
      </Text>
    </div>
  )
}

const Home: NextPage = () => {
  const theme = useMantineTheme()
  const router = useRouter()
  const { viewContact } = useAppCtx()

  return (
    <>
      <Head>
        <title>CNG Lawyers - Home</title>
        <meta
          name='Home'
          content='CNG Lawyers - The lawfirm you can trust in Spain'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <motion.main
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.lg,
        }}
      >
        <Container
          px={theme.spacing.md}
          py={theme.spacing.md}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing.xs,
          }}
        >
          <Text
            component='span'
            color={theme.colors[theme.primaryColor][0]}
            align='center'
            weight={900}
            sx={{ fontSize: 40 }}
          >
            EXCELLENT SERVICE
          </Text>
          <div>
            <FeatureDiv number='30' text='Years of experience' />
            <FeatureDiv number='690' text='Deals closed' />
            <FeatureDiv number='300' text='Cases won' />
            <FeatureDiv number='1200' text='Happy clients' />
          </div>
        </Container>

        <div
          style={{
            padding: `${theme.spacing.xl}px ${theme.spacing.md}px`,
            backgroundColor: theme.colors.gray[1],
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: theme.breakpoints.xl,
              gap: theme.spacing.sm,
            }}
          >
            <Text
              component='span'
              color={theme.colors[theme.primaryColor][0]}
              align='center'
              size='xl'
              weight={500}
            >
              Schedule a call or an appointment{' '}
              <Text component='span' weight={800} size='xl'>
                without obligation
              </Text>
            </Text>
            <Button
              color='red'
              size='lg'
              onClick={() => {
                viewContact()
                router.push('/contact')
              }}
            >
              Contact us
            </Button>
          </Container>
        </div>

        <Container
          px={theme.spacing.lg}
          py={theme.spacing.xl}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing.lg,
            justifyContent: 'center',
            maxWidth: theme.breakpoints.xl,
          }}
        >
          <Text
            weight={900}
            color={theme.colors[theme.primaryColor][0]}
            sx={{ fontSize: 40 }}
          >
            LEGAL SERVICES
          </Text>
          <Space h='xl' />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: theme.spacing.lg,
              rowGap: '80px',
              textAlign: 'center',

              [theme.fn.smallerThan('lg')]: {
                gridTemplateColumns: 'repeat(2,1fr)',
              },

              [theme.fn.smallerThan('sm')]: {
                gridTemplateColumns: 'repeat(1,1fr)',
              },
            }}
          >
            <ServiceCell
              title='SPANISH PROPERTY LAW'
              icon={<GiHouse size='70px' color='white' />}
            >
              Our specialist property team will guide you through all aspects of
              Purchasing & Selling your Property, Property Rentals, Commercial
              Leases, Building Projects, and Securing Off-Plan Purchases
            </ServiceCell>

            <ServiceCell
              title='RELOCATION SERVICES'
              icon={<GiDirectionSigns size='70px' color='white' />}
            >
              Our relocation team will help you in arranging your NIE
              (foreigner’s tax number), Residency Card, Health Card, Visas,
              Spanish Citizenship, Buying or Importing a Car and Paying your
              Taxes
            </ServiceCell>

            <ServiceCell
              title='WILLS & INHERITANCE'
              icon={<IoDocumentTextOutline size='70px' color='white' />}
            >
              It is extremely important to make a Spanish will as Spanish law on
              inheritance is very different from other countries. We can assist
              with: Making Wills, Inheritances, Powers of Attorney, and any
              other situation
            </ServiceCell>

            <ServiceCell
              title='CIVIL LAW'
              icon={<GoLaw size='70px' color='white' />}
            >
              CNG Lawyers handles all matters of Civil Litigation, including
              Personal Injuries, Debt Collection, Creditors Rights, Wrongful
              Dismissal, Divorce and Family Law
            </ServiceCell>

            <ServiceCell
              title='TAXATION'
              icon={<GiReceiveMoney size='70px' color='white' />}
            >
              Assisting in all matters of fiscal representation before the
              Spanish tax office, both for private individuals and companies. We
              can assist you with your Personal Income Tax Declaration, Tax
              Appeals and Claims
            </ServiceCell>
            <ServiceCell
              title='CRIMINAL LAW'
              icon={<GiHandcuffs size='70px' color='white' />}
            >
              CNG Lawyers can assist you if you have been charged with or have
              been a victim of any offences, including Driving & Vehicle
              offences, Personal Assault, Theft & Vandalism, Criminal
              Negligence, Corporate Crimes and any other offences
            </ServiceCell>
          </Box>
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: theme.spacing.lg,
            maxWidth: theme.breakpoints.xl,
          }}
        >
          <Text
            weight={900}
            color={theme.colors[theme.primaryColor][0]}
            align='center'
            sx={{ fontSize: 40 }}
          >
            CLIENT TESTIMONIALS
          </Text>
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
      </motion.main>
    </>
  )
}

export default Home
