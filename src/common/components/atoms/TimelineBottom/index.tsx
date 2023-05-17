import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function TimelineBottom() {
  return (
    <>
      <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]:{ flex: 0.2 }}} className='-mt-3'>
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
                11 Jan, 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'/>
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='body1' className='font-bold' color='primary'>
                    v1.0.0
                </Typography>
                <li>- Deploy App to Github</li>
                <li>- Add mb to login, register page</li>
                <li>- Add redirect button to login, register page</li>
            </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
}
