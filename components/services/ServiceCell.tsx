import { Box, styled, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface ServiceCellProps {
  title: string
  Icon: IconType
  children: React.ReactNode
}

const CustomTypography = styled(Typography, {
  shouldForwardProp: () => true,
})<{ weight?: number; size?: number | string }>(({ theme, weight, size }) => ({
  color: theme.palette.primary.main,
  fontWeight: weight && weight,
  fontSize: size && size,
}))

export const ServiceCell = ({ title, Icon, children }: ServiceCellProps) => {
  const theme = useTheme()

  const cellMotion = {
    rest: {
      scale: 1,
      transition: theme.custom.framerAnimation.standard,
    },
    hover: {
      scale: 1.05,
      transition: theme.custom.framerAnimation.standard,
    },
  }

  const iconMotion = {
    rest: {
      scale: 1,
      transition: theme.custom.framerAnimation.standard,
    },
    hover: {
      scale: 1.3,
      transition: theme.custom.framerAnimation.standard,
    },
  }

  return (
    <Box
      component={motion.div}
      initial='rest'
      whileHover='hover'
      animate='rest'
      variants={cellMotion}
      sx={{
        position: 'relative',
        padding: theme.custom.spacing.md,
        paddingTop: '80px',
        backgroundColor: theme.palette.grey[100],
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
    >
      <Box
        component={motion.div}
        variants={iconMotion}
        sx={{
          position: 'absolute',
          height: '100px',
          width: '100px',
          display: 'grid',
          placeItems: 'center',
          padding: theme.custom.spacing.md,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          top: '-50px',
          left: 'calc( 50% - 50px )',
        }}
      >
        {<Icon fontSize='50' color='white' />}
      </Box>
      <CustomTypography weight={700} size={theme.typography.h5.fontSize}>
        {title.toUpperCase()}
      </CustomTypography>
      <CustomTypography size={theme.typography.h6.fontSize}>
        {children}
      </CustomTypography>
    </Box>
  )
}
