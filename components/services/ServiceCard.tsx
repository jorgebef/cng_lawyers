import { Box, Text, useMantineTheme } from '@mantine/core'

interface ServiceCardProps {
  img: string
  title: string
  align: 'left' | 'right'
  children: React.ReactNode
}

export const ServiceCard = ({
  img,
  title,
  align,
  children,
}: ServiceCardProps) => {
  const theme = useMantineTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '4fr 3fr',
        alignItems: 'center',
        direction: align === 'left' ? 'ltr' : 'rtl',
        padding: theme.spacing.md,
        [theme.fn.smallerThan('md')]: {
          padding: theme.spacing.lg,
          gridTemplateColumns: '1fr',
        },
        [theme.fn.smallerThan('sm')]: {
          padding: 0,
        },
      }}
    >
      <img
        src={img}
        alt={title}
        loading='lazy'
        width='800'
        height='500'
        style={{
          borderRadius: theme.radius.md,
          gridRow: 1,
          width: '100%',
          height: 'auto',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          padding: theme.spacing.md,
          zIndex: 9,
          borderRadius: theme.radius.md,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          backgroundColor: theme.colors[theme.primaryColor][0],
          marginTop: '-5%',
          textAlign: 'left',
          boxShadow: '0 10px 15px -3px #00000066',

          [theme.fn.largerThan('md')]: {
            borderRadius: theme.radius.md,
            marginTop: 0,
            marginLeft: align === 'left' ? '-20%' : 0,
            marginRight: align === 'right' ? '-20%' : 0,
          },
        }}
      >
        <Text
          color='white'
          // color={theme.colors[theme.primaryColor][0]}
          weight={700}
          size='xl'
          sx={{ paddingBottom: theme.spacing.sm }}
        >
          {title.toUpperCase()}
        </Text>
        <Text
          color='white'
          // color={theme.colors[theme.primaryColor][0]}
          size='md'
        >
          {children}
        </Text>
      </Box>
    </Box>
  )
}
