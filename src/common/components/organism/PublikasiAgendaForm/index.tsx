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

export default function PublikasiAgendaForm() {
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
                            <DateFieldBasic value={dayjs(item.tgl_kegiatan, 'DD/MM/YYYY')} disabled/>
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
        <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
        <TextfieldLabel label='Caption' name='caption' multiline rows={4} placeholder='Caption dan penjelasan dari agenda Anda' />
        <CollapsibleAlert type='warning' className='mb-4'>
            <Typography className='text-dark' variant='body2'>Pastikan Anda telah menambahkan detil informasi kegiatan Anda ke sistem! Jika belum, silakan menuju ke halaman <Link href='/users/tambah-kegiatan' className='underline hover:opacity-75 transition'>Tambah Kegiatan</Link></Typography>
        </CollapsibleAlert>
        <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
    </Box>
  )
}
