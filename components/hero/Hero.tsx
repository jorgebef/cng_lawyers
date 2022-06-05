import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { GoLaw } from 'react-icons/go'
import { theme } from '../../styles/theme'
import handshakeImg from '../../public/handshake_cropped.svg'
import apitsLogo from '../../public/apits_logo.svg'

export const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '42vh',
        maxHeight: '550px',
        backgroundColor: theme.palette.primary.main,
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          px: 0,
          flexDirection: 'row-reverse',
          width: '100%',
        }}
      >
        <Box
          sx={{
            // position: 'relative',
            display: 'flex',
            overflow: 'hidden',
            height: '100%',
            // height: '10rem',
            // width: '30rem',
            clipPath: 'url(#myCurve)',
            marginLeft: '-100px',
            marginRight: { xs: '-160px', sm: '-120px', md: 0 },
            zIndex: 0,

            '&::after': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              content: '""',
              opacity: 0.4,
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Image
            alt='handshake image'
            src={handshakeImg}
            width='900'
            height='750'
            priority
            // style={{
            //   height: '45vh',
            //   marginLeft: '-110px',
            //   objectFit: 'cover',
            // }}
            objectFit='cover'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            left: 0,
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              // gap: theme.custom.spacing.xs,
              alignItems: 'center',
              padding: {
                xs: theme.custom.spacing.xs,
                md: theme.custom.spacing.lg,
              },
              zIndex: 1,
            }}
          >
            <Typography
              color='white'
              sx={{
                lineHeight: 1.1,
                fontSize: { xs: 40, md: 55 },
                fontWeight: 900,
              }}
            >
              LEGAL ADVICE
              <br />
              YOU CAN TRUST
            </Typography>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: theme.custom.spacing.xs,
                marginTop: theme.custom.spacing.md,
                width: '160px',
              }}
            >
              <Image
                src={apitsLogo}
                alt='A Place in the Sun logo'
                priority
                width='192'
                height='35'
                quality={20}
              />
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)',
                  alignItems: 'center',
                }}
              >
                <GoLaw
                  fontSize={theme.custom.fontSizes.xxl}
                  color={theme.palette.extra.main}
                />
                <Typography
                  // color={theme.palette.extra.main}
                  color={theme.palette.grey[300]}
                  fontSize={theme.custom.fontSizes.xl}
                  fontWeight='700'
                  lineHeight={1.1}
                >
                  Registered Lawyers
                </Typography>
              </Box>
              <svg width='0' height='0'>
                <defs>
                  <clipPath id='myCurve' clipPathUnits='objectBoundingBox'>
                    <path d='M0.179,0.356 C0.351,0.221,0.421,0.081,0.43,0 H0.997 C1,0.044,1,0.228,0.819,0.409 C0.635,0.576,0.575,0.906,0.587,1 H0 C0.009,0.823,0.015,0.485,0.179,0.356' />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
