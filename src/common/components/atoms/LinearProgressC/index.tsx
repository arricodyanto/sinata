import { Box, LinearProgress, LinearProgressProps, Typography } from '@mui/material';
import React from 'react';

type TLinearProgressCProps = {
  value: number;
};

export default function LinearProgressC(props: TLinearProgressCProps & Partial<LinearProgressProps>) {
  const {
    value
  } = props;
  return (
    <Box className='w-full'>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box className='w-full mr-1'>
          <LinearProgress variant="determinate" sx={{ height: 8, borderRadius: '10px', opacity: '0.75', ':hover': { height: 9, opacity: '0.85' } }} {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
