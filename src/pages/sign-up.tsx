import { Box, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import ContainerPage from '../common/components/atoms/ContainerPage';
import CoverSide from '../common/components/molecules/CoverSide';
import HeaderBox from '../common/components/molecules/HeaderBox';
import SignUpForm from '../common/components/organism/SignUpForm';

export default function SignUp() {
	return (
		<>
			<Head>
				<title>Create a New Account - Sinata</title>
			</Head>
			<Box
				className='grid place-items-center bg-grey mt-4'
				sx={{ height: { xs: '100vh' } }}>
				<ContainerPage className='lg:max-w-[1000px]'>
					<Box
						gridColumn={2}
						className='border rounded-md bg-white shadow-sm'>
						<Grid
							container
							py={4}>
							<Grid
								item
								lg={6}
								md={6}
								px={4}>
								<HeaderBox
									header='Halo, Civitas Akademika!'
									subheader='Silakan melakukan proses pendaftaran untuk bisa melakukan ajuan pelayanan.'
								/>
								<SignUpForm />
								{/* <Box>
                                <GoogleButton />
                            </Box> */}
							</Grid>
							<Grid
								item
								lg={6}
								md={6}
								sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}
								className='-my-8 relative'>
								<CoverSide
									src='/images/auth-bg.jpg'
									sentence='"Every civitas can publish theirs here!"'
									subject='Public Relation UNS'
								/>
							</Grid>
						</Grid>
					</Box>
					<Box className='mt-4 mb-6'>
						<Typography
							variant='body2'
							className='text-gray-500 text-center'>
							Sudah memiliki akun?{' '}
							<Link
								href='/sign-in'
								className='text-sky-700 underline'>
								Sign in
							</Link>
						</Typography>
					</Box>
				</ContainerPage>
			</Box>
		</>
	);
}
