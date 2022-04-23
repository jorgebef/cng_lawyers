import { Box, Text, useMantineTheme } from '@mantine/core'

interface ServiceCellProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

export const ServiceCell = ({ title, icon, children }: ServiceCellProps) => {
  const theme = useMantineTheme()

  return (
    <div
      style={{
        position: 'relative',
        padding: theme.spacing.xl,
        paddingTop: '80px',
        backgroundColor: theme.colors.gray[1],
        borderRadius: theme.radius.md,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: '120px',
          width: '120px',
          padding: theme.spacing.md,
          borderRadius: '50%',
          backgroundColor: theme.colors[theme.primaryColor][0],
          top: '-60px',
          left: 'calc( 50% - 60px )',
        }}
      >
        {icon}
      </Box>
      <Text color={theme.colors[theme.primaryColor][0]} weight={700} size='xl'>
        {title}
      </Text>
      <Text color={theme.colors[theme.primaryColor][0]} size='lg'>
        {children}
      </Text>
    </div>
  )
}
