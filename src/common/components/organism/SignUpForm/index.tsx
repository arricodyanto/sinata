import TextfieldIcon from '@/common/components/atoms/TextfieldIcon';
import TextfieldPass from '@/common/components/atoms/TextfieldPass';
import { delay } from '@/common/utils/delay.util';
import { setSignUp } from '@/services/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function SignUpForm() {
	const router = useRouter();
	const [checked, setChecked] = React.useState(false);
	const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleFormChange =
		(setState: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setState(event.target.value);
		};

	const onSubmit = async () => {
		const formData = { username, name, email, password };

		if (
			formData.username === '' ||
			formData.name === '' ||
			formData.email === '' ||
			formData.password === ''
		) {
			toast.error('Harap isi semua form pendaftaran.', {
				theme: 'colored',
			});
		}
		const response = await setSignUp(formData);
		if (response.error === true) {
			toast.error(response.message, {
				theme: 'colored',
			});
		}
		if (response.error === false) {
			toast.success(
				'Pendaftaran berhasil! \nMohon tunggu, Anda akan diarahkan ke halaman Sign In.',
				{
					theme: 'colored',
				},
			);
			await delay(2000);
			router.push('/sign-in');
		}
	};
	return (
		<Box className='mt-9'>
			<TextfieldIcon
				label='Nama Pengguna'
				value={username}
				onChange={handleFormChange(setUsername)}
				icon={<AlternateEmailIcon />}
				placeholder='johndoe'
				className='mb-6'
			/>
			<TextfieldIcon
				label='Nama Lengkap'
				value={name}
				onChange={handleFormChange(setName)}
				icon={<AccountCircleIcon />}
				placeholder='John Doe'
				className='mb-6'
			/>
			<TextfieldIcon
				label='Alamat Email'
				value={email}
				onChange={handleFormChange(setEmail)}
				icon={<EmailIcon />}
				placeholder='johndoe@yourmail.com'
				className='mb-6'
			/>
			<TextfieldPass
				label='Kata Sandi'
				value={password}
				onChange={handleFormChange(setPassword)}
				icon={<KeyIcon />}
				placeholder='Masukkan Kata Sandi Anda'
			/>
			<FormControlLabel
				className='pl-1 mt-4'
				sx={{ alignItems: 'flex-start' }}
				control={
					<Checkbox
						size='small'
						sx={{ marginTop: -1 }}
						checked={checked}
						onChange={handleChecked}
					/>
				}
				label={
					<Typography
						variant='caption'
						className='text-gray-500'>
						dengan mencentang kolom ini, berarti anda setuju dengan syarat dan
						aturan yang berlaku
					</Typography>
				}
			/>
			<Button
				variant='contained'
				onClick={onSubmit}
				disabled={!checked}
				fullWidth
				color='primary'
				className='mt-4 mb-1'>
				Register
			</Button>
		</Box>
	);
}
