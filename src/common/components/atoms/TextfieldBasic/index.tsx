import React from 'react'
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material'

export default function TextfieldBasic(props: TextFieldProps) {
    const {
        ...textfieldProps
    } = props
  return (
    <>
        <TextField className='mb-6' fullWidth {...textfieldProps} variant='outlined' size='small' inputProps={{style: {fontSize: 14}}} sx={{'& .MuiOutlinedInput-root': { '&:hover fieldset': { borderColor: '#0ea5e9',}}}} InputLabelProps={{ style: {fontSize: 14}}}/>
    </>
  )
}
