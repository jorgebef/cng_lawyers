// import { Blockquote, Card, useMantineTheme } from '@mantine/core'
import { FormatQuoteRounded } from '@mui/icons-material'
import { Box, Card, Typography, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

interface AOSCardProps {
  xfrom?: string
  yfrom?: string
  cite?: string
  children: React.ReactNode
}

export const AOSCardQuote = ({
  xfrom,
  yfrom,
  cite,
  children,
}: AOSCardProps) => {
  // const theme = useMantineTheme()
  const theme = useTheme()

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
      transition={theme.custom.framerAnimation.standard}
    >
      <Card
        sx={{
          padding: theme.custom.spacing.sm,
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.grey[600],
        }}
      >
        {/* <Typography cite={cite} sx={{ width:'100%', color: theme.colors.gray[7] }}> */}
        <Box
          sx={{
            display: 'flex',
            gap: theme.custom.spacing.xs,
          }}
        >
          <FormatQuoteRounded sx={{ fontSize: theme.typography.h4.fontSize }} />
          <Typography
            fontSize={theme.typography.h6.fontSize}
            sx={{
              width: '100%',
            }}
          >
            {children}
          </Typography>
        </Box>
        <Typography
          color={theme.palette.grey[500]}
          sx={{
            marginTop: theme.custom.spacing.xs,
            width: '100%',
            textAlign: 'right',
          }}
        >
          {cite}
        </Typography>
      </Card>
    </motion.div>
  )
}
