import { MantineThemeOverride } from '@mantine/core'

export const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'purplish',
  colors: {
    purplish: ['#226093'],
  },
  defaultRadius: 0,
  other: {
    headerH: 50,
    footerH: 50,
  },
}
