import { TTextfieldLabelProps } from '@/common/types/textfield'
import { FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'

export default function TextfieldLabel(props: TTextfieldLabelProps) {
    const { 
        label,
        ...textfieldProps 
    } = props
  return (
    <>
        <FormControl className='w-full mb-4'>
            <FormLabel className='mb-1 text-sm'>
                {label}
            </FormLabel>
            <TextField fullWidth {...textfieldProps} variant='outlined' size='small' inputProps={{style: {fontSize: 14}}} sx={{
                '& .MuiOutlinedInput-root': { 
                    '&:hover fieldset': { borderColor: '#0ea5e9',}
                    }, 
                '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#fafafa' 
                    }
                }} InputLabelProps={{ style: {fontSize: 14}}}/>
        </FormControl>
    </>
  )
}
