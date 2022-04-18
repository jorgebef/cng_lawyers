import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    position: 'relative',
    display: 'flex',
    height: '40vh',
    margin: `-${theme.spacing.xl}px -${theme.spacing.md}px 2em`,
  },

  heroLeft: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors[theme.primaryColor][0],
    clipPath: 'polygon(65% 0, 40% 100%, 0 100%, 0 0)',
  },

  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing.md,
    width: '50%',
    alignItems: 'center',
    padding: theme.spacing.xs,
  },

  heroText: {
    lineHeight: 1.1,
    fontSize: 50,
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 35,
      fontWeight: 700,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
      fontWeight: 700,
    },
  },

  imgContainer: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',

    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: '""',
      opacity: 0.4,
      backgroundColor: theme.colors[theme.primaryColor][0],
    },
  },

  heroImg: {
    // filter: 'blur(2px)',
  },
}))
