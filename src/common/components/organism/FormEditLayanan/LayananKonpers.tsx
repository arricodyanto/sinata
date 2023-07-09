import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import { TFormEditLayananProps } from '@/common/types';
import { dateFormatter, dateISOFormatter, dateStringFormatter, timeFormatter, timeISOFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { getAllUsers } from '@/services/accounts';
import { deleteOneLayananKonpers, updateLayananKonpers } from '@/services/layanan-konpers';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Button, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AutocompleteCustom from '../../atoms/AutocompleteCustom';
import ButtonBasic from '../../atoms/ButtonBasic';
import DatePickerBasic from '../../atoms/DatePickerBasic';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import TimePickerBasic from '../../atoms/TimePickerBasic';
import Image from 'next/image';

const form = new FormData();

export default function LayananKonpers(props: TFormEditLayananProps) {
    const { data, id } = props;
    let rows = data;

    const { isReady, push } = useRouter();
    const api_file = process.env.NEXT_PUBLIC_API_IMG;

    // Editable File Input
    const [leaflet_kegiatan, setLeaflet_kegiatan] = useState(false);
    const [suratPermohonan, setSuratPermohonan] = useState(false);
    const [disposisiInput, setDisposisiInput] = useState(false);
    const [editable, setEditable] = useState(false);

    const [users, setUsers] = useState<Array<any>>([]); // Handle autocomplete

    const handleUserChange = (event: any, value: any) => {
        form.set('id_account', value.id);
    };

    const handleDateChange = (value: any) => {
        form.set('tgl_kegiatan', dateISOFormatter(value));
    };

    const handleTimeChange = (value: any) => {
        form.set('waktu_kegiatan', timeISOFormatter(value));
    };

    const handleStatusChange = (event: any) => {
        form.set('status', event.target.value);
    };

    const originalForm: Array<any> = [];

    const onSave = async () => {
        const formattedForm = formDataFormatter(form);
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);

        if (isSame === true) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
        }
        if (isSame === false) {
            const response = await updateLayananKonpers(id, form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                push('/admins/layanan-humas');
            }
        }
        setOpenSimpan(false);
    };

    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancelEdit = () => {
        setEditable(false);
    };

    const getUsers = useCallback(async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }, []);

    useEffect(() => {
        if (isReady) {
            getUsers();
        }
    }, [isReady, rows]);

    const [openHapus, setOpenHapus] = useState(false);
    const [openSimpan, setOpenSimpan] = useState(false);
    const handleDialogOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(true);
    };
    const handleDialogClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(false);
    };

    const handleDelete = async (id: string) => {
        await deleteOneLayananKonpers(id);
        toast.success('Data berhasil dihapus.', {
            theme: 'colored'
        });
        push('/admins/layanan-humas');
    };

    if (!rows) {
        return null;
    }
    return (
        <>
            <Typography variant='h5' className='mb-6'>Layanan Konferensi Pers</Typography>
            {rows.map((data: any) => {
                return (
                    <>
                        <TextfieldLabel name='judul_kegiatan' label='Judul Konferensi Pers' defaultValue={data.judul_kegiatan} onChange={(event: any) => form.set('judul_kegiatan', event.target.value)} disabled={!editable} />
                        <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} defaultValue={users.find((item: any) => item.name == data.tb_account.name)} disabled={!editable} />
                        <Stack direction='row' spacing={1} className='mb-6'>
                            <FormControl className='w-full'>
                                <FormLabel className='mb-1 text-sm'>
                                    Tanggal Kegiatan
                                </FormLabel>
                                <DatePickerBasic defaultValue={dayjs(dateFormatter(data.tgl_kegiatan), 'DD/MM/YYYY')} onChange={handleDateChange} disabled={!editable} />
                            </FormControl>
                            <FormControl className='w-full'>
                                <FormLabel className='mb-1 text-sm'>
                                    Waktu Kegiatan
                                </FormLabel>
                                <TimePickerBasic defaultValue={dayjs(dateFormatter(data.tgl_kegiatan) + ' ' + timeStrictFormatter(data.waktu_kegiatan), 'DD/MM/YYYY hh:mm')} onChange={handleTimeChange} disabled={!editable} />
                            </FormControl>
                        </Stack>
                        <TextfieldLabel name='tempat_kegiatan' label='Tempat Kegiatan' defaultValue={data.tempat_kegiatan} onChange={(event: any) => form.set('tempat_kegiatan', event.target.value)} disabled={!editable} />
                        <FormControl className='w-full'>
                            <SelectLabel name='status' label='Status' defaultValue={data.status} onChange={handleStatusChange} disabled={!editable}>
                                <MenuItem value='Pending'>Pending</MenuItem>
                                <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                                <MenuItem value='Completed'>Complete</MenuItem>
                                <MenuItem value='Rejected'>Rejected</MenuItem>
                            </SelectLabel>
                        </FormControl>
                        {suratPermohonan === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    {data.surat_permohonan ? (
                                        <Link href={`${api_file}/${data.surat_permohonan}`} target='_blank'>
                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.surat_permohonan}</Typography>
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled={!editable} onClick={() => setSuratPermohonan(true)}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='surat_permohonan' label='Surat Permohonan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('surat_permohonan', file);
                                    }
                                }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSuratPermohonan(false)}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        {leaflet_kegiatan === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    {data.leaflet_kegiatan ? (
                                        <Link href={`${api_file}/${data.leaflet_kegiatan}`} target='blank' className='w-[20rem] mt-2'>
                                            <Image src={`${api_file}/${data.leaflet_kegiatan}`} alt={`${data.judul_kegiatan}`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg' />
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled={!editable} onClick={() => setLeaflet_kegiatan(true)}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('leaflet_kegiatan', file);
                                    }
                                }} acceptedFileTypes={['image/png', 'image/jpeg']} labelFileTypeNotAllowed='Hanya file JPEG dan PNG yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLeaflet_kegiatan(false)}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        {disposisiInput == false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    {data.disposisi ? (
                                        <Link href={`${api_file}/${data.disposisi}`} target='_blank'>
                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisiInput(true)} disabled={!editable}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('disposisi', file);
                                    }
                                }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisiInput(false)} disabled={!editable}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginTop={6}>
                            {editable ? (
                                <Stack direction='row' spacing={1}>
                                    <ButtonIcon variant='contained' color='success' onClick={handleDialogOpen(setOpenSimpan)} icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                    <ButtonIcon variant='contained' color='primary' onClick={handleCancelEdit} icon={<CancelIcon className='-mr-1' />}>Batal</ButtonIcon>
                                </Stack>
                            ) : (
                                <ButtonIcon variant='contained' color='primary' onClick={handleEdit} icon={<EditRoundedIcon className='-mr-1' />}>Ubah</ButtonIcon>
                            )}
                            <ButtonIcon variant='outlined' color='error' onClick={handleDialogOpen(setOpenHapus)} icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                        </Stack>
                        <Typography variant='caption' className='italic' marginTop={-4}>Terakhir diubah pada {dateStringFormatter(data.updatedAt)} - {timeFormatter(data.updatedAt)} WIB</Typography>
                        <DialogConfirmation title='Hapus' body='Apakah Anda yakin ingin menghapus data ini?' open={openHapus} onClose={handleDialogClose(setOpenHapus)}>
                            <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenHapus)}>Batal</ButtonBasic>
                                <ButtonBasic variant='outlined' color='error' onClick={() => handleDelete(data.id)}>Hapus</ButtonBasic>
                            </Stack>
                        </DialogConfirmation>
                        <DialogConfirmation title='Ubah Data' body='Apakah Anda yakin ingin menyimpan perubahan pada data ini?' open={openSimpan} onClose={handleDialogClose(setOpenSimpan)}>
                            <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenSimpan)}>Batal</ButtonBasic>
                                <ButtonBasic variant='contained' color='success' onClick={onSave}>Simpan</ButtonBasic>
                            </Stack>
                        </DialogConfirmation>
                    </>
                );
            })}
        </>
    );
}
