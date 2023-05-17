import { Box, Button, Checkbox, FormControlLabel, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import TextfieldIcon from '../../atoms/TextfieldIcon'
import TextfieldPass from '../../atoms/TextfieldPass'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { useForm, Controller } from 'react-hook-form'

interface IFormLogin {
  email: string
  password: string
}

// const onSubmit: SubmitHandler<IFormLogin> = data => console.log(data);

export default function SignInForm () {
  const { control, formState: { errors }, handleSubmit } = useForm<IFormLogin>();
  const onSubmit = (data: IFormLogin) => {
    localStorage.setItem('loginInfo', JSON.stringify(data))
    window.location.href = '/users/dashboard';
    // console.log(data)
    // redirect('/users/dashboard')
    
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className='mt-9'>
          <Controller name='email' control={control} rules={{ 
            required: 'Masukkan alamat email Anda',
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Format alamat email Anda salah'
            }  
          }} render={({ field }) => (
            <TextfieldIcon label='Alamat Email' icon={<EmailIcon />} placeholder='hello@yourmail.com'
              autoFocus {...field}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
              className='mb-6'
            />
          )} />
          <Controller name='password' control={control} rules={{
            required: 'Masukkan kata sandi Anda',
            minLength: {
              value: 8,
              message: 'Kata sandi minimal 8 karakter'
            } 
          }} render={({ field }) => (
            <TextfieldPass icon={<KeyIcon />} label='Kata Sandi' placeholder='Masukkan kata sandi Anda'
              autoFocus {...field}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
          )} />
          <Grid container>
              <Grid item xs={7}>
                  <FormControlLabel className='pl-1' control={<Checkbox size='small'/>} label={<Typography sx={{ fontSize: {xs: '12px', sm: '14px'}}}>Remember me</Typography>}/>
              </Grid>
              <Grid item xs={5}>
                  <Link href='/'>
                      <Typography sx={{textAlign: 'right'}} className='pt-[11px] text-gray-400 text-xs' variant='body2'>Forgot password?</Typography>
                  </Link>
              </Grid>
          </Grid>
          <Button type='submit' variant='contained' color='primary' className='mt-4' fullWidth>Sign in</Button>
        </Box>
      </form>
    </>
  )
}
