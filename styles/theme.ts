import { MantineProviderProps, MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blueish',
  colors: {
    blueish: ['#226093', '#7DA0C3'],
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
    headerH: 75,
    footerH: 170,
  },
}
