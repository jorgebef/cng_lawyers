import { Button, ButtonProps, useTheme } from '@mui/material'

export const ContactButton = ({
  children,
  btnFontSize,
  ...rest
}: ButtonProps & { btnFontSize: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const theme = useTheme()

  return (
    <Button
      {...rest}
      sx={{
        color: theme.palette.primary.main,
        px: theme.custom.spacing.xs,
        backgroundColor: theme.palette.extra.main,
        fontSize: {
          xs: theme.custom.fontSizes.xs,
          sm:
            btnFontSize === 'sm'
              ? theme.typography.body2.fontSize
              : btnFontSize === 'md'
              ? theme.typography.body1.fontSize
              : btnFontSize === 'lg'
              ? theme.custom.fontSizes.lg
              : theme.custom.fontSizes.xxl,
        },
        ':hover': {
          backgroundColor: theme.palette.extra.light,
        },
      }}
    >
      {children}
    </Button>
  )
}
