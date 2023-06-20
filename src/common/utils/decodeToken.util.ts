import { TokenTypes } from '@/services/data-types';
import jwtDecode from 'jwt-decode';

export function decodeToken(token: string) {
  const value = jwtDecode(token);
  return value;
}

export function getRoleToken(token: string) {
  const value: TokenTypes = jwtDecode(token);
  return value.account.role;
}
