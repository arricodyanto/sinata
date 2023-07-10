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
