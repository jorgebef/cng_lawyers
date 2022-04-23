import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    height: '50vh',
    backgroundColor: theme.colors[theme.primaryColor][0],
    overflow: 'hidden',

    [theme.fn.smallerThan('md')]:{
    height: '45vh',
    }
  },

  heroContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    maxWidth: theme.breakpoints.xl,
    width: '100%',
  },

  heroLeft: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    alignItems: 'center',
    width: '70%',
    height: '100%',
  },

  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.xs,
    },
  },

  heroText: {
    lineHeight: 1.1,
    fontSize: 55,
    fontWeight: 900,

    [theme.fn.smallerThan('lg')]: {
      fontSize: 40,
    },
  },

  imgContainer: {
    position: 'absolute',
    display: 'flex',
    overflow: 'hidden',
    height: '100%',
    clipPath: 'url(#myCurve)',

    [theme.fn.largerThan('md')]: {
      alignSelf: 'center',
      minHeight: '650px',
    },

    [theme.fn.smallerThan('md')]: {
      right: '-20vw',
    },

    [theme.fn.smallerThan('sm')]: {
      left: '25vw',
      right: '-35vw',
    },

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
    marginTop: theme.spacing.md,
    width: '20vw',
    maxWidth: '150px',
  },
}))
