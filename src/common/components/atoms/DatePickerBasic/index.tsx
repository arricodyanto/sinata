import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DateField, DatePicker, DatePickerProps, LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';

type TDatePickerBasicProps = {
    disabled?: boolean
    label?: string
}

export default function DatePickerBasic(props: TDatePickerBasicProps & DatePickerProps<Dayjs>) {
    const { 
      disabled,
      label,
      ...datepickerProps
    } = props
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker disabled={disabled} label={label} format='DD/MM/YYYY' {...datepickerProps} sx={{
              '& .MuiOutlinedInput-root': { 
                '&:hover fieldset': { borderColor: '#0ea5e9',},
              },
              '& .MuiInputBase-root': {
                fontSize: 14
              },
              '& .Mui-disabled': {
                '&:hover fieldset': { borderColor: '#bfc0c2' },
                backgroundColor: '#fafafa' 
              }
            }} slotProps={{ textField: { size: 'small' }}}/>
        </LocalizationProvider>
    </>
  )
}
