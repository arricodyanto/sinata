import TextfieldIcon from '@/common/components/atoms/TextfieldIcon';
import TextfieldPass from '@/common/components/atoms/TextfieldPass';
import { getRoleToken } from '@/common/utils/decodeToken.util';
import { delay } from '@/common/utils/delay.util';
import { setSignIn } from '@/services/auth';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignInForm() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const handleFormChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	const onSubmit = async () => {
		setIsLoading(true);
		try {
			const formData = { email, password };
			if (formData.email === '' || formData.password === '') {
				toast.error('Masukkan email dan kata sandi Anda.', {
					theme: 'colored'
				});
			}

			const response = await setSignIn(formData);
			if (response.error === true) {
				if (formData.email !== '' && formData.password !== '') {
					toast.error(response.message, {
						theme: 'colored',
					});
				}
			}
			if (response.error === false) {
				const role = getRoleToken(response.data);
				const uglyString = btoa(response.data);
				Cookies.set('tkn', uglyString, { expires: 1 });

				toast.success('Sign in berhasil', {
					theme: 'colored'
				});
				delay(1500);

				if (role === 'User') {
					router.push('/users');
				} else {
					router.push('/admins');
				}
			}
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<form>
			<Box className='mt-9'>
				<TextfieldIcon label='Alamat Email' value={email} onChange={handleFormChange(setEmail)} icon={<EmailIcon />} placeholder='hello@yourmail.com' className='mb-6' />
				<TextfieldPass label='Kata Sandi' value={password} onChange={handleFormChange(setPassword)} icon={<KeyIcon />} placeholder='Masukkan kata sandi Anda' />
				<Grid container>
					<Grid item xs={7}>
						<FormControlLabel className='pl-1' control={<Checkbox size='small' />} label={<Typography sx={{ fontSize: { xs: '12px', sm: '14px' } }}>Remember me</Typography>} />
					</Grid>
					<Grid item xs={5}>
						<Link href='/'>
							<Typography sx={{ textAlign: 'right' }} className='pt-[11px] text-gray-400 text-xs' variant='body2'>Forgot password?</Typography>
						</Link>
					</Grid>
				</Grid>
				{!isLoading ? (
					<Button type='submit' onClick={onSubmit} variant='contained' color='primary' className='mt-4' fullWidth>Sign in</Button>
				) : (
					<LoadingButton loading={isLoading} type='submit' onClick={onSubmit} variant='contained' color='primary' className='mt-4' fullWidth>Sign in</LoadingButton>
				)}
			</Box>
		</form>
	);
}
