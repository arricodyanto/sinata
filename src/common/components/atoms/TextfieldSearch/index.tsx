import React from 'react'
import { TextField, InputAdornment, TextFieldProps } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function TextfieldSearch(props: Partial<TextFieldProps>) {
  const { ...textfieldProps } = props
  return (
    <>
        <TextField { ...textfieldProps } className='-translate-x-1' id='search' label='Cari' variant='outlined' fullWidth placeholder='Masukkan kata kunci' size='small' InputProps={{
            style: {fontSize: 14}, startAdornment: (<InputAdornment position='start'><SearchOutlinedIcon /></InputAdornment>) 
        }} sx={{
          '& .MuiOutlinedInput-root': { 
            '&:hover fieldset': { borderColor: '#0ea5e9',}
            }, 
          '& .Mui-disabled': {
                  '&:hover fieldset': { borderColor: '#bfc0c2' },
              backgroundColor: '#fafafa' 
              }
        }} />
    </>
  )
}
