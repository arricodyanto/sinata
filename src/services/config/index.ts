import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
}

export default async function callAPI({
  url,
  method,
  data,
  token,
}: CallAPIProps) {
  let headers = {};

  if (token) {
    const tokenCookies = Cookies.get('tkn');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      status: response.status,
      message: response.data.message,
      page: undefined,
      totalPage: undefined,
      totalRow: undefined,
      rowsPerPage: undefined,
      data: null,
    };
    return res;
  } else {
    const res = {
      error: false,
      status: response.status,
      message: response.data.message,
      page: response.data.page || undefined,
      totalPage: response.data.totalPage || undefined,
      totalRow: response.data.totalRow || undefined,
      rowsPerPage: response.data.rowsPerPage || undefined,
      data: response.data.data,
    };
    return res;
  }
}
