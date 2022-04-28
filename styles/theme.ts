import { MantineThemeOverride } from '@mantine/core'
import { createTheme, ThemeProvider, styled } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

export const mantineTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blueish',
  colors: {
    blueish: ['#226093', '#7DA0C3'],
    red: [
      '#FF4365',
      '#FF4365',
      '#FF4365',
      '#FF4365',
      '#FF4365',
      '#FF4365',
      '#FF4365',
    ],
    // red:['#ED254E','#ED254E','#ED254E','#ED254E','#ED254E','#ED254E','#ED254E'],
    // red:['#D64550','#D64550','#D64550','#D64550','#D64550','#D64550','#D64550'],
  },
  spacing: {
    lg: 28,
    xl: 40,
  },
  fontSizes: {
    lg: 20,
    xl: 26,
  },
  defaultRadius: 'md',
  other: {
    headerH: 65,
    footerH: 170,
  },
  fontFamily: 'Roboto',
}

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
    extra: {
      main: '#495810',
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
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
