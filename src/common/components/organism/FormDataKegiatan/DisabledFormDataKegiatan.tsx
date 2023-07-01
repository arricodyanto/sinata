import React, { useCallback, useEffect, useState } from 'react';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import { Box, Button, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import DateFieldBasic from '../../atoms/DateFieldBasic';
import TimePickerBasic from '../../atoms/TimePickerBasic';
import dayjs from 'dayjs';
import { dateFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import Link from 'next/link';
import { TDisabledFormDataKegiatanProps } from '@/common/types';
import { getAllDataKegiatan } from '@/services/data-kegiatan';
import { useRouter } from 'next/router';

export default function DisabledFormDataKegiatan(props: TDisabledFormDataKegiatanProps) {
    const { judul_kegiatan } = props;
    let autocomplete = judul_kegiatan;

    const { isReady } = useRouter();
    const api_image = process.env.NEXT_PUBLIC_API_IMG;

    const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]);

    const getDataKegiatan = useCallback(async () => {
        const response = await getAllDataKegiatan();
        setDataKegiatan(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getDataKegiatan();
        }
    }, [isReady]);
    return (
        <>
            {dataKegiatan.filter((row: any) => row.judul_kegiatan === autocomplete).map((item: any) => {
                return (
                    <Box key={item.id}>
                        <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' value={item.des_kegiatan} multiline rows={3} disabled />
                        <Stack direction='row' spacing={1}>
                            <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' value={item.sifat_kegiatan} disabled>
                                <MenuItem value='Terbuka'>Terbuka untuk Umum</MenuItem>
                                <MenuItem value='Undangan'>Undangan</MenuItem>
                            </SelectLabel>
                            <TextfieldLabel name='name' label='User Pemohon' value={item.tb_account.name} disabled />
                        </Stack>
                        <Stack direction='row' spacing={1} className='mb-6'>
                            <FormControl className='w-full'>
                                <FormLabel className='mb-1 text-sm'>
                                    Tanggal Kegiatan
                                </FormLabel>
                                <DateFieldBasic name='tgl_kegiatan' value={dayjs(dateFormatter(item.tgl_kegiatan), 'DD/MM/YYYY')} disabled />
                            </FormControl>
                            <FormControl className='w-full'>
                                <FormLabel className='mb-1 text-sm'>
                                    Waktu Kegiatan
                                </FormLabel>
                                <TimePickerBasic value={dayjs(dateFormatter(item.tgl_kegiatan) + ' ' + timeStrictFormatter(item.waktu_kegiatan), 'DD/MM/YYYY hh:mm')} disabled />
                            </FormControl>
                        </Stack>
                        <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' value={item.tempat_kegiatan} disabled />
                        <FormControl className='w-full'>
                            <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                            <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                <Link href={`${api_image}/${item.surat_permohonan}`} target='_blank'>
                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.surat_permohonan}</Typography>
                                </Link>
                                <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                            </Stack>
                        </FormControl>
                    </Box>
                );
            })}

        </>
    );
}
