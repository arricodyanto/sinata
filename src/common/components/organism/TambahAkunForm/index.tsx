import { TTambahAkunFormProps } from '@/common/types';
import React, { useState } from 'react';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import SelectLabel from '../../atoms/SelectLabel';
import { MenuItem, Stack } from '@mui/material';
import ButtonBasic from '../../atoms/ButtonBasic';
import DialogConfirmation from '../../atoms/DialogConfirmation';
import { LoadingButton } from '@mui/lab';

export default function TambahAkunForm(props: TTambahAkunFormProps) {
    const { onSave, isLoading } = props;

    const [username, setUsername] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [no_identitas, setNo_identitas] = useState<string>('');
    const [unit, setUnit] = useState<string>('');
    const [role, setRole] = useState<string>('User');
    const [kontak, setKontak] = useState<string>('');

    const handleFormChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
    };

    const [open, setOpen] = useState(false);
    const handleDialogOpen = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleTambah = async () => {
        onSave({
            username, name, email, password, no_identitas, unit, role, kontak
        });
        setOpen(false);
    };

    return (
        <>
            <TextfieldLabel label={'Nama Pengguna'} value={username} onChange={handleFormChange(setUsername)} placeholder='johndoe123' />
            <TextfieldLabel label={'Nama Lenkap'} value={name} onChange={handleFormChange(setName)} placeholder='John Doe Smith' />
            <TextfieldLabel type='email' label={'Alamat Email'} value={email} onChange={handleFormChange(setEmail)} placeholder='johndoe@mail.com' />
            <TextfieldLabel type='password' label={'Kata Sandi'} value={password} onChange={handleFormChange(setPassword)} placeholder='Kata Sandi Anda' />
            <TextfieldLabel label={'Nomor Identitas'} value={no_identitas} onChange={handleFormChange(setNo_identitas)} placeholder='MM1231123' />
            <TextfieldLabel label={'Fakultas/Unit Kerja'} value={unit} onChange={handleFormChange(setUnit)} placeholder='Kantor Pusat UNS' />
            <SelectLabel label={'Role Akun'} value={role} onChange={handleFormChange(setRole)}>
                <MenuItem value='User'>User</MenuItem>
                <MenuItem value='Super Admin'>Super Admin</MenuItem>
                <MenuItem value='Admin Role 1'>Kepala Unit</MenuItem>
                <MenuItem value='Admin Role 2'>Front Office</MenuItem>
                <MenuItem value='Admin Role 3'>Media & Editor</MenuItem>
                <MenuItem value='Admin Role 4'>Desainer & Media Sosial</MenuItem>
                <MenuItem value='Admin Role 5'>IT & Website</MenuItem>
                <MenuItem value='Admin Role 6'>Subkoordinator</MenuItem>
                <MenuItem value='Admin Role 7'>Fotografer</MenuItem>
                <MenuItem value='Admin Role 8'>Pengarah Desainer & Videotron</MenuItem>
                <MenuItem value='Admin Role 9'>Jurnalis</MenuItem>
            </SelectLabel>
            <TextfieldLabel type='number' label={'Kontak'} value={kontak} onChange={handleFormChange(setKontak)} placeholder='62 800000000' />
            {!isLoading ? (
                <ButtonBasic type='submit' sx={{ marginTop: 2 }} variant='contained' onClick={handleDialogOpen}>Tambahkan Data</ButtonBasic>
            ) : (
                <LoadingButton loading={isLoading} type='submit' size='small' sx={{ marginTop: 2 }} variant='contained' className='rounded-md capitalize py-1 px-3'>Tambahkan Data</LoadingButton>
            )}
            <DialogConfirmation title='Tambahkan Data' body='Apakah Anda yakin ingin menambahkan data ini? Pastikan semua data telah terisi dengan benar.' open={open} onClose={handleDialogClose}>
                <Stack direction='row' spacing={1} className='mt-4 px-2 mb-4'>
                    <ButtonBasic variant='contained' onClick={handleDialogClose}>Batal</ButtonBasic>
                    <ButtonBasic variant='contained' color='success' onClick={handleTambah}>Tambahkan</ButtonBasic>
                </Stack>
            </DialogConfirmation>
        </>
    );
}
