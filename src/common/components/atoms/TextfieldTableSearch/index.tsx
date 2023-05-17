import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'
import { TTextfieldTableSearchProps } from '@/common/types/textfield';

export default function TextfieldTableSearch(props: TTextfieldTableSearchProps) {
    const { 
        getValue,
        ...textfieldProps
    } = props
    const [search, setSearch] = React.useState<string>('')
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        getValue(event.target.value)
    }
    const handleClear = () => {
        setSearch('')
        getValue('')
    }
  return (
        <TextField variant='outlined' size='small' {...props} value={search} onChange={handleSearch} inputProps={{style: {fontSize: 14}}} sx={{
            '& .MuiOutlinedInput-root': { 
                '&:hover fieldset': { borderColor: '#0ea5e9',},
                borderRadius: '5rem'
            }, 
            '& .Mui-disabled': {
                    '&:hover fieldset': { borderColor: '#bfc0c2' },
                backgroundColor: '#fafafa' 
            },
            width: '250px'
            }} InputLabelProps={{ style: {fontSize: 14}}}
            InputProps={{ endAdornment: (
                <InputAdornment position='end'>
                    {search !== '' && <IconButton size='small' onClick={handleClear}><CloseIcon fontSize='small' /></IconButton>}
                    <SearchOutlinedIcon fontSize='small' />
                </InputAdornment>) }}
        />  )
}
