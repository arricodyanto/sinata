import { Box, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material'
import React from 'react'
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle'
import data from '@/json/tb_kegiatan.json'
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel'
import SelectLabel from '@/common/components/atoms/SelectLabel'
import DateFieldBasic from '@/common/components/atoms/DateFieldBasic'
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic'
import dayjs from 'dayjs'
import FileUpload from '@/common/components/atoms/FileUpload'
import CollapsibleAlert from '@/common/components/atoms/CollapsibleAlert'
import ButtonBasic from '@/common/components/atoms/ButtonBasic'
import Link from 'next/link'

export default function VideotronForm() {
    const [row, setRow] = React.useState([])
    const getValue = (event:any, value:any) => value!==null? setRow(value['judul_kegiatan']) : setRow([])
    const getJudul = (String(row))
  return (
    <Box component='form' action='/' method='post'>
        <AutocompleteTitle label='Judul Kegiatan' name='judul_kegiatan' data={data} onChange={getValue} />
        { data.filter((data) => data.judul_kegiatan === getJudul).map(item => {
            return (
                <>
                    <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' value={item.des_kegiatan} disabled multiline rows={2} />
                    <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue='get' disabled>
                        <MenuItem value='get'>{item.sifat_kegiatan}</MenuItem>
                    </SelectLabel>
                    <Stack direction='row' spacing={1} className='mb-4'>
                        <FormControl className='w-full'>
                            <FormLabel className='mb-1 text-sm'>
                                Tanggal Kegiatan
                            </FormLabel>
                            <DateFieldBasic name='tgl_kegiatan' value={dayjs(item.tgl_kegiatan, 'DD/MM/YYYY')} disabled/>
                        </FormControl>
                        <FormControl className='w-full'>
                            <FormLabel className='mb-1 text-sm'>
                                Waktu Kegiatan
                            </FormLabel>
                            <TimePickerBasic value={dayjs(item.tgl_kegiatan+' '+item.waktu_kegiatan, 'DD/MM/YYYY hh:mm')} disabled/>
                        </FormControl>
                    </Stack>
                    <TextfieldLabel name='tempat_kegiatan' label='Tempat/Lokasi' value={item.tempat_kegiatan} className='xs:w-full md:w-[calc(50%-0.25rem)]' disabled />
                </>
            )
        })}
        <Stack direction='row' spacing={1} className='mb-4'>
            <FormControl className='w-full'>
                <FormLabel className='mb-1 text-sm'>
                    Tanggal Mulai Tayang
                </FormLabel>
                <DateFieldBasic name='tgl_mulai' />
            </FormControl>
            <FormControl className='w-full'>
                <FormLabel className='mb-1 text-sm'>
                    Tanggal Akhir Tayang
                </FormLabel>
                <DateFieldBasic name='tgl_akhir' />
            </FormControl>
        </Stack>
        <FileUpload name='bahan_publikasi' label='Bahan Publikasi' acceptedFileTypes={['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4', 'video/mkv']} labelFileTypeNotAllowed='Hanya file gambar (JPEG, PNG) dan video (MP4, MKV) yang diijinkan' />
        <CollapsibleAlert type='warning' className='mb-4'>
            <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/users/tambah-kegiatan' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
        </CollapsibleAlert>
        <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
    </Box>
  )
}
