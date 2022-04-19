import { Card, useMantineTheme } from '@mantine/core'
import { motion } from 'framer-motion'

interface AOSCardProps {
  xfrom?: string
  yfrom?: string
  children: React.ReactNode
}

export const AOSCard = ({ xfrom, yfrom, children }: AOSCardProps) => {
  const theme = useMantineTheme()

  const cardVariants = {
    show: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: xfrom, y: yfrom },
  }

  return (
    <motion.div
      initial='hidden'
      variants={cardVariants}
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card p={theme.spacing.md} sx={{ backgroundColor: theme.colors.gray[1] }}>
        {children}
      </Card>
    </motion.div>
  )
}
