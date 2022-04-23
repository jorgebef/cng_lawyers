import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blueish',
  colors: {
    blueish: ['#226093', '#7DA0C3'],
    red:['#FF4365','#FF4365','#FF4365','#FF4365','#FF4365','#FF4365','#FF4365'],
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
  fontFamily: 'Roboto'
}
