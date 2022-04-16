import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  footer: {
    backgroundColor: theme.colors.gray[0],
    padding: theme.spacing.sm,
    color: theme.colors.gray[6],
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },

  info: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
    },
  },

  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
  },

  logo: {
    maxWidth: '150px',
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  title: {
    fontWeight: 700,
    color: theme.colors.gray[7],
  },

  divider: {
    alignSelf: 'stretch',
  },
}))