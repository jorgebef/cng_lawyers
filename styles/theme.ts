import { MantineThemeOverride } from '@mantine/core'
import { createTheme, ThemeProvider, styled } from '@mui/material'

export const theme: MantineThemeOverride = {
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
    }
  }
}

export const muiTheme = createTheme({
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
  custom: {
    header: {
      height: 65,
    },
    footer: {
      height: 170,
    },
  },
})
