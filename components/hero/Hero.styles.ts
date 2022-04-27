import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    height: '50vh',
    maxHeight: '550px',
    backgroundColor: theme.colors[theme.primaryColor][0],
    overflow: 'hidden',

    [theme.fn.smallerThan('md')]: {
      height: '45vh',
    },
  },

  heroContainer: {
    position: 'relative',
    display: 'flex',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    // maxWidth: theme.breakpoints.xl,
    width: '100%',
  },

  heroLeft: {
    // position: 'absolute',
    display: 'flex',
    left: 0,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  textContainer: {
    // position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing.md,
    alignItems: 'center',
    padding: theme.spacing.lg,
    zIndex:1,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.xs,
    },
  },

  heroText: {
    lineHeight: 1.1,
    fontSize: 55,
    fontWeight: 900,

    [theme.fn.smallerThan('md')]: {
      fontSize: 40,
    },
  },

  imgContainer: {
    // position: 'absolute',
    display: 'flex',
    overflow: 'hidden',
    height: '100%',
    clipPath: 'url(#myCurve)',
    marginLeft:'-100px',
    zIndex:0,

    [theme.fn.largerThan('md')]: {
      alignSelf: 'center',
      minHeight: '650px',
    },

    [theme.fn.smallerThan('md')]: {
      marginRight: '-120px',
    },

    [theme.fn.smallerThan('sm')]: {
      marginRight: '-160px',
    },

    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      content: '""',
      opacity: 0.4,
      backgroundColor: theme.colors[theme.primaryColor][0],
    },
  },

  otherLogos: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.md,
    width: '150px',
  },
}))
