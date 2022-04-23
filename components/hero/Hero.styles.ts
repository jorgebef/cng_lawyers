import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    height: '50vh',
    backgroundColor: theme.colors[theme.primaryColor][0],

    [theme.fn.smallerThan('md')]: {
      height: '45vh',
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
    width: '52%',
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
    padding: theme.spacing.xl,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.xs,
    },
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
      fontSize: 30,
    },
  },

  imgContainer: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    marginLeft: '30vh',
    clipPath: 'url(#myCurve)',

    [theme.fn.smallerThan('md')]: {
      marginLeft: '18vh',
      marginRight: '-5vh',
    },

    [theme.fn.smallerThan('sm')]: {
      marginLeft: '12vh',
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
