import { Box, Typography } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import FileUpload from '../../atoms/FileUpload'
import CollapsibleAlert from '../../atoms/CollapsibleAlert'
import ButtonBasic from '../../atoms/ButtonBasic'

export default function PembaruanInfoForm() {
  return (
    <Box component='form' action='/' method='post'>
        <TextfieldLabel name='judul_permohonan' label='Judul Permohonan' placeholder='Judul memo dari pengajuan Anda' />
        <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
        <FileUpload name='bahan_publikasi' label='Bahan Publikasi' />
        <CollapsibleAlert type='info' className='mb-4'>
            <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
        </CollapsibleAlert>
        <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
    </Box>
  )
}
