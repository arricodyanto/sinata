import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicLineChart from '../../atoms/BasicLineChart'

type TFlowCardProps = {
    color?: string
    icon?: React.ReactNode 
    text?: string
    lineColor: string
    data: { x: string; y: number }[]
    headline: string
}

export default function FlowCard(props: TFlowCardProps) {
    const { color, icon, text, lineColor, data, headline } = props
  return (
    <>
        <Paper className='p-6 h-40 shadow-md rounded-xl' sx={{ bgcolor: `${color}`, color: `${text}`}}>
            <Stack spacing={1} direction='row' className='h-16'>
                <Box className='w-full'>
                    {icon}
                </Box>
                <Box className='-translate-y-10 xs:w-1/2 md:w-full lg:w-1/2'>
                    <BasicLineChart lineColor={lineColor} data={data} />
                </Box>
            </Stack>
            <Stack>
                <Typography variant='subtitle1' color='text.secondary' className='leading-4 capitalize'>{headline}</Typography>
                <Typography variant='h6' color='text.primary'>{data.map(item => item.y).reduce((prev, next) => prev + next)}</Typography>
            </Stack>
        </Paper>
    </>
  )
}
