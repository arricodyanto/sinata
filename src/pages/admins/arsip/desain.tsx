import AutocompleteCustom from '@/common/components/atoms/AutocompleteCustom';
import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DateTimePickerBasic from '@/common/components/atoms/DatePickerBasic/DateTimePickerBasic';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import FileUpload from '@/common/components/atoms/FileUpload';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { dateISOFormatter, dateTimeFormatter } from '@/common/utils/dateFormatter.util';
import { formDataFormatter } from '@/common/utils/formDataFormatter';
import { listMenuAdmin } from '@/pages/admins/dashboard';
import { getAllUsers } from '@/services/accounts';
import { deleteOneArsipDesain, getAllArsipDesain, updateOneArsipDesain } from '@/services/arsip-desain';
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

export default function ArsipDesain() {
    const { isReady, push } = useRouter();

    const headers = [
        'Judul Desain', 'User Pemohon', 'Kategori Desain', 'Keterangan', 'Deadline', 'Lampiran File', 'Aksi', 'Status'
    ];

    const columns = [
        { id: 2, label: 'judul_desain' },
        { id: 3, label: 'name', source: 'tb_account' },
        { id: 4, label: 'kategori' },
        { id: 5, label: 'keterangan' },
        { id: 6, label: 'deadline' },
        { id: 8, label: 'lampiran_file' },
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

    const [data, setData] = useState<Array<any>>([]);
    const [open, setOpen] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
    };
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
    const handleClose = () => setOpen(false);

    const handleUserChange = (event: any, value: any) => {
        form.set('id_account', value?.id);
    };
    const handleStatusChange = (event: any) => {
        form.set('status', event.target.value);
    };

    const [users, setUsers] = useState<Array<any>>([]);

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
            const response = await updateOneArsipDesain(id, form);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
            }
            handleCancelEdit();
        }
    };

    const onDelete = async (id: string) => {
        const response = await deleteOneArsipDesain(id);
        if (response.error === true) {
            toast.error(response.message, {
                theme: 'colored'
            });
        }
        if (response.error === false) {
            toast.success('Data berhasil dihapus.', {
                theme: 'colored'
            });
        }
        handleCancelEdit();
    };

    const getArsipDesain = useCallback(async () => {
        const params = `limit=${rowsPerPage}&page=${page}`;
        const response = await getAllArsipDesain(params);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getAllArsipDesain, page, rowsPerPage, onSave, onDelete]);

    const getUsers = useCallback(async () => {
        const response = await getAllUsers();
        setUsers(response.data);
    }, [getAllUsers]);

    useEffect(() => {
        if (isReady) {
            getArsipDesain();
            getUsers();
        }
    }, [isReady, page, rowsPerPage, onSave, onDelete]);

    const [lampiran, setLampiran] = useState(false);

    const [editable, setEditable] = useState(false);
    const handleEdit = () => {
        setEditable(true);
    };
    const handleCancelEdit = () => {
        setEditable(false);
        setOpen(false);
        setOpenSimpan(false);
        setLampiran(false);
    };

    const originalForm: Array<any> = [];
    const id = currIndex.toString();

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
            <TitlePage title='Arsip Desain - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Arsip Desain' currentPage='Arsip Desain' />
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    {data.length === 0 ? (
                        <TableDataEmpty headers={headers}
                            addButton={
                                <Link href='/admins/arsip/desain/tambah'>
                                    <ButtonBasic variant='contained'>Tambah Data</ButtonBasic>
                                </Link>
                            } />
                    ) : (
                        <TableData headers={headers} columns={columns} rows={data} status={true} actionOnClick={handleOpen}
                            page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
                            addButton={
                                <Link href='/admins/arsip/desain/tambah'>
                                    <ButtonBasic variant='contained'>Tambah Data</ButtonBasic>
                                </Link>
                            }
                        />
                    )}
                    <Modal open={open} onClose={handleClose} BackdropProps={{ onClick: handleBackdropClick }}>
                        <Fade in={open}>
                            <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                                <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                    <Typography variant="subtitle1" component="h2" className='font-bold'>
                                        Manajemen Arsip Desain
                                    </Typography>
                                    <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
                                    {data.filter((item: any) => item.id === currIndex).map((data: any) => {
                                        return (
                                            <>
                                                <TextfieldLabel name='judul_desain' label='Judul Desain' defaultValue={data.judul_desain} onChange={(event: any) => form.set('judul_desain', event.target.value)} disabled={!editable} />
                                                <AutocompleteCustom name='name' label='User Pemohon' data={users} onChange={handleUserChange} getOptionLabel={(data) => data.name} defaultValue={users.find((item: any) => item.name == data.tb_account.name)} disabled={!editable} />
                                                <SelectLabel name='kategori' label='Kategori Desain' defaultValue={data.kategori} className='capitalize' onChange={(event: any) => form.set('kategori', event.target.value)} disabled={!editable} >
                                                    <MenuItem value='' disabled>Pilih salah satu</MenuItem>
                                                    {kategoriDesain.map((item, index) => <MenuItem value={item} key={index} className='capitalize'>{item}</MenuItem>)}
                                                </SelectLabel>
                                                <TextfieldLabel name='keterangan' label='Keterangan' defaultValue={data.keterangan} onChange={(event: any) => form.set('keterangan', event.target.value)} multiline minRows={3} maxRows={6} disabled={!editable} />
                                                <Stack direction='row' spacing={1}>
                                                    <FormControl className='w-full'>
                                                        <FormLabel className='mb-1 text-sm'>
                                                            Deadline Pengerjaan
                                                        </FormLabel>
                                                        <DateTimePickerBasic defaultValue={dayjs(dateTimeFormatter(data.deadline), 'DD/MM/YYYY hh:mm')} onChange={(value: any) => form.set('deadline', dateISOFormatter(value))} disabled={!editable} />
                                                    </FormControl>
                                                    <FormControl className='w-full'>
                                                        <SelectLabel name='status' label='Status' defaultValue={data.status} onChange={handleStatusChange} disabled={!editable}>
                                                            <MenuItem value='Pending'>Pending</MenuItem>
                                                            <MenuItem value='Approved & On Progress'>Approved & On Progress</MenuItem>
                                                            <MenuItem value='Completed'>Complete</MenuItem>
                                                            <MenuItem value='Rejected'>Rejected</MenuItem>
                                                        </SelectLabel>
                                                    </FormControl>
                                                </Stack>
                                                {lampiran === false ? (
                                                    <>
                                                        <FormLabel className='mb-2 text-sm'>Lampiran File</FormLabel>
                                                        <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                                                            {data.lampiran_file ? (
                                                                <Link href={`${api_file}/${data.lampiran_file}`} target='_blank'>
                                                                    <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{data.lampiran_file}</Typography>
                                                                </Link>
                                                            ) : (
                                                                <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                                                            )}
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLampiran(true)} disabled={!editable}>Change File</Button>
                                                        </Stack>
                                                    </>
                                                ) : (
                                                    <>
                                                        <FileUpload name='lampiran_file' label='Lampiran File' allowMultiple={false} allowReorder={false} onupdatefiles={(fileItems: FilePondFile[]) => {
                                                            const file = fileItems[0]?.file;
                                                            if (file) {
                                                                form.set('lampiran_file', file);
                                                            }
                                                        }} />
                                                        <Stack direction='row-reverse' className='-mt-2 mb-4'>
                                                            <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' onClick={() => setLampiran(false)} disabled={!editable}>Cancel</Button>
                                                        </Stack>
                                                    </>
                                                )}
                                                <DialogConfirmation title='Hapus' body='Apakah Anda yakin ingin menghapus data ini?' open={openHapus} onClose={handleDialogClose(setOpenHapus)}>
                                                    <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                                                        <ButtonBasic variant='contained' onClick={handleDialogClose(setOpenHapus)}>Batal</ButtonBasic>
                                                        <ButtonBasic variant='outlined' color='error' onClick={() => onDelete(id)}>Hapus</ButtonBasic>
                                                    </Stack>
                                                </DialogConfirmation>
                                                <DialogConfirmation title='Ubah Data' body='Apakah Anda yakin ingin menyimpan perubahan pada data ini?' open={openSimpan} onClose={handleDialogClose(setOpenSimpan)}>
                                                    <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
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

export const kategoriDesain = [
    'Leaflet',
    'Digital',
    'Spanduk'
];