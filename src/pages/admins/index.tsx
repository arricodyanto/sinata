import TitlePage from '@/common/components/atoms/TitlePage';
import { authAdmin } from '@/common/middlewares/auth';
import { useRouter } from 'next/router';
import React from 'react';

export default function IndexAdmins(props: any) {
  const { user } = props;
  const router = useRouter();
  React.useEffect(() => {
    router.push('/admins/dashboard');
  });
  return (
    <TitlePage title='Welcome to Sinata, Admins!' />
  );
}

export async function getServerSideProps({ req }: any) {
  const { tkn } = req.cookies;
  return authAdmin(tkn);
}
