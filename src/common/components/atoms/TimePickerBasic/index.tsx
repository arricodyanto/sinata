import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker, LocalizationProvider, TimePickerProps, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function TimePickerBasic(props: TimePickerProps<Dayjs>) {
    const { ...timepickerProps } = props
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker format='HH:mm' { ...timepickerProps } sx={{
              '& .MuiOutlinedInput-root': { 
                '&:hover fieldset': { borderColor: '#0ea5e9',}
              },
              '& .MuiInputBase-root': {
                  fontSize: 14
              },
              '& .Mui-disabled': {
                  '&:hover fieldset': { borderColor: '#bfc0c2' },
                  backgroundColor: '#fafafa' 
              }
            }} slotProps={{ textField: { size: 'small' } }} />
        </LocalizationProvider>
    </>
  )
}
