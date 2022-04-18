import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  hero: {
    position: 'relative',
    display: 'flex',
    height: '40vh',
  },

  heroLeft: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors[theme.primaryColor][0],
    clipPath: 'polygon(65% 0, 40% 100%, 0 100%, 0 0)',

    [theme.fn.largerThan('lg')]: {
      clipPath: 'polygon(60% 0, 40% 100%, 0 100%, 0 0)',
    },
  },

  textContainer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
    alignItems: 'center',
    left: '5%',
  },

  heroText: {
    lineHeight: 1,
    fontSize: 40,
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 25,
      fontWeight: 700,
    },
    [theme.fn.largerThan('lg')]: {
      fontSize: 55,
    },
  },

  heroImg: {
    filter: 'blur(2px)',
  },
}))
