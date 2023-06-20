import axios, { AxiosRequestConfig } from 'axios';

export default async function callAPI({
  url,
  method,
  data,
}: AxiosRequestConfig) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (response.data.page) {
    if (response.status > 300) {
      const res = {
        error: true,
        message: response.data.message,
        page: undefined,
        totalPage: undefined,
        totalRow: undefined,
        rowsPerPage: undefined,
        data: null,
      };
      return res;
    }
  }

  const res = {
    error: false,
    message: response.data.message,
    page: response.data.page || undefined,
    totalPage: response.data.totalPage || undefined,
    totalRow: response.data.totalRow || undefined,
    rowsPerPage: response.data.rowsPerPage || undefined,
    data: response.data.data,
  };
  return res;
}
