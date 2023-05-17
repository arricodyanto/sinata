import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'

type TTextfieldProps = {
    icon?: React.ReactNode
}

export default function TextfieldPass(props: TTextfieldProps & Partial<TextFieldProps>) {
    const {
        icon,
        ...textfieldProps
    } = props
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }
  return (
    <>
        
        <TextField fullWidth {...textfieldProps} type={showPassword ? 'text' : 'password'} InputProps={{ startAdornment: (
            <InputAdornment position='start'>{icon}</InputAdornment>
            ), endAdornment: (
            <InputAdornment position='end'>
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
            )}} variant='outlined' size='small' inputProps={{style: {fontSize: 14}}} className='mb-4' sx={{
                '& .MuiOutlinedInput-root': { 
                    '&:hover fieldset': { borderColor: '#0ea5e9',}
                    }, 
                '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#fafafa' 
                    }
            }}/>
    </>
  )
}
