import { TokenTypes } from '@/services/data-types';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

export async function authRole(tkn: string) {
	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: TokenTypes = jwtDecode(jwtToken);
	if (payload.account.role === 'User') {
		return {
			redirect: {
				destination: '/users',
				permanent: false,
			},
		};
	} else if (payload.account.role !== 'User') {
		return {
			redirect: {
				destination: '/admins',
				permanent: false,
			},
		};
	}
}

export async function authAdmin(tkn: string) {
	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: TokenTypes = jwtDecode(jwtToken);
	if (
		payload.account.role === 'Super Admin' ||
		payload.account.role === 'Admin Role 1' ||
		payload.account.role === 'Admin Role 2' ||
		payload.account.role === 'Admin Role 3' ||
		payload.account.role === 'Admin Role 4' ||
		payload.account.role === 'Admin Role 5' ||
		payload.account.role === 'Admin Role 6' ||
		payload.account.role === 'Admin Role 7' ||
		payload.account.role === 'Admin Role 8' ||
		payload.account.role === 'Admin Role 9'
	) {
		return {
			props: {
				user: payload,
			},
		};
	}
	return {
		redirect: {
			destination: '/401',
			permanent: false,
		},
	};
}

export async function authUser(tkn: string) {
	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: TokenTypes = jwtDecode(jwtToken);
	if (payload.account.role !== 'User') {
		return {
			redirect: {
				destination: '/401',
				permanent: false,
			},
		};
	}
	return {
		props: {
			user: payload,
		},
	};
}

export async function authAddData(tkn: string) {
	if (!tkn) {
		return {
			redirect: {
				destination: '/sign-in',
				permanent: false,
			},
		};
	}

	const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
	const payload: TokenTypes = jwtDecode(jwtToken);
	if (
		payload.account.role === 'Super Admin' ||
		payload.account.role === 'Admin Role 2'
	) {
		return {
			props: {
				user: payload,
			},
		};
	} else {
		return {
			props: {
				error: true,
			},
		};
	}
}
