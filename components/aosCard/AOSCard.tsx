import { Card, useMantineTheme } from '@mantine/core'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

export const AOSCard = () => {
  const theme = useMantineTheme()
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  const cardVariants = {
    show: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: '-100%' },
  }

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={cardVariants}
      animate={controls}
    >
      <Card shadow='sm' p={theme.spacing.md} ref={null}>
        TESTING
      </Card>
    </motion.div>
  )
}
