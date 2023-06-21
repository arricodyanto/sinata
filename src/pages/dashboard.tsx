import PageTitle from '@/common/components/atoms/PageTitle';
import { authRole } from '@/common/middlewares/auth';
import React from 'react';

export default function Dashboard() {
    return (
        <PageTitle title='Please, wait. Redirecting...' />
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;

    return authRole(tkn);
}