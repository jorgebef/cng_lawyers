import { Box, Container, Divider, Typography } from '@mui/material'
import { theme } from '../../styles/theme'

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
    ],
  },
  {
    title: 'About us',
    links: [
      { label: 'XXXXX', link: '/contact' },
      { label: 'XXXXXXX', link: '/contact' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Follow on Instagram', link: '/contact' },
      { label: 'Email newsletter', link: '/contact' },
    ],
  },
]

export const Footer = () => {

  return (
    <Box
      component='footer'
      sx={{
        height: theme.custom.footer.height,
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
              <img
                alt='CNG Lawyers logo'
                src='/logo.svg'
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
                {col.links.map((link, j) => (
                  <Typography key={j}>{link.label}</Typography>
                ))}
              </div>
            ))}
          </Box>
        </Box>
        <Divider variant='middle' sx={{ alignSelf: 'stretch' }} />
        <Typography
          sx={{
            color: theme.palette.grey[700],
          }}
        >
          © 2022 Designed by: J. Befán - All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
