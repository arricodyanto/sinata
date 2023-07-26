import { TokenTypes } from '@/services/data-types';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';

export async function decryptToken() {
	const tkn = Cookies.get('tkn');
	if (tkn) {
		const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
		const payload: TokenTypes = jwtDecode(jwtToken);
		return payload;
	} else {
		return null;
	}
}

export function getPayloadData() {
	const [payload, setPayload] = useState<TokenTypes | null>(null);

	const getpayload = useCallback(async () => {
		const response = await decryptToken();
		if (response) {
			setPayload(response);
		}
	}, [decryptToken]);

	useEffect(() => {
		getpayload();
	}, []);

	return payload;
}

export function getAccountID() {
	let id_account: string | null = null;

	const getCookies = Cookies.get('tkn');
	if (getCookies) {
		const jwtToken = atob(getCookies);
		const payload: TokenTypes = jwtDecode(jwtToken);
		id_account = payload.account.id;
	}
	return id_account;
}

export function getAccountRole() {
	let role: string | null = null;

	const getCookies = Cookies.get('tkn');
	if (getCookies) {
		const jwtToken = atob(getCookies);
		const payload: TokenTypes = jwtDecode(jwtToken);
		role = payload.account.role;
	}
	return role;
}

export function getAccountFromPayload() {
	let userPayload: TokenTypes | null = null;
	const getCookies = Cookies.get('tkn');
	if (getCookies) {
		const jwtToken = atob(getCookies);
		const payload: TokenTypes = jwtDecode(jwtToken);
		userPayload = payload;
	}
	return userPayload;
}
