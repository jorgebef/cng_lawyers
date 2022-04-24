import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { ServiceCard, ServiceCell } from '../components/services'
import {
  Box,
  Container,
  List,
  Space,
  Text,
  ThemeIcon,
  Timeline,
  useMantineTheme,
} from '@mantine/core'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import {
  GiHouse,
  GiDirectionSigns,
  GiReceiveMoney,
  GiHandcuffs,
} from 'react-icons/gi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { GoLaw } from 'react-icons/go'
import { motion } from 'framer-motion'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const Services: NextPage = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const theme = useMantineTheme()

  return (
    <div>
      <Head>
        <title>CNG Lawyers - Services</title>
        <meta
          name='CNG Lawyers legal services'
          content='Legal services provided by CNG Lawyers, conveyancing, fiscal representation, litigation'
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
              icon={<GiHouse size='100%' color='white' />}
            >
              Our specialist property team will guide you through all aspects of
              Purchasing & Selling your Property, Property Rentals, Commercial
              Leases, Building Projects, and Securing Off-Plan Purchases
            </ServiceCell>

            <ServiceCell
              title='RELOCATION SERVICES'
              icon={<GiDirectionSigns size='100%' color='white' />}
            >
              Our relocation team will help you in arranging your NIE
              (foreigner’s tax number), Residency Card, Health Card, Visas,
              Spanish Citizenship, Buying or Importing a Car and Paying your
              Taxes
            </ServiceCell>

            <ServiceCell
              title='WILLS & INHERITANCE'
              icon={<IoDocumentTextOutline size='100%' color='white' />}
            >
              It is extremely important to make a Spanish will as Spanish law on
              inheritance is very different from other countries. We can assist
              with: Making Wills, Inheritances, Powers of Attorney, and any
              other situation
            </ServiceCell>

            <ServiceCell
              title='CIVIL LAW'
              icon={<GoLaw size='100%' color='white' />}
            >
              CNG Lawyers handles all matters of Civil Litigation, including
              Personal Injuries, Debt Collection, Creditors Rights, Wrongful
              Dismissal, Divorce and Family Law
            </ServiceCell>

            <ServiceCell
              title='TAXATION'
              icon={<GiReceiveMoney size='100%' color='white' />}
            >
              Assisting in all matters of fiscal representation before the
              Spanish tax office, both for private individuals and companies. We
              can assist you with your Personal Income Tax Declaration, Tax
              Appeals and Claims
            </ServiceCell>
            <ServiceCell
              title='CRIMINAL LAW'
              icon={<GiHandcuffs size='100%' color='white' />}
            >
              CNG Lawyers can assist you if you have been charged with or have
              been a victim of any offences, including Driving & Vehicle
              offences, Personal Assault, Theft & Vandalism, Criminal
              Negligence, Corporate Crimes and any other offences
            </ServiceCell>
          </Box>
        </Container>

        <Container
          px={theme.spacing.xl}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing.lg,
            alignItems: 'center',
            padding: theme.spacing.lg,
            maxWidth: theme.breakpoints.xl,
          }}
        >
          <Text
            weight={900}
            color={theme.colors[theme.primaryColor][0]}
            sx={{ fontSize: 40 }}
          >
            PROFESSIONAL SERVICE WHEN BUYING OR SELLING IN SPAIN
          </Text>
          <Timeline
            active={3}
            // color={theme.colors[theme.primaryColor][0]}
            // color='red'
            lineWidth={5}
          >
            <Timeline.Item bulletSize={25}>
              <Text
                size='xl'
                color={theme.colors[theme.primaryColor][0]}
                weight='900'
                pb={theme.spacing.sm}
              >
                BEFORE
              </Text>
              <List
                spacing='xs'
                center
                icon={
                  <ThemeIcon size={30} radius='xl'>
                    <AiOutlineCheckCircle
                      size={30}
                      color={theme.colors[theme.primaryColor][0]}
                    />
                  </ThemeIcon>
                }
                sx={{
                  fontWeight: 500,
                  color: theme.colors[theme.primaryColor][0],
                }}
              >
                <List.Item>
                  We will provide you with a full breakdown of costs easy to
                  understand for the purchase or sale of the desired property.
                </List.Item>
                <List.Item>
                  Our solicitors perform a complete legal evaluation and due
                  diligence of the property.
                </List.Item>
                <List.Item>
                  We negotiate and prepare the contract for any real estate
                  property purchase.
                </List.Item>
                <List.Item>
                  We help you obtain your tax identification (NIE) number,
                  Spanish bank account and Power of Attorney (when required).
                </List.Item>
              </List>
            </Timeline.Item>
            <Timeline.Item bulletSize={25}>
              <Text
                size='xl'
                color={theme.colors[theme.primaryColor][0]}
                weight='900'
                pb={theme.spacing.sm}
              >
                DURING
              </Text>
              <List
                spacing='xs'
                center
                icon={
                  <ThemeIcon size={30} radius='xl'>
                    <AiOutlineCheckCircle
                      size={30}
                      color={theme.colors[theme.primaryColor][0]}
                    />
                  </ThemeIcon>
                }
                sx={{
                  fontWeight: 500,
                  color: theme.colors[theme.primaryColor][0],
                }}
              >
                <List.Item>
                  Our goal is to guide our clients through a safe and
                  comfortable buying experience with the maximum legal
                  guarantees.
                </List.Item>
                <List.Item>
                  We provide complete support including: translation services,
                  attending the notary and assistance signing of title deeds.
                </List.Item>
              </List>
            </Timeline.Item>
            <Timeline.Item bulletSize={25}>
              <Text
                size='xl'
                color={theme.colors[theme.primaryColor][0]}
                weight='900'
                pb={theme.spacing.sm}
              >
                AFTER
              </Text>
              <List
                spacing='xs'
                center
                icon={
                  <ThemeIcon size={30} radius='xl'>
                    <AiOutlineCheckCircle
                      size={30}
                      color={theme.colors[theme.primaryColor][0]}
                    />
                  </ThemeIcon>
                }
                sx={{
                  fontWeight: 500,
                  color: theme.colors[theme.primaryColor][0],
                }}
              >
                <List.Item>
                  We will register your deeds at the land registry and help
                  change over of all utility services.
                </List.Item>
                <List.Item>
                  We provide comprehensive tax services including resident and
                  non-resident taxes, and legal representation for any queries
                  and issues that may arise in Spain.
                </List.Item>
                <List.Item>
                  We invite you to meet us personally at our office in
                  Torrevieja where we have FREE parking for our clients.
                </List.Item>
              </List>
            </Timeline.Item>
          </Timeline>
        </Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: theme.breakpoints.xl,
            gap: theme.spacing.xl,
          }}
        >
          <ServiceCard
            img='/conveyancing.jpg'
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
            img='/fiscal_repres.jpg'
            title='Fiscal Representation'
            align='right'
          >
            We are able to hold your documentation, file your taxes and have
            several packages to fit your needs in Spain. All plans include
            appointments with Lawyers to clarify any queries you might have,
            fiscal representation and basically making your life in Spain
            easier. Contact us in order to enquire about the possible packages.
          </ServiceCard>

          <ServiceCard img='/litigation.jpg' title='Litigation' align='left'>
            If you have any procedure that requires the appearance of a lawyer,
            be sure you are in good hands. We will handle the procedure and
            inform you of any news, winning cases and reaching deals that are
            beneficial for our clients. Contact us with what your needs are and
            we will organise a meeting in our office or online to discuss the
            specifics of the case.
          </ServiceCard>
        </Container>
      </motion.main>
    </div>
  )
}

export default Services
