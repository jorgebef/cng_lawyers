import { Box, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

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

  const imgMotion = {
    rest: {
      scale: 1,
      transition: theme.custom.framerAnimation.standard,
    },
    hover: {
      scale: 1.1,
      transition: theme.custom.framerAnimation.standard,
    },
  }

  return (
    <Box
      component={motion.div}
      initial='rest'
      whileHover='hover'
      animate='rest'
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
      <Box
        sx={{
          borderRadius: `${theme.shape.borderRadius}px`,
          overflow: 'hidden',
        }}
      >
        <Box
          component={motion.img}
          src={img}
          alt={title}
          variants={imgMotion}
          loading='lazy'
          width='800'
          height='500'
          sx={{
            gridRow: 1,
            width: '100%',
            height: 'auto',
            zIndex: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          padding: theme.custom.spacing.md,
          zIndex: 9,
          borderTopLeftRadius: { xs: 0, md: theme.shape.borderRadius },
          borderTopRightRadius: { xs: 0, md: theme.shape.borderRadius },
          borderRadius: `${theme.shape.borderRadius}px`,
          // backgroundColor: theme.palette.primary.main,
          backgroundColor: theme.palette.grey[100],
          marginTop: { xs: '-5%', md: 0 },
          textAlign: 'left',
          // boxShadow: '0 10px 15px -3px #00000066',
          marginLeft: { xs: 0, md: align === 'left' ? '-20%' : 0 },
          // marginLeft: { xs: 0, md: align === 'left' ? '10%' : 0 },
          marginRight: { xs: 0, md: align === 'right' ? '-20%' : 0 },
          // marginRight: { xs: 0, md: align === 'right' ? '10%' : 0 },
        }}
      >
        <Typography
          // color='white'
          color={theme.palette.primary.main}
          fontWeight={700}
          fontSize={theme.custom.fontSizes.xxl}
          sx={{ paddingBottom: theme.custom.spacing.sm }}
        >
          {title.toUpperCase()}
        </Typography>
        {/* <Typography color='white' fontSize={theme.typography.h6.fontSize}> */}
        <Typography
          color={theme.palette.primary.main}
          fontSize={theme.custom.fontSizes.lg}
          fontWeight='400'
        >
          {children}
        </Typography>
      </Box>
    </Box>
  )
}
