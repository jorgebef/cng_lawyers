import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material'
import { useAppCtx } from '../context/AppCtx'
import { useRouter } from 'next/router'
import { ContactButton } from '../components/contactButton'
import { GoPrimitiveDot } from 'react-icons/go'
import Image from 'next/image'
import teamImg from '../public/team.jpg'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

const About: NextPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { viewContact } = useAppCtx()

  const members = [
    {
      name: 'Javier Casanova Navarro',
      association: 'Orihuela',
      regNo: '1820',
      specialtyList: [
        'Litigation specialist',
        'Contract law',
        'Administration legislation',
      ],
    },
    {
      name: 'Daniel Gutierrez Gomez',
      association: 'Orihuela',
      regNo: '1776',
      specialtyList: [
        'Conveyancing specialist',
        'International law',
        'Real Estate law',
      ],
    },
    {
      name: 'Mª José Navarro Cámara',
      association: 'Orihuela',
      regNo: '569',
      specialtyList: [
        'Real Estate law specialist',
        '+30 years experience',
        'Extrajudicial settlement specialist',
      ],
    },
  ]

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
            paddingTop: theme.custom.spacing.lg,
            justifyContent: 'center',
            maxWidth: theme.breakpoints.values.xl,
          }}
        >
          <Typography
            fontWeight={900}
            color={theme.palette.primary.main}
            sx={{ fontSize: theme.custom.fontSizes.xxl }}
          >
            ABOUT US
          </Typography>
          <Box
            sx={{
              borderRadius: `${theme.shape.borderRadius}px`,
              minWidth: theme.breakpoints.values.sm,
            }}
          >
            <Image
              src={teamImg}
              alt='CNG Lawyers team'
              loading='eager'
              height='336'
              width='500'
              layout='responsive'
              placeholder='blur'
              quality={70}
            />
          </Box>
        </Container>

        <Container
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
            // placeContent: 'center',
            maxWidth: `${theme.breakpoints.values.lg}px !important`,
            gap: theme.custom.spacing.md,
          }}
        >
          {members.map((member, i) => (
            <Box
              key={i}
              component={motion.div}
              initial='rest'
              whileHover='hover'
              animate='rest'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
                alignItems: 'stretch',
              }}
            >
              <Box
                component={motion.div}
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.1,
                  },
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: theme.custom.spacing.sm,
                  borderRadius: `${theme.shape.borderRadius}px`,
                  backgroundColor: theme.palette.grey[100],
                }}
              >
                <Typography
                  fontSize={theme.custom.fontSizes.xl}
                  color={theme.palette.primary.main}
                  fontWeight='500'
                >
                  {member.name}
                </Typography>
                <Typography color={theme.palette.primary.main} fontWeight='500'>
                  {member.association} registered lawyer no. {member.regNo}
                </Typography>
                <Divider
                  sx={{ alignSelf: 'stretch', my: theme.custom.spacing.xs }}
                />
                <List dense>
                  {member.specialtyList.map((spec, j) => (
                    <ListItem key={j}>
                      <GoPrimitiveDot color={theme.palette.primary.main} />
                      <Typography color={theme.palette.primary.main}>
                        {spec}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          ))}
        </Container>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: theme.breakpoints.values.xl,
            gap: theme.custom.spacing.md,
          }}
        >
          <Box
            // component='span'
            // align='justify'
            color={theme.palette.primary.main}
            fontSize={theme.custom.fontSizes.lg}
            px={theme.custom.spacing.lg}
            fontWeight={400}
          >
            At CNG Lawyers we are an independent law firm where we offer you the
            legal experience you deserve, provided by qualified lawyers that not
            only speak English, but also understand the way you think. We have
            helped thousands of people in their quest to buy or sell a property
            in Spain as well as managing their legal representation, taxes, and
            all affairs in the country. We always go that one step further for
            our clients. We are conveyancing experts.{' '}
            <Typography
              fontSize={theme.custom.fontSizes.lg}
              component='span'
              fontWeight={900}
            >
              Without obligation
            </Typography>
          </Box>
          <ContactButton
            size='large'
            btnFontSize='lg'
            onClick={() => {
              viewContact()
              router.push('/contact')
            }}
          >
            Contact us
          </ContactButton>
        </Container>
      </Box>
    </div>
  )
}

export default About
