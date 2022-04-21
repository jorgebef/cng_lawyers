import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  navbar: {
    position:'fixed',
    padding: `0 ${theme.spacing.md}px`,
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

  burger: {
    zIndex: 99,
    transition: 'ease-in-out 200ms',

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
    // textAlign: 'center',
    cursor: 'pointer',
    color: theme.colors.gray[8],
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
    // width: '100%',
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
