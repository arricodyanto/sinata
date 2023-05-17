import { InputAdornment, TextField, TextFieldProps, MenuItem } from '@mui/material'
import React from 'react'

type TSelectBasicProps = {
    children?: React.ReactNode
}

export default function SelectBasic(props: TSelectBasicProps & Partial<TextFieldProps>) {
    const {
        children,
        ...textfieldProps
    } = props
  return (
    <TextField className='mb-6' select fullWidth size='small' InputProps={{ startAdornment: (
        <InputAdornment position='start'></InputAdornment>
    ), style: { fontSize: 14 }}} {...textfieldProps}>
        <MenuItem value='default' sx={{ display: 'none'}}>Silakan pilih salah satu</MenuItem>=
        {children}
    </TextField>
  )
}
