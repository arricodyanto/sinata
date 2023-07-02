import { TLayananPeliputanProps } from '@/common/types';
import { getAllDataKegiatan } from '@/services/data-kegiatan';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import AutocompleteTitle from '@/common/components/atoms/AutocompleteTitle';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import DisabledFormDataKegiatan from '../FormDataKegiatan/DisabledFormDataKegiatan';
import { deleteOneLayananPeliputan } from '@/services/layanan-peliputan';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import ButtonBasic from '../../atoms/ButtonBasic';

export default function LayananPeliputan(props: TLayananPeliputanProps) {
    const { data, id } = props;
    let rows = data;

    const { isReady, push } = useRouter();
    const api_image = process.env.NEXT_PUBLIC_API_IMG;

    // Editable File Input
    const [leaflet, setLeaflet] = useState(false);
    const [disposisi, setDisposisi] = useState(false);
    const [editable, setEditable] = useState(false);

    const [autocomplete, setAutocomplete] = useState<any>(); // Handle autocomplete
    const [dataKegiatan, setDataKegiatan] = useState<Array<any>>([]); // Handle autocomplete

    const handleJudulChange = (event: any, value: any) => {
        if (value == null) setAutocomplete(value);
        if (value != null) setAutocomplete(value.judul_kegiatan);
    };

    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancelEdit = () => {
        setEditable(false);
    };

    const getDataKegiatan = useCallback(async () => {
        const response = await getAllDataKegiatan();
        setDataKegiatan(response.data);
        const judul_kegiatan = response.data.map((item: any) => item.judul_kegiatan);
        setAutocomplete(judul_kegiatan[0]);
    }, []);

    useEffect(() => {
        if (isReady) {
            getDataKegiatan();
        }
    }, [isReady]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async (id: string) => {
        await deleteOneLayananPeliputan(id);
        push('/admins/semua-ajuan');
    };

    // console.log(autocomplete);
    return (
        <>
            <Typography variant='h5' className='mb-6'>Layanan Peliputan</Typography>
            {rows.map((data: any) => {
                return (
                    <>
                        <TextfieldLabel name='id' label='ID Pengajuan' value={data.id} disabled />
                        {leaflet == false && data.leaflet_kegiatan != null ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Leaflet Kegiatan</FormLabel>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems='flex-start' className='mb-4'>
                                    <Link href={`${api_image}/${data.leaflet_kegiatan}`} target='blank' className='w-[20rem] mt-2'>
                                        <Image src={`${api_image}/${data.leaflet_kegiatan}`} alt={`${data.tb_kegiatan.judul_kegiatan}`} quality={80} layout='responsive' width={20} height={20} className='rounded-lg' />
                                    </Link>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3 mt-2' onClick={() => setLeaflet(true)} disabled={!editable}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='leaflet_kegiatan' label='Leaflet Kegiatan' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                {data.leaflet_kegiatan != null ? (
                                    <Stack direction='row-reverse' className='-mt-2'>
                                        <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLeaflet(false)} disabled={!editable}>Cancel</Button>
                                    </Stack>
                                ) : null}
                            </>
                        )}
                        <AutocompleteTitle name='judul_kegiatan' label='Judul Kegiatan' data={dataKegiatan} onChange={handleJudulChange} defaultValue={dataKegiatan.find((item: any) => item.id == data.id_kegiatan)} readOnly={!editable} />
                        <DisabledFormDataKegiatan judul_kegiatan={autocomplete} />
                        <SelectLabel name='status' label='Status' defaultValue={data.status} inputProps={{ readOnly: !editable }}>
                            <MenuItem value='Pending'>Pending</MenuItem>
                            <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                            <MenuItem value='Completed'>Complete</MenuItem>
                            <MenuItem value='Rejected'>Rejected</MenuItem>
                        </SelectLabel>
                        {disposisi == false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    <Link href={`${api_image}/${data.disposisi}`} target='_blank'>
                                        <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.disposisi}</Typography>
                                    </Link>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(true)} disabled={!editable}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='disposisi' label='Disposisi' allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setDisposisi(false)} disabled={!editable}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={6}>
                            {editable ? (
                                <Stack direction='row' spacing={1}>
                                    <ButtonIcon variant='contained' color='success' icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                    <ButtonIcon variant='contained' color='primary' onClick={handleCancelEdit} icon={<CancelIcon className='-mr-1' />}>Batal</ButtonIcon>
                                </Stack>
                            ) : (
                                <ButtonIcon variant='contained' color='primary' onClick={handleEdit} icon={<EditRoundedIcon className='-mr-1' />}>Ubah</ButtonIcon>
                            )}
                            <ButtonIcon variant='outlined' color='error' onClick={handleOpen} icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                        </Stack>
                        <DialogConfirmation title='Hapus' body='Apakah Anda yakin ingin menghapus data ini?' open={open} onClose={handleClose}>
                            <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                <ButtonBasic variant='contained' onClick={handleClose}>Batal</ButtonBasic>
                                <ButtonBasic variant='outlined' color='error' onClick={() => handleDelete(data.id)}>Hapus</ButtonBasic>
                            </Stack>
                        </DialogConfirmation>
                    </>
                );
            })}
        </>
    );
}
