import React from 'react'
import { DateField, DateFieldProps, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';

export default function DateFieldBasic(props: DateFieldProps<Dayjs>) {
    const {
        ...datefieldProps
    } = props
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField format='DD/MM/YYYY' { ...datefieldProps } sx={{
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
  )
}
