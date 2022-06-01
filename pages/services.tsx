import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { ServiceCard, ServiceCell } from '../components/services'
import { motion } from 'framer-motion'
import { Box, Container, Divider, Typography, useTheme } from '@mui/material'
import { ServiceTimeline } from '../components/services/ServiceTimeline'
import { GiReceiveMoney, GiDiploma } from 'react-icons/gi'
import { GoLaw } from 'react-icons/go'
import { MdOutlineFeed } from 'react-icons/md'
import { BsFillHouseFill, BsFillSignpost2Fill } from 'react-icons/bs'
import conveyancingImg from '../public/conveyancing.jpg'
import fiscalImg from '../public/fiscal_repres.jpg'
import litigationImg from '../public/litigation.jpg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const Services: NextPage = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const theme = useTheme()

  return (
    <div>
      <Head>
        <title>CNG Lawyers - Services</title>
        <meta
          name='description'
          content='Legal services provided by CNG Lawyers, conveyancing, fiscal representation, litigation'
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
            px: theme.custom.spacing.sm,
            py: theme.custom.spacing.lg,
            gap: theme.custom.spacing.lg,
            justifyContent: 'center',
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            fontWeight={900}
            textAlign='center'
            color={theme.palette.primary.main}
            fontSize={theme.custom.fontSizes.xxl}
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

            <ServiceCell
              title='real estate law'
              Icon={BsFillHouseFill}
            >
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

            <ServiceCell
              title='WILLS & INHERITANCE'
              Icon={MdOutlineFeed}
            >
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

            <ServiceCell
              title='taxation experts'
              Icon={GiReceiveMoney}
            >
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
            gap: theme.custom.spacing.lg,
            px: theme.custom.spacing.sm,
            alignItems: 'center',
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            align='center'
            fontWeight={900}
            color={theme.palette.primary.main}
            fontSize={theme.custom.fontSizes.xxl}
          >
            PROFESSIONAL SERVICE WHEN BUYING OR SELLING IN SPAIN
          </Typography>

          <ServiceTimeline
            itemArr={[
              {
                subheader: 'before',
                contentList: [
                  'We will provide you with a full breakdown of costs easy to understand for the purchase or sale of the desired property.',
                  'Our solicitors perform a complete legal evaluation and due diligence of the property.',
                  'We negotiate and prepare the contract for any real estate property purchase.',
                  'We help you obtain your tax identification (NIE) number, Spanish bank account and Power of Attorney (when required).',
                ],
              },
              {
                subheader: 'during',
                contentList: [
                  'Our goal is to guide our clients through a safe and comfortable buying experience with the maximum legal guarantees.',
                  'We provide complete support including: translation services, attending the notary and assistance signing of title deeds.',
                ],
              },
              {
                subheader: 'after',
                contentList: [
                  'We will register your deeds at the land registry and help change over of all utility services.',
                  'We provide comprehensive tax services including resident and non-resident taxes, and legal representation for any queries and issues that may arise in Spain.',
                  'We invite you to meet us personally at our office in Torrevieja where we have FREE parking for our clients.',
                ],
              },
            ]}
          />
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: theme.breakpoints.values.xl,
            gap: theme.custom.spacing.xl,
          }}
        >
          <ServiceCard
            img={conveyancingImg}
            title='Conveyancing'
            align='left'
          >
            Purchase a property with the security that a Law firm provides when
            buying Real Estate in a foreign country. With the right advice that
            we can provide in your language, you will feel like at home when
            buying a property in Spain. A comprehensive guide on the purchase
            process will be provided as well as assistance during the whole
            procedure. A solicitor will always be available to answer any query
            you might have.
          </ServiceCard>

          <ServiceCard
            img={fiscalImg}
            title='Fiscal Representation'
            align='right'
          >
            We are able to hold your documentation, file your taxes and have
            several packages to fit your needs in Spain. All plans include
            appointments with Lawyers to clarify any queries you might have,
            fiscal representation and basically making your life in Spain
            easier. Contact us in order to enquire about the possible packages.
          </ServiceCard>

          <ServiceCard img={litigationImg} title='Litigation' align='left'>
            If you have any procedure that requires the appearance of a lawyer,
            be sure you are in good hands. We will handle the procedure and
            inform you of any news, winning cases and reaching deals that are
            beneficial for our clients. Contact us with what your needs are and
            we will organise a meeting in our office or online to discuss the
            specifics of the case.
          </ServiceCard>
        </Container>
      </Box>
    </div>
  )
}

export default Services
