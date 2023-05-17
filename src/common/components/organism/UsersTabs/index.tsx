import React from 'react'
import TabsContainer from '@/common/components/atoms/TabsContainer'
import TabItem from '@/common/components/atoms/TabItem'
import { Box, Stack } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import TableKegiatan from '@/common/components/molecules/TableKegiatan'
import ButtonBasic from '@/common/components/atoms/ButtonBasic'
import Link from 'next/link'
import TableRiwayat from '@/common/components/molecules/TableRiwayat'
import kegiatan from '@/json/riwayatKegiatan.json'
import ajuan from '@/json/riwayatAjuan.json'
import ButtonSplit from '@/common/components/atoms/ButtonSplit'

export default function UsersTab() {
    const [value, setValue] = React.useState('1')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
    const ajuanOptions = [ 'Ajukan Layanan Humas', 'Ajukan Layanan Publikasi', 'Ajukan Layanan Media']
    const redirect = ['/users/layanan-humas', '/users/layanan-publikasi', '/users/layanan-media']
  return (
    <>
        <TabContext value={value}>
            <Box className='flex justify-center'>
                <TabsContainer onChange={handleChange} value={value}>
                    <TabItem label='Riwayat Kegiatan' value='1' />
                    <TabItem label='Riwayat Ajuan' value='2' />
                </TabsContainer>
            </Box>
            <Stack className='-mx-6'>
                <TabPanel value='1'>
                    <Stack direction='row-reverse'>
                        <Link href='/users/tambah-kegiatan'>
                            <ButtonBasic variant='contained' color='primary'>Tambah Kegiatan</ButtonBasic>
                        </Link>
                    </Stack>
                    <TableKegiatan rows={kegiatan} />
                </TabPanel>
                <TabPanel value='2'>
                    <Stack direction='row-reverse'>
                        <ButtonSplit options={ajuanOptions} redirect={redirect} />
                    </Stack>
                    <TableRiwayat rows={ajuan} />
                </TabPanel>
            </Stack>
        </TabContext>
    </>
  )
}
