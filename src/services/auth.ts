import callAPI from './config';

const HOST = process.env.NEXT_PUBLIC_API_HOST;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export async function setSignUp(data: {}) {
  const url = `${HOST}/${VERSION}/auth/sign-up`;
  return callAPI({
    url,
    method: 'POST',
    data,
  });
}
