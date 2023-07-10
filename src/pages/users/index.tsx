import TitlePage from '@/common/components/atoms/TitlePage';
import { authUser } from '@/common/middlewares/auth';
import { useRouter } from 'next/router';
import React from 'react';

export default function IndexUsers() {
  const router = useRouter();
  React.useEffect(() => {
    router.push('/users/dashboard');
  });
  return (
    <TitlePage title='Welcome to Sinata, Users!' />
  );
}

export async function getServerSideProps({ req }: any) {
  const { tkn } = req.cookies;
  return authUser(tkn);
}
