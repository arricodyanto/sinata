import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'

type TTimelineUpdatesProps = {
  date: string,
  version: string,
  children?: React.ReactNode
}

export default function TimelineUpdates(props: TTimelineUpdatesProps) {
  const { date, version, children } = props
  return (
    <>
      <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]:{ flex: 0.2 }}} className='-mt-3'>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            {date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary'/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='body1' className='font-bold' color='primary'>{version}</Typography>
            {children}
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
}
