// import React, { useCallback, useEffect, useState } from 'react';
// import TextfieldLabel from '../../atoms/TextfieldLabel';
// import { Button, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
// import Link from 'next/link';
// import FileUpload from '../../atoms/FileUpload';
// import AutocompleteTitle from '../../atoms/AutocompleteTitle';
// import AutocompleteCustom from '../../atoms/AutocompleteCustom';
// import SelectLabel from '../../atoms/SelectLabel';
// import DateFieldBasic from '../../atoms/DateFieldBasic';
// import TimePickerBasic from '../../atoms/TimePickerBasic';
// import dayjs from 'dayjs';
// import { TLayananPeliputanProps } from '@/common/types';
// import { getAllDataKegiatan } from '@/services/data-kegiatan';
// import { useRouter } from 'next/router';
// import { getAllUsers } from '@/services/accounts';
// import { dateFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';

// export default function LayananPeliputan(props: TLayananPeliputanProps) {
//     const { data, id } = props;
//     let rows = data;

//     const { isReady } = useRouter();
//     const api_image = process.env.NEXT_PUBLIC_API_IMG;

//     // Editable File Input
//     const [leaflet, setLeaflet] = useState(false);
//     const [disposisi, setDisposisi] = useState(false);

//     const [autocomplete, setAutocomplete] = useState<any>(); // Handle autocomplete
//     const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete
//     const [users, setUsers] = useState<Array<any>>([]);
//     const handleJudulChange = (event: any, value: any) => {
//         if (value == null) setAutocomplete(value);
//         if (value != null) setAutocomplete(value.judul_kegiatan);
//     };

//     const getDataKegiatan = useCallback(async () => {
//         const params = '';
//         const response = await getAllDataKegiatan();
//         setDataKegiatan(response.data);
//         const judul_kegiatan = response.data.map((item: any) => item.judul_kegiatan);
//         setAutocomplete(judul_kegiatan[0]);
//     }, []);

//     const getUsers = useCallback(async () => {
//         const params = '';
//         const response = await getAllUsers();
//         setUsers(response.data);
//     }, []);

//     useEffect(() => {
//         if (isReady) {
//             getDataKegiatan();
//             getUsers();
//         }
//     }, [isReady]);
//     // console.log(autocomplete);
//     console.log(rows);
//     return (
//         <>  <Typography variant='h5' className='mb-6'>Layanan Peliputan</Typography>
//             {rows.map((data: any) => {
//                 // console.log(data);
//                 return (
//                     <>
//                         <TextfieldLabel name='id' label='ID Pengajuan' defaultValue={data.id_peliputan} disabled />
//                         {leaflet == false && data.tb_laypeliputan.leaflet_kegiatan != null ? (
//                             <>
//                                 <FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
//                                 <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
//                                     <Link href='/' target='_blank'>
//                                         <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.leaflet_kegiatan}</Typography>
//                                     </Link>
//                                     <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLeaflet(true)}>Change File</Button>
//                                 </Stack>
//                             </>
//                         ) : (
//                             <>
//                                 <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
//                                 {data.leaflet_kegiatan != null ? (
//                                     <Stack direction='row-reverse' className='-mt-2'>
//                                         <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLeaflet(false)}>Cancel</Button>
//                                     </Stack>
//                                 ) : null}
//                             </>
//                         )}
//                         <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={dataKegiatan} onChange={handleJudulChange} defaultValue={dataKegiatan.find((item: any) => item.id === data.tb_laypeliputan.id_kegiatan)} />
//                         <AutocompleteCustom name='name' label='User Pemohon' data={users} getOptionLabel={(data) => data.name} defaultValue={users.find((item: any) => item.name == data.tb_laypeliputan.tb_kegiatan.tb_account.name)} />
//                         {dataKegiatan.filter((row: any) => row.judul_kegiatan === autocomplete).map((item: any) => {
//                             return (
//                                 <>
//                                     <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' value={item.des_kegiatan} multiline rows={3} disabled />
//                                     <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' value={item.sifat_kegiatan} disabled>
//                                         <MenuItem value='Terbuka'>Terbuka untuk Umum</MenuItem>
//                                         <MenuItem value='Undangan'>Undangan</MenuItem>
//                                     </SelectLabel>
//                                     <Stack direction='row' spacing={1} className='mb-6'>
//                                         <FormControl className='w-full'>
//                                             <FormLabel className='mb-1 text-sm'>
//                                                 Tanggal Kegiatan
//                                             </FormLabel>
//                                             <DateFieldBasic name='tgl_kegiatan' value={dayjs(dateFormatter(item.tgl_kegiatan), 'DD/MM/YYYY')} disabled />
//                                         </FormControl>
//                                         <FormControl className='w-full'>
//                                             <FormLabel className='mb-1 text-sm'>
//                                                 Waktu Kegiatan
//                                             </FormLabel>
//                                             <TimePickerBasic value={dayjs(dateFormatter(item.tgl_kegiatan) + ' ' + timeStrictFormatter(item.waktu_kegiatan), 'DD/MM/YYYY hh:mm')} disabled />
//                                         </FormControl>
//                                     </Stack>
//                                     <Stack direction='row' spacing={1}>
//                                         <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' value={item.tempat_kegiatan} disabled />
//                                         <SelectLabel name='status' label='Status' defaultValue={data.tb_laypeliputan.status}>
//                                             <MenuItem value='Pending'>Pending</MenuItem>
//                                             <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
//                                             <MenuItem value='Completed'>Complete</MenuItem>
//                                             <MenuItem value='Rejected'>Rejected</MenuItem>
//                                         </SelectLabel>
//                                     </Stack>
//                                     <FormControl className='w-full'>
//                                         <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
//                                         <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
//                                             <Link href={`${api_image}/${item.surat_permohonan}`} target='_blank'>
//                                                 <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.surat_permohonan}</Typography>
//                                             </Link>
//                                             <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
//                                         </Stack>
//                                     </FormControl>
//                                 </>
//                             );
//                         })}
//                         <TextfieldLabel label='Judul Berita' defaultValue={data.judul_berita} />
//                         {disposisi == false ? (
//                             <>
//                                 <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
//                                 <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
//                                     <Link href={`${api_image}/${data.tb_laypeliputan.disposisi}`} target='_blank'>
//                                         <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.tb_laypeliputan.disposisi}</Typography>
//                                     </Link>
//                                     <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(true)}>Change File</Button>
//                                 </Stack>
//                             </>
//                         ) : (
//                             <>
//                                 <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
//                                 <Stack direction='row-reverse' className='-mt-2 mb-4'>
//                                     <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(false)}>Cancel</Button>
//                                 </Stack>
//                             </>
//                         )}
//                         <Stack direction='row' spacing={1}>
//                             <SelectLabel name='kategori' label='Kategori Berita' defaultValue={data.kategori} className='capitalize'>
//                                 <MenuItem value='' disabled>Pilih salah satu</MenuItem>
//                                 {kategoriBerita.map((item, index) => <MenuItem value={item} key={index} className='capitalize'>{item}</MenuItem>)}
//                             </SelectLabel>
//                             <AutocompleteCustom name='jurnalis' label='Jurnalis PIC' data={rows} getOptionLabel={(data) => data.jurnalis} defaultValue={rows.find((item: any) => item.jurnalis == data.jurnalis)} />
//                         </Stack>
//                         <TextfieldLabel name='prarilis' label='Prarilis' defaultValue={data.prarilis} minRows={4} multiline />
//                         <TextfieldLabel name='rilis' label='Rilis' defaultValue={data.rilis} minRows={4} multiline />
//                     </>
//                 );
//             })}
//         </>
//     );
// }

// export const kategoriBerita = [
//     'Kegiatan',
//     'Berita Terkini',
//     'Alumni UNS',
//     'Mahasiswa UNS',
//     'Akademik'
// ];
