import TabItem from '@/common/components/atoms/TabItem';
import TabsContainer from '@/common/components/atoms/TabsContainer';
import TableKegiatan from '@/common/components/molecules/TableKegiatan';
import TableRiwayat from '@/common/components/molecules/TableRiwayat';
import { TabContext, TabPanel } from '@mui/lab';
import { Box, Stack } from '@mui/material';
import React from 'react';

export default function UsersTab() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
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
                        <TableKegiatan />
                    </TabPanel>
                    <TabPanel value='2'>
                        <TableRiwayat />
                    </TabPanel>
                </Stack>
            </TabContext>
        </>
    );
}
