import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import { TFormEditLayananProps } from '@/common/types';
import { dateStringFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';
import { getAllUsers } from '@/services/accounts';
import { deleteOneLayananPeliputan } from '@/services/layanan-peliputan';
import { updateLayananPeminformasi } from '@/services/layanan-peminformasi';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Button, FormControl, FormLabel, MenuItem, Stack, Typography } from '@mui/material';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AutocompleteCustom from '../../atoms/AutocompleteCustom';
import ButtonBasic from '../../atoms/ButtonBasic';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import { formDataFormatter } from '@/common/utils/formDataFormatter';

const form = new FormData();

export default function LayananPeminformasi(props: TFormEditLayananProps) {
    const { data, id } = props;
    let rows = data;

    const { isReady, push } = useRouter();
    const api_file = process.env.NEXT_PUBLIC_API_IMG;

    // Editable File Input
    const [suratPermohonan, setSuratPermohonan] = useState(false);
    const [bahanPublikasiInput, setBahanPublikasiInput] = useState(false);
    const [disposisiInput, setDisposisiInput] = useState(false);
    const [editable, setEditable] = useState(false);

    const [users, setUsers] = useState<Array<any>>([]); // Handle autocomplete

    const handleFormChange = (setState: React.Dispatch<React.SetStateAction<any>>, fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
        form.set(fieldName, event.target.value);
    };

    const handleUserChange = (event: any, value: any) => {
        form.set('id_account', value.id);
    };

    const handleStatusChange = (event: any) => {
        form.set('status', event.target.value);
    };

    const originalForm: Array<any> = [];

    const onSave = async () => {
        const formattedForm = formDataFormatter(form);
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);

        console.log(formattedForm);
        if (isSame === true) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
        }
        if (isSame === false) {
            const response = await updateLayananPeminformasi(id, form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                window.location.reload();
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
        await deleteOneLayananPeliputan(id);
        toast.error('Data berhasil dihapus.', {
            theme: 'colored'
        });
        push('/admins/semua-ajuan');
    };

    if (!rows) {
        return null;
    }

    return (
        <>
            <Typography variant='h5' className='mb-6'>Layanan Pembaruan Informasi di Laman UNS</Typography>
            {rows.map((data: any) => {
                return (
                    <>
                        <TextfieldLabel name='judul_permohonan' label='Judul Permohonan' defaultValue={data.judul_permohonan} onChange={(event: any) => form.set('judul_permohonan', event.target.value)} disabled={!editable} />
                        <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} defaultValue={users.find((item: any) => item.name == data.tb_account.name)} disabled={!editable} />
                        {suratPermohonan === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    <Link href={`${api_file}/${data.surat_permohonan}`} target='_blank'>
                                        <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.surat_permohonan}</Typography>
                                    </Link>
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
                        {bahanPublikasiInput === false ? (
                            <>
                                <FormLabel className='mb-2 text-sm'>Bahan Publikasi</FormLabel>
                                <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                    {data.bahan_publikasi ? (
                                        <Link href={`${api_file}/${data.bahan_publikasi}`} target='_blank'>
                                            <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.bahan_publikasi}</Typography>
                                        </Link>
                                    ) : (
                                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                    )}
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled={!editable} onClick={() => setBahanPublikasiInput(true)}>Change File</Button>
                                </Stack>
                            </>
                        ) : (
                            <>
                                <FileUpload name='bahanPublikasi' label='bahanPublikasi' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems) => {
                                    const file = fileItems[0]?.file;
                                    if (file) {
                                        form.set('bahan_publikasi', file);
                                    }
                                }} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                    <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setBahanPublikasiInput(false)}>Cancel</Button>
                                </Stack>
                            </>
                        )}
                        <FormControl className='w-full'>
                            <SelectLabel name='status' label='Status' defaultValue={data.status} onChange={handleStatusChange} disabled={!editable}>
                                <MenuItem value='Pending'>Pending</MenuItem>
                                <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                                <MenuItem value='Completed'>Complete</MenuItem>
                                <MenuItem value='Rejected'>Rejected</MenuItem>
                            </SelectLabel>
                        </FormControl>
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
                        <TextfieldLabel label='Luaran Layanan' defaultValue={data.luaran_layanan} disabled={!editable} onChange={(event: any) => form.set('luaran_layanan', event.target.value)} multiline maxRows={5} />
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
                        <Typography variant='caption' className='italic' marginTop={-4}>Terakhir diubah pada {dateStringFormatter(data.updatedAt)} - {timeFormatter(data.updatedAt)}</Typography>
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
