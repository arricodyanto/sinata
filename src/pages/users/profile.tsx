import { Box, Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import TitlePage from '@/common/components/atoms/TitlePage'
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs'
import AccountProfile from '@/common/components/organism/AccountProfile'
import data from '@/json/users.json'
import UsersTab from '@/common/components/organism/UsersTabs'
import DashboardPanel from '@/common/components/organism/DashboardPanel'
import { listMenuUser } from './dashboard'

export default function Profile() {
  return (
    <Box className='bg-grey'>
        <TitlePage title='Profil Akun - Sinata' />
        <DashboardPanel listMenu={listMenuUser}>
            <HeaderBreadcrumbs pageHeader='Profil Akun' currentPage='Profil Akun' />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <Paper className='shadow-md px-6 py-4 md:max-w-[300px] lg:max-w-[350px] h-fit'>
                    <AccountProfile data={data} />
                </Paper>
                <Paper className='shadow-md px-6 py-4 w-full'>
                    <UsersTab />
                </Paper>
            </Stack>
        </DashboardPanel>
    </Box>
  )
}