import { Box, FormControl, FormLabel, Stack, Typography } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import FileUpload from '../../atoms/FileUpload'
import DatePickerBasic from '../../atoms/DatePickerBasic'
import TimePickerBasic from '../../atoms/TimePickerBasic'
import ButtonBasic from '../../atoms/ButtonBasic'
import CollapsibleAlert from '../../atoms/CollapsibleAlert'

export default function KonpersForm() {
  return (
    <Box component='form' action='/' method='post'>
        <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' placeholder='Judul konferensi pers Anda' />
        <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
        <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
        <Stack direction='row' spacing={1} className='mb-4'>
            <FormControl className='w-full'>
                <FormLabel className='text-sm mb-1'>
                    Tanggal Kegiatan
                </FormLabel>
                <DatePickerBasic />
            </FormControl>
            <FormControl className='w-full'>
                <FormLabel className='text-sm mb-1'>
                    Waktu Kegiatan
                </FormLabel>
                <TimePickerBasic />
            </FormControl>
        </Stack>
        <TextfieldLabel name='tempat_kegiatan' label='Tempat/Lokasi' placeholder='Tempat rencana konferensi pers akan dilaksanakan' className='xs:w-full md:w-[calc(50%-0.25rem)]' />
        <CollapsibleAlert type='info' className='mb-4'>
            <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
        </CollapsibleAlert>
        <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
    </Box>
  )
}
