import { TokenTypes } from '@/services/data-types';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export async function getPayload() {
  const tkn = Cookies.get('tkn');
  if (tkn) {
    const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
    const payload: TokenTypes = jwtDecode(jwtToken);
    return payload;
  } else {
    return null;
  }
}
