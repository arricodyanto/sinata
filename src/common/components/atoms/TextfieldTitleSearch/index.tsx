import React from 'react'
import { FormControl, FormLabel, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface TextfieldTitleSearchProps {
    label?: string
    name?: string
}

export default function TextfieldTitleSearch(props: TextfieldTitleSearchProps & Partial<TextFieldProps>) {
    const {
        label,
        name,
        ...textfieldProps
    } = props
  return ( 
    <FormControl className='w-full mb-4'>
        <FormLabel className='mb-1 text-sm'>
            {label}
        </FormLabel>
        <TextField { ...textfieldProps } name={name} variant='outlined' size='small' InputLabelProps={{ style: { fontSize: 14 }}}
            inputProps={{ style: { fontSize: 14 } }} sx={{
                '& .MuiOutlinedInput-root': { 
                    '&:hover fieldset': { borderColor: '#0ea5e9',}
                    }, 
                '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#fafafa' 
                    }
            }} InputProps={{ endAdornment: (<InputAdornment position='end'><SearchOutlinedIcon /></InputAdornment>) }}
        />
    </FormControl>
  )
}
