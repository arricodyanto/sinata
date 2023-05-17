import { FormControl, FormLabel, InputAdornment, MenuItem, TextField, TextFieldProps } from '@mui/material'
import React from 'react'

interface SelectLabelProps {
    label?: string
    children?: React.ReactNode
}

export default function SelectLabel(props: SelectLabelProps & Partial<TextFieldProps>) {
    const {
        label,
        children,
        ...textfieldProps
    } = props
  return (
    <FormControl className='w-full mb-4'>
        <FormLabel className='mb-1 text-sm'>
            {label}
        </FormLabel>
        <TextField select fullWidth size='small' InputProps={{ style: { fontSize: 14 }}} {...textfieldProps} sx={{
            '& .MuiOutlinedInput-root': { 
                '&:hover fieldset': { borderColor: '#0ea5e9',}
                }, 
            '& .Mui-disabled': {
                    '&:hover fieldset': { borderColor: '#bfc0c2' },
                backgroundColor: '#fafafa' 
                }
        }}>
            <MenuItem value='default' sx={{ display: 'none'}}>Silakan pilih salah satu</MenuItem>=
            {children}
        </TextField>
    </FormControl>
  )
}
