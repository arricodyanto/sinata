import { TTextfieldFileProps } from '@/common/types/textfield'
import { FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'

export default function TextfieldFile(props: TTextfieldFileProps) {
    const {
        label
    } = props
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const [fileName, setFileName] = React.useState('');

    const handleFileInputChange = () => {
        if (inputRef.current) {
        const file = inputRef.current.files?.[0];
        setFileName(file?.name || '');
        }
    }
  return (
        <FormControl className='w-full mb-4'>
            <FormLabel className='mb-1 text-sm'>
                {label}
            </FormLabel>
            <TextField fullWidth {...props} variant='outlined' size='small' type='file' label='' ref={inputRef} onChange={handleFileInputChange} inputProps={{style: {fontSize: 14, height: 25 } }} sx={{
                '& .MuiOutlinedInput-root': { 
                    '&:hover fieldset': { borderColor: '#0ea5e9',}
                    }, 
                '& .Mui-disabled': {
                        '&:hover fieldset': { borderColor: '#bfc0c2' },
                    backgroundColor: '#fafafa' 
                    }
                }} InputLabelProps={{ style: {fontSize: 14}}}/>
        </FormControl>
  )
}
