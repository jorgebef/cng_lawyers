import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    height: '55vh',
    backgroundColor: theme.colors[theme.primaryColor][0],

    [theme.fn.smallerThan('md')]: {
      height: '45vh',
    },

    [theme.fn.smallerThan('sm')]: {
      height: '40vh',
    },
  },

  heroContainer: {
    position: 'relative',
    display: 'flex',
    maxWidth: theme.breakpoints.xl,
  },

  heroLeft: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    width: '40%',
    height: '100%',
  },

  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing.md,
    alignItems: 'center',
    padding: theme.spacing.xs,
  },

  heroText: {
    lineHeight: 1.1,
    fontSize: 55,
    fontWeight: 900,

    [theme.fn.smallerThan('lg')]: {
      fontSize: 45,
    },

    [theme.fn.smallerThan('sm')]: {
      fontSize: 35,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
    },
  },

  imgContainer: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    paddingLeft:'100px',
    clipPath: 'polygon(100% 0, 70% 100%, 25% 100%, 55% 0)',

    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      opacity: 0.4,
      backgroundColor: theme.colors[theme.primaryColor][0],
    },
  },

  otherLogos: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: 'repeat(2,1fr)',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    height: '9vh',
    maxWidth: '20vw',
  },
}))
