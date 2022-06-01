import { Box, Container, Divider, Typography } from '@mui/material'
import Image from 'next/image'
import { theme } from '../../styles/theme'
import logoImg from '../../public/logo.svg'

interface IFooterContact {
  [key: string]: string
}

const footerContact: IFooterContact = {
  addr: 'C/ Pedro Lorca 29, 3rd floor',
  addr2: 'Torrevieja - 03181',
  addr3: 'Alicante (Spain)',
  telf1: '+34 711 01 12 93',
  email: 'info@cnglawyers.com',
}

interface IFooterCol {
  title: string
  links: { label: string; link: string }[]
}

const footerCols: IFooterCol[] = [
  {
    title: 'Services',
    links: [
      { label: 'Conveyancing', link: '/services' },
      { label: 'Inheritance', link: '/services' },
      { label: 'Litigation', link: '/services' },
      { label: 'Tax Advice', link: '/services' },
    ],
  },
  {
    title: 'About us',
    links: [{ label: 'The team', link: '/about-us' }],
  },
  {
    title: 'Contact us',
    links: [
      { label: 'Email', link: 'mailto:info@cnglawyers.com' },
      {
        label: 'Whatsapp',
        link: 'https://wa.me/34711011293?text=Hello,%20I%20would%20like%20to%arrange%an%appointment%20and%20enquire%20for%20legal%20information',
      },
    ],
  },
]

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        height: theme.custom.footer.height,
        py: theme.custom.spacing.sm,
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[500],
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxWidth: theme.breakpoints.values.xl,
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-around' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.custom.spacing.md,
            }}
          >
            <Box
              sx={{
                width: '150px',
              }}
            >
              <Image
                alt='CNG Lawyers logo'
                src={logoImg}
                loading='lazy'
                width='128px'
                height='50px'
              />
            </Box>
            <Box>
              {Object.values(footerContact).map((val, i) => (
                <Typography key={i}>{val}</Typography>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexWrap: 'wrap',
              gap: theme.custom.spacing.lg,
            }}
          >
            {footerCols.map((col, i) => (
              <div key={i}>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {col.title}
                </Typography>
                {col.links.map((link, j) =>
                  col.title.toLowerCase() === 'contact us' ? (
                    <Typography
                      onClick={() => window.open(link.link, '_blank')}
                      key={j}
                      sx={{ cursor: 'pointer' }}
                    >
                      {link.label}
                    </Typography>
                  ) : (
                    <div key={j}>
                      <Typography component='a' href={link.link}>
                        {link.label}
                      </Typography>
                    </div>
                  )
                )}
              </div>
            ))}
          </Box>
        </Box>
        <Divider variant='middle' sx={{ alignSelf: 'stretch' }} />
        <Typography
          sx={{
            color: theme.palette.grey[700],
            whiteSpace: 'nowrap',
            minWidth: 'max-content',
          }}
        >
          © 2022 Designed by: J. Befán - All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
