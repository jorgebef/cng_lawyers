import {
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  useTheme,
} from '@mui/material'
import { CheckCircleOutlineRounded } from '@mui/icons-material'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'

interface Item {
  subheader: string
  contentList: string[]
}

interface ServiceTimelineProps {
  itemArr: Item[]
}

export const ServiceTimeline = ({ itemArr }: ServiceTimelineProps) => {
  const theme = useTheme()

  const TimelineItems = itemArr.map(({ subheader, contentList }) => (
    <TimelineItem
      sx={{
        '&::before': {
          maxWidth: 0,
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot color='primary' variant='filled' />
        <TimelineConnector sx={{ py: theme.custom.spacing.xl }} />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          px: 0,
        }}
      >
        <List
          dense
          subheader={
            <ListSubheader
              sx={{
                fontSize: theme.typography.h5.fontSize,
                color: theme.palette.primary.main,
                fontWeight: 900,
                textAlign: 'left',
              }}
            >
              {subheader.toUpperCase()}
            </ListSubheader>
          }
          sx={{
            fontWeight: 500,
            color: theme.palette.primary.main,
          }}
        >
          {contentList.map((contentItem, i) => {
            return (
              <ListItem key={i}>
                <ListItemIcon sx={{ minWidth: 0, marginRight: '10px' }}>
                  <CheckCircleOutlineRounded
                    sx={{ color: theme.palette.primary.main }}
                  />
                </ListItemIcon>
                {contentItem}
              </ListItem>
            )
          })}
        </List>
      </TimelineContent>
    </TimelineItem>
  ))

  return <Timeline>{TimelineItems}</Timeline>
}
