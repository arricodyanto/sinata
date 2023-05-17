import { Box, Typography } from '@mui/material'
import React from 'react'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import FileUpload from '../../atoms/FileUpload'
import ButtonBasic from '../../atoms/ButtonBasic'
import CollapsibleAlert from '../../atoms/CollapsibleAlert'

export default function OpiniForm() {
  return (
    <Box component='form' action='/' method='post'>
        <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' placeholder='Judul konferensi pers Anda' />
        <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
        <FileUpload name='foto_penulis' label='Foto Penulis' acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
        <FileUpload name='bahan_publikasi' label='Bahan Publikasi' allowMultiple={false} />
        <CollapsibleAlert type='info' className='mb-4'>
            <Typography className='text-dark' variant='body2'>Sebelum menekan tombol <b>Ajukan Layanan</b>, pastikan data yang Anda masukkan sudah benar!</Typography>
        </CollapsibleAlert>
        <ButtonBasic type='submit' variant='contained'>Ajukan Layanan</ButtonBasic>
    </Box>
  )
}
