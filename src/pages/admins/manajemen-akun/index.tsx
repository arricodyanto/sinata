import ButtonBasic from '@/common/components/atoms/ButtonBasic';
import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import DialogConfirmation from '@/common/components/atoms/DialogConfirmation';
import SelectLabel from '@/common/components/atoms/SelectLabel';
import TextfieldLabel from '@/common/components/atoms/TextfieldLabel';
import TitlePage from '@/common/components/atoms/TitlePage';
import HeaderBreadcrumbs from '@/common/components/molecules/HeaderBreadcrumbs';
import TableData from '@/common/components/molecules/TableData';
import TableDataEmpty from '@/common/components/molecules/TableDataSkeleton/TableDataEmpty';
import DashboardPanel from '@/common/components/organism/DashboardPanel';
import { authAdmin } from '@/common/middlewares/auth';
import { dateStringFormatter } from '@/common/utils/dateFormatter.util';
import { deleteOneUser, getAllUsers, updateOneUser } from '@/services/accounts';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Fade, IconButton, MenuItem, Modal, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { listMenuAdmin } from '../dashboard';

export default function ManajemenAkun() {
    const { isReady, push } = useRouter();

    const headers = [
        'Username', 'Nama Lengkap', 'Alamat Email', 'No Identitas', 'Unit/Fakultas', 'Role', 'Kontak', 'Aksi'
    ];
    const columns = [
        { id: 1, label: 'username' },
        { id: 2, label: 'name' },
        { id: 3, label: 'email' },
        { id: 4, label: 'no_identitas' },
        { id: 5, label: 'unit' },
        { id: 6, label: 'role' },
        { id: 7, label: 'kontak' }
    ];

    const [data, setData] = useState<Array<any>>([]);
    const [open, setOpen] = useState(false);
    const [currIndex, setCurrIndex] = useState(0);
    const handleOpen = (id: number) => {
        setOpen(true);
        setCurrIndex(id);
    };
    const handleClose = () => setOpen(false);

    const [page, setPage] = useState<number>(0);
    const [totalRow, setTotalRow] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);

    const [originalForm, setOriginalForm] = useState<object>({});
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [no_identitas, setNo_identitas] = useState<string>('');
    const [unit, setUnit] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [kontak, setKontak] = useState<string>('');

    const handleChangePage = (newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeLimit = (limit: number) => {
        setRowsPerPage(limit);
    };

    const getAccount = useCallback(async () => {
        const params = `limit=${rowsPerPage}&page=${page}`;
        const response = await getAllUsers(params);
        setData(response.data);
        setTotalRow(response.totalRow);
        setRowsPerPage(response.rowsPerPage);
    }, [getAllUsers, page, rowsPerPage]);

    useEffect(() => {
        if (isReady) {
            getAccount();
        }
    }, [isReady, page, rowsPerPage]);

    useEffect(() => {
        if (data.length > 0) {
            const initialData = data.find((item: any) => item.id === currIndex);
            if (initialData) {
                setOriginalForm({
                    username: initialData.username,
                    name: initialData.name,
                    email: initialData.email,
                    no_identitas: initialData.no_identitas,
                    unit: initialData.unit,
                    role: initialData.role,
                    kontak: initialData.kontak,
                });
                setUsername(initialData.username);
                setName(initialData.name);
                setEmail(initialData.email);
                setNo_identitas(initialData.no_identitas);
                setUnit(initialData.unit);
                setRole(initialData.role);
                setKontak(initialData.kontak);
            }
        }
    }, [data, currIndex]);

    const id = currIndex.toString();

    const onSave = async () => {
        const formattedForm = { username, name, email, no_identitas, unit, role, kontak };
        const isSame = JSON.stringify(formattedForm) === JSON.stringify(originalForm) ? true : false;

        if (isSame) {
            toast.warning('Tidak ada perubahan pada data.', {
                theme: 'colored'
            });
            handleCancelEdit();
        }
        if (!isSame) {
            const response = await updateOneUser(id, formattedForm);
            if (response.error === true) {
                toast.error(response.message, {
                    theme: 'colored',
                });
                handleCancelEdit();
            }
            if (response.error === false) {
                toast.success(response.message, {
                    theme: 'colored'
                });
                window.location.reload();
            }
            handleCancelEdit();
        }
    };

    const onDelete = async (id: string) => {
        const response = await deleteOneUser(id);
        if (response.error === false) {
            toast.success('Data berhasil dihapus.', {
                theme: 'colored'
            });
            window.location.reload();
        }
        if (response.error === true) {
            toast.error(response.message, {
                theme: 'colored'
            });
        }
    };

    const [openHapus, setOpenHapus] = useState(false);
    const [openSimpan, setOpenSimpan] = useState(false);
    const handleDialogOpen = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(true);
    };
    const handleDialogClose = (setState: React.Dispatch<React.SetStateAction<boolean>>) => () => {
        setState(false);
    };

    const [editable, setEditable] = useState(false);
    const handleEdit = () => {
        setEditable(true);
    };

    const handleCancelEdit = () => {
        setEditable(false);
        setOpen(false);
        setOpenSimpan(false);
    };

    return (
        <Box className='bg-grey'>
            <TitlePage title='Manajemen Akun Pengguna - Sinata' />
            <DashboardPanel listMenu={listMenuAdmin}>
                <HeaderBreadcrumbs pageHeader='Manajemen Akun Pengguna' currentPage='Manajemen Akun' />
                <Paper className='shadow-md xs:p-4 md:p-6'>
                    {data.length === 0 ?
                        <>
                            <TableDataEmpty headers={headers}
                                addButton={
                                    <Link href='/admins/manajemen-akun/tambah'>
                                        <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                                    </Link>
                                } />
                        </>
                        :
                        <TableData headers={headers} columns={columns} rows={data} status={false} actionOnClick={handleOpen}
                            page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
                            addButton={
                                <Link href='/admins/manajemen-akun/tambah'>
                                    <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
                                </Link>
                            } />
                    }
                    <Modal open={open} onClose={handleClose}>
                        <Fade in={open}>
                            <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
                                <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
                                    <Typography variant="subtitle1" component="h2" className='font-bold'>
                                        Manajemen Akun Pengguna
                                    </Typography>
                                    <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                                        <CloseIcon fontSize='small' />
                                    </IconButton>
                                </Stack>
                                <Box className='mt-2 max-h-[80vh] overflow-y-auto pb-4 px-6'>
                                    {data.filter((row: any) => row.id === currIndex).map((item: any) => {
                                        return (
                                            <>
                                                <Stack direction='row' spacing={1} className='mb-2'>
                                                    <TextfieldLabel name='username' label='Username' value={username} onChange={(event: any) => setUsername(event.target.value)} disabled={!editable} />
                                                    <TextfieldLabel name='name' label='Nama Lengkap' value={name} onChange={(event: any) => setName(event.target.value)} disabled={!editable} />
                                                </Stack>
                                                <TextfieldLabel type='email' name='email' label='Alamat Email' value={email} onChange={(event: any) => setEmail(event.target.value)} disabled={!editable} />
                                                <TextfieldLabel name='no_identitas' label='No Identitas' value={no_identitas} onChange={(event: any) => setNo_identitas(event.target.value)} disabled={!editable} />
                                                <TextfieldLabel name='unit' label='Unit/Fakultas' value={unit} onChange={(event: any) => setUnit(event.target.value)} disabled={!editable} />
                                                <SelectLabel name='role' label='Role Akun' value={role} onChange={(event: any) => setRole(event.target.value)} disabled={!editable}>
                                                    <MenuItem value='User'>User</MenuItem>
                                                    <MenuItem value='Super Admin'>Super Admin</MenuItem>
                                                    {/* <MenuItem value='Admin Role 1'>Admin Role 1</MenuItem>
                                                    <MenuItem value='Admin Role 2'>Admin Role 2</MenuItem>
                                                    <MenuItem value='Admin Role 3'>Admin Role 3</MenuItem>
                                                    <MenuItem value='Admin Role 4'>Admin Role 4</MenuItem>
                                                    <MenuItem value='Admin Role 5'>Admin Role 5</MenuItem>
                                                    <MenuItem value='Admin Role 6'>Admin Role 6</MenuItem>
                                                    <MenuItem value='Admin Role 7'>Admin Role 7</MenuItem>
                                                    <MenuItem value='Admin Role 8'>Admin Role 8</MenuItem>
                                                    <MenuItem value='Admin Role 9'>Admin Role 9</MenuItem> */}
                                                </SelectLabel>
                                                <TextfieldLabel type='number' name='kontak' label='Kontak' value={kontak} onChange={(event: any) => setKontak(event.target.value)} disabled={!editable} />
                                                <Typography variant='caption' className='italic mb-4'>Terdaftar sejak {dateStringFormatter(item.createdAt)}</Typography>
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
