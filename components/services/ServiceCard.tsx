import { Box, Typography, useTheme } from '@mui/material'

interface ServiceCardProps {
  img: string
  title: string
  align: 'left' | 'right'
  children: React.ReactNode
}

export const ServiceCard = ({
  img,
  title,
  align,
  children,
}: ServiceCardProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '4fr 3fr' },
        alignItems: 'center',
        direction: align === 'left' ? 'ltr' : 'rtl',
        padding: {
          xs: 0,
          sm: theme.custom.spacing.lg,
          md: theme.custom.spacing.md,
        },
      }}
    >
      <img
        src={img}
        alt={title}
        loading='lazy'
        width='800'
        height='500'
        style={{
          borderRadius: theme.shape.borderRadius,
          gridRow: 1,
          width: '100%',
          height: 'auto',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          padding: theme.custom.spacing.md,
          zIndex: 9,
          borderTopLeftRadius: { xs: 0, md: theme.shape.borderRadius },
          borderTopRightRadius: { xs: 0, md: theme.shape.borderRadius },
          borderRadius: `${theme.shape.borderRadius}px`,
          backgroundColor: theme.palette.primary.main,
          marginTop: { xs: '-5%', md: 0 },
          textAlign: 'left',
          boxShadow: '0 10px 15px -3px #00000066',
          marginLeft: { xs: 0, md: align === 'left' ? '-20%' : 0 },
          marginRight: { xs: 0, md: align === 'right' ? '-20%' : 0 },
        }}
      >
        <Typography
          color='white'
          fontWeight={700}
          fontSize={theme.typography.h4.fontSize}
          sx={{ paddingBottom: theme.custom.spacing.sm }}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography color='white' fontSize={theme.typography.h6.fontSize}>
          {children}
        </Typography>
      </Box>
    </Box>
  )
}
