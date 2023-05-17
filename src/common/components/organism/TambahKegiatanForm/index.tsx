import React from 'react'
import { FormControl, FormLabel, MenuItem, Stack } from '@mui/material'
import ButtonBasic from '../../atoms/ButtonBasic'
import DatePickerBasic from '../../atoms/DatePickerBasic'
import FileUpload from '../../atoms/FileUpload'
import SelectLabel from '../../atoms/SelectLabel'
import TextfieldLabel from '../../atoms/TextfieldLabel'
import TimePickerBasic from '../../atoms/TimePickerBasic'
import dayjs from 'dayjs'

export default function TambahKegiatanForm() {
    const today = dayjs()
  return (
    <>
        <form action='/' method='post'>
            <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' placeholder='Judul kegiatan dari agenda yang akan ditambahkan' /> 
            <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' placeholder='Penjelasan secara singkata inti dari agenda yang diselenggarakan' multiline rows={2} />
            <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue='default'>
                <MenuItem value='terbuka'>Terbuka untuk Umum</MenuItem>
                <MenuItem value='undangan'>Undangan</MenuItem>
            </SelectLabel>
            <Stack direction='row' spacing={1} className='mb-4'>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Tanggal Kegiatan
                    </FormLabel>
                    <DatePickerBasic />
                </FormControl>
                <FormControl className='w-full'>
                    <FormLabel className='mb-1 text-sm'>
                        Waktu Kegiatan
                    </FormLabel>
                    <TimePickerBasic />
                </FormControl>
            </Stack>
            <TextfieldLabel name='tempat_kegiatan' label='Tempat/Lokasi' placeholder='Lokasi atau tempat berlangsungnya agenda' className='xs:w-full md:w-[calc(50%-0.25rem)]' />
            <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} />
            <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} allowReorder={false} />
            <ButtonBasic type='submit' variant='contained'>Tambahkan Data</ButtonBasic>
        </form>
    </>
  )
}
