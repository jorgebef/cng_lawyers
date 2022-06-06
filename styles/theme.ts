import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

declare module '@mui/material/styles' {
  interface Palette {
    extra: Palette['primary']
  }
  interface Theme {
    custom: {
      header: {
        height: string
      }
      footer: {
        height: string
      }
      spacing: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
      fontSizes: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
      }
      framerAnimation: {
        standard: Object
        infinite: Object
      }
    }
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    extra?: PaletteOptions['primary']
  }
  interface ThemeOptions {
    custom?: {
      header?: {
        height?: number
      }
      footer?: {
        height?: number
      }
      spacing?: {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
      }
      fontSizes?: {
        xs?: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
        xxl?: number
      }
      framerAnimation?: {}
    }
  }
}

export const theme = createTheme({
  shadows: Array(25).fill('none') as Shadows,
  palette: {
    primary: {
      main: '#226093',
    },
    secondary: {
      main: '#7DA0C3',
    },
    error: {
      main: '#FF4365',
    },
    extra: {
      main: '#FFBC42',
      light: '#FFCD70',
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          '& .MuiOutlinedInput-root:hover': {
            '& fieldset': {
              borderColor: '#226093',
            },
          },
        },
      },
    },
  },
  custom: {
    header: {
      height: 65,
    },
    footer: {
      height: 210,
    },
    spacing: {
      xs: 1.5,
      sm: 2,
      md: 3,
      lg: 6,
      xl: 10,
    },
    fontSizes: {
      xs: 12,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 36,
    },
    framerAnimation: {
      standard: { type: 'spring', damping: 24, stiffness: 280 },
    },
  },
})
