import { Box, styled, Typography, useTheme } from '@mui/material'

interface ServiceCellProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

const CustomTypography = styled(Typography, {
  shouldForwardProp: () => true,
})<{ weight?: number; size?: number | string }>(({ theme, weight, size }) => ({
  color: theme.palette.primary.main,
  fontWeight: weight && weight,
  fontSize: size && size,
}))

export const ServiceCell = ({ title, icon, children }: ServiceCellProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        padding: theme.custom.spacing.md,
        paddingTop: '80px',
        backgroundColor: theme.palette.grey[100],
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: '120px',
          width: '120px',
          display: 'grid',
          placeItems: 'center',
          padding: theme.custom.spacing.md,
          borderRadius: '50%',
          backgroundColor: theme.palette.primary.main,
          top: '-60px',
          left: 'calc( 50% - 60px )',
        }}
      >
        {icon}
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
