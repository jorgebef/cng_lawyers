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
        lg: number
        xl: number
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
        lg?: number
        xl?: number
      }
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
      main: '#495810',
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
      height: 170,
    },
    spacing: {
      xs: 1.5,
      sm: 2,
      md: 3,
      lg: 6,
      xl: 10,
    },
    fontSizes: {
      lg: 20,
      xl: 26,
    },
  },
})
