import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  navbar: {
    position: 'fixed',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  logoContainer: {
    display: 'flex',
    position: 'relative',
    padding: `5px 0`,
    height: theme.other.headerH,
    maxWidth: '150px',
    cursor: 'pointer',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  smButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.xs,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    zIndex: 99,
    transition: 'ease-in-out 200ms',
  },

  contactBtn: {
    fontSize: theme.fontSizes.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,

    '&:hover': {
      backgroundColor: theme.colors.gray[2],
    },

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.white,
    },
  },

  dropdown: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    padding: theme.spacing.md,
    height: `calc(100vh - ${theme.other.headerH}px)`,
    top: theme.other.headerH,
    left: 0,
    right: 0,
    zIndex: 90,
    border: 0,
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: 'white',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))
