import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DatePickerBasic from '@/common/components/atoms/DatePickerBasic';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TimePickerBasic from '@/common/components/atoms/TimePickerBasic';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { dateFormatter, dateISOFormatter, dateStringFormatter, timeISOFormatter, timeStrictFormatter } from '@/common/utils/dateFormatter.util';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { deleteOneDataKegiatan, getAllDataKegiatan, updateOneDataKegiatan } from '@/services/data-kegiatan';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Fade, FormControl, FormLabel, IconButton, MenuItem, Modal, Paper, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { FilePondFile } from 'filepond';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const form = new FormData();

export default function DaftarKegiatan() {
    const { isReady, reload } = useRouter();
    const [data, setData] = React.useState<Array<any>>([]);
    const [open, setOpen] = React.useState(false);
    const [currIndex, setCurrIndex] = React.useState(0);
    const handleOpen = (index: number) => {
        setOpen(true);
        setCurrIndex(index || 0);
    };
    const handleClose = () => setOpen(false);
    const tableHeaders = [
        'Judul Kegiatan', 'Deskripsi Kegiatan', 'User', 'Sifat Acara', 'Tanggal Kegiatan', 'Waktu', 'Tempat', 'Aksi'
    ];
    const tableColumns = [
        { id: 1, label: 'judul_kegiatan' },
        { id: 2, label: 'des_kegiatan' },
        { id: 3, label: 'name', source: 'tb_account' },
        { id: 4, label: 'sifat_kegiatan' },
        { id: 5, label: 'tgl_kegiatan' },
        { id: 6, label: 'waktu_kegiatan' },
        { id: 7, label: 'tempat_kegiatan' },
    ];

    const api_file = process.env.NEXT_PUBLIC_API_IMG;

    const [page, setPage] = useState<number>(0);
    const [totalRow, setTotalRow] = useState<number>(2);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    const handleChangePage = (newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeLimit = (limit: number) => {
        setRowsPerPage(limit);
    };

    const getDataKegiatan = useCallback(async () => {
        const params = `limit=${rowsPerPage}&page=${page}`;
        const response = await getAllDataKegiatan(params);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getAllDataKegiatan, page, rowsPerPage]);

    useEffect(() => {
        if (isReady) {
            getDataKegiatan();
        }
    }, [isReady, page, rowsPerPage]);

    // Editable File Input
    const [permohonan, setPermohonan] = React.useState(false);
    const [sik, setSik] = React.useState(false);
    const [editable, setEditable] = useState(false);
    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancelEdit = () => {
        setEditable(false);
        setOpen(false);
        setOpenSimpan(false);
        if (permohonan) {
            setPermohonan(false);
        }
        if (sik) {
            setSik(false);
        }
    };

    const originalForm: Array<any> = [];
    const id = currIndex.toString();

    const onSave = async () => {
        const formattedForm = formDataFormatter(form);
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm);
        if (isSame) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
            handleCancelEdit();
        }
        if (!isSame) {
            const response = await updateOneDataKegiatan(id, form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                handleCancelEdit();
                getDataKegiatan();
            }
        }
        setOpen(false);
    };

    const onDelete = async (id: string) => {
        await deleteOneDataKegiatan(id);
        toast.success('Data berhasil dihapus.', {
            theme: 'colored'
        });
        handleCancelEdit();
        getDataKegiatan();
    };

    const [openHapus, setOpenHapus] = useState(false);
    const [openSimpan, setOpenSimpan] = useState(false);
    const handleDialogOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(true);
    };
    const handleDialogClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(false);
    };
    return (
        <Box className='bg-grey'>
            <TitlePage title='Daftar Kegiatan - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Daftar Kegiatan' currentPage='Daftar Kegiatan'>
                    <Link href='' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Manajemen Data Kegiatan
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md px-6 py-4'>
                    {data.length === 0 ? (
                        <TableDataEmpty headers={tableHeaders}
                            addButton={
                                <Link href='/admins/daftar-kegiatan/tambah'>
                                    <ButtonBasic variant='contained'>Tambahkan Kegiatan</ButtonBasic>
                                </Link>
                            } />
                    ) : (
                        <>
                            <TableData headers={tableHeaders} columns={tableColumns} rows={data} status={false} actionOnClick={handleOpen}
                                page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
                                addButton={
                                    <Link href='/admins/daftar-kegiatan/tambah'>
                                        <ButtonBasic variant='contained'>Tambahkan Kegiatan</ButtonBasic>
                                    </Link>
                                } />
                        </>
                    )}
                    <Modal open={open} onClose={handleClose}>
                        <Fade in={open}>
                            <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[600px]'>
                                <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                    <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                                        Data Kegiatan
                                    </Typography>
                                    <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Stack>
                                <Box id="transition-modal-description" sx={{ mt: 2 }} className='max-h-[70vh] overflow-auto pb-4 px-6'>
                                    {data.filter((item) => item.id === currIndex).map(data => {
                                        return (
                                            <>
                                                <TextfieldLabel name='judul_kegiatan' label='Judul Kegiatan' defaultValue={data.judul_kegiatan} onChange={(event: any) => form.set('judul_kegiatan', event.target.value)} disabled={!editable} />
                                                <TextfieldLabel name='des_kegiatan' label='Deskripsi Kegiatan' defaultValue={data.des_kegiatan} onChange={(event: any) => form.set('des_kegiatan', event.target.value)} multiline maxRows={8} disabled={!editable} />
                                                <SelectLabel name='sifat_kegiatan' label='Sifat Kegiatan' defaultValue={data.sifat_kegiatan} onChange={(event: any) => form.set('sifat_kegiatan', event.target.value)} disabled={!editable} >
                                                    <MenuItem value='Terbuka'>Terbuka untuk Umum</MenuItem>
                                                    <MenuItem value='Undangan'>Undangan</MenuItem>
                                                </SelectLabel>
                                                <Stack direction='row' spacing={1} className='mb-6'>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Tanggal Kegiatan
                                                        </FormLabel>
                                                        <DatePickerBasic defaultValue={dayjs(dateFormatter(data.tgl_kegiatan), 'DD/MM/YYYY')} onChange={(value: any) => form.set('tgl_kegiatan', dateISOFormatter(value))} disabled={!editable} />
                                                    </FormControl>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Waktu Kegiatan
                                                        </FormLabel>
                                                        <TimePickerBasic defaultValue={dayjs(dateFormatter(data.tgl_kegiatan) + ' ' + timeStrictFormatter(data.waktu_kegiatan), 'DD/MM/YYYY hh:mm')} onChange={(value: any) => form.set('waktu_kegiatan', timeISOFormatter(value))} disabled={!editable} />
                                                    </FormControl>
                                                </Stack>
                                                <TextfieldLabel label='Tempat Kegiatan' defaultValue={data.tempat_kegiatan} onChange={(event: any) => form.set('tempat_kegiatan', event.target.value)} disabled={!editable} />
                                                {permohonan == false ? (
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
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setPermohonan(true)} disabled={!editable}>Change File</Button>
                                                        </Stack>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileUpload name='surat_permohonan' label='Surat Permohonan' onupdatefiles={(fileItems: FilePondFile[]) => {
                                                            const file = fileItems[0]?.file;
                                                            if (file) {
                                                                form.set('surat_permohonan', file);
                                                            }
                                                        }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                        <Stack direction='row-reverse' className='-mt-2'>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setPermohonan(false)} disabled={!editable}>Cancel</Button>
                                                        </Stack>
                                                    </>
                                                )}
                                                {sik == false ? (
                                                    <>
                                                        <FormLabel className='mb-2 text-sm'>Surat Ijin Kegiatan</FormLabel>
                                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-8'>
                                                            {data.sik ? (
                                                                <Link href={`${api_file}/${data.sik}`} target='_blank'>
                                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.sik}</Typography>
                                                                </Link>
                                                            ) : (
                                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                                            )}
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSik(true)} disabled={!editable}>Change File</Button>
                                                        </Stack>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileUpload name='sik' label='Surat Ijin Kegiatan' onupdatefiles={(fileItems: FilePondFile[]) => {
                                                            const file = fileItems[0]?.file;
                                                            if (file) {
                                                                form.set('sik', file);
                                                            }
                                                        }} allowMultiple={false} allowReorder={false} acceptedFileTypes={['application/pdf']} labelFileTypeNotAllowed='Hanya file PDF yang diijinkan' />
                                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setSik(false)} disabled={!editable}>Cancel</Button>
                                                        </Stack>
                                                    </>
                                                )}
                                                <Typography variant='caption' className='italic mb-4'>Ditambahkan pada {dateStringFormatter(data.createdAt)}</Typography>
                                                <DialogConfirmation title='Hapus' body='Apakah Anda yakin ingin menghapus data ini?' open={openHapus} onClose={handleDialogClose(setOpenHapus)}>
                                                    <Stack direction='row' spacing={1} className='mt-4 px-2'>
                                                        <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenHapus)}>Batal</ButtonBasic>
                                                        <ButtonBasic variant='outlined' color='error' onClick={() => onDelete(id)}>Hapus</ButtonBasic>
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
                                </Box>
                                <Stack direction='row' justifyContent='flex-end' spacing={1} marginBottom={1} marginTop={2} marginRight={2} className='sticky'>
                                    <ButtonIcon variant='outlined' color='error' onClick={handleDialogOpen(setOpenHapus)} icon={<DeleteIcon className='-mr-1' />}>Hapus</ButtonIcon>
                                    {editable ? (
                                        <>
                                            <ButtonIcon variant='contained' color='success' onClick={handleDialogOpen(setOpenSimpan)} icon={<SaveIcon className='-mr-1' />}>Simpan</ButtonIcon>
                                            <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleCancelEdit}>Batal</ButtonIcon>
                                        </>
                                    ) : (
                                        <ButtonIcon variant='contained' color='primary' onClick={handleEdit} icon={<EditRoundedIcon className='-mr-1' />}>Ubah</ButtonIcon>
                                    )}
                                </Stack>
                            </Box>
                        </Fade>
                    </Modal>
                </Paper>
            </DashboardPanel>
        </Box>
    );
}

export async function getServerSideProps({ req }: any) {
    const { tkn } = req.cookies;
    return authAdmin(tkn);
}
