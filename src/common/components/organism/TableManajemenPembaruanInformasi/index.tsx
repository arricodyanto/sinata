import ButtonIcon from '@/common/components/atoms/ButtonIcon';
import TableData from '@/common/components/molecules/TableData';
import { getAllLayananPeminformasi } from '@/services/layanan-peminformasi';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Chip, Fade, FormLabel, IconButton, Modal, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import ButtonBasic from '../../atoms/ButtonBasic';
import TextfieldLabel from '../../atoms/TextfieldLabel';
import TableDataEmpty from '../../molecules/TableDataSkeleton/TableDataEmpty';
import { dateStringFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';

export default function TableManajemenPembaruanInformasi() {
  const { isReady, push } = useRouter();

  const headers = [
    'Judul Permohonan', 'User Pemohon', 'Bahan Publikasi', 'Surat Permohonan', 'Disposisi', 'Luaran Layanan', 'Aksi', 'Status'
  ];
  const columns = [
    { id: 1, label: 'judul_permohonan' },
    { id: 2, label: 'name', source: 'tb_account' },
    { id: 3, label: 'bahan_publikasi' },
    { id: 4, label: 'surat_permohonan' },
    { id: 5, label: 'disposisi' },
    { id: 6, label: 'luaran_layanan' },
  ];
  const api_file = process.env.NEXT_PUBLIC_API_IMG;

  const [data, setData] = React.useState<Array<any>>([]);

  const [open, setOpen] = React.useState(false);
  const [currIndex, setCurrIndex] = React.useState(0);
  const handleOpen = (id: number) => {
    setOpen(true);
    setCurrIndex(id);
  };
  const handleClose = () => setOpen(false);

  const [page, setPage] = useState<number>(0);
  const [totalRow, setTotalRow] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (newPage: number) => {
    setPage(newPage + 1);
  };

  const handleChangeLimit = (limit: number) => {
    setRowsPerPage(limit);
  };

  const getPeminformasi = useCallback(async () => {
    const params = `limit=${rowsPerPage}&page=${page}`;
    const response = await getAllLayananPeminformasi(params);
    setData(response.data);
    setTotalRow(response.totalRow);
    setRowsPerPage(response.rowsPerPage);
  }, [getAllLayananPeminformasi, page, rowsPerPage]);

  useEffect(() => {
    if (isReady) {
      getPeminformasi();
    }
  }, [isReady, page, rowsPerPage]);

  return (
    <>
      {data.length === 0 ?
        <>
          <TableDataEmpty headers={headers}
            addButton={
              <Link href='/admins/riwayat-ajuan/Layanan Pembaruan Informasi/tambah'>
                <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
              </Link>
            } />
        </>
        :
        <TableData headers={headers} columns={columns} rows={data} status={true} actionOnClick={handleOpen}
          page={page} limit={rowsPerPage} totalRow={totalRow} changedPage={handleChangePage} changedLimit={handleChangeLimit}
          addButton={
            <Link href='/admins/riwayat-ajuan/Layanan Pembaruan Informasi/tambah'>
              <ButtonBasic variant='contained'>Tambahkan Data</ButtonBasic>
            </Link>
          } />
      }      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md xs:w-[calc(100%-40px)] md:w-[800px]'>
            <Stack direction='row' justifyContent='space-between' className='sticky py-2 px-6 bg-gray-100 rounded-t-md'>
              <Typography id="transition-modal-title" variant="subtitle1" component="h2" className='font-bold'>
                Manajemen Layanan Pembaruan Informasi di Laman UNS
              </Typography>
              <IconButton onClick={handleClose} aria-label='close' size='small' className='hover:text-primary'>
                <CloseIcon fontSize='small' />
              </IconButton>
            </Stack>
            <Box sx={{ mt: 2 }} className='max-h-[80vh] overflow-y-auto pb-4 px-6'>
              {data.filter(row => row.id === currIndex).map(item => {
                return (
                  <>
                    <TextfieldLabel label='Judul Permohonan' value={item.judul_permohonan} InputProps={{ readOnly: true }} />
                    <TextfieldLabel label='User Pemohon' value={item.tb_account.name} InputProps={{ readOnly: true }} maxRows={3} />
                    <FormLabel className='mb-2 text-sm'>Bahan Publikasi</FormLabel>
                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                      {item.bahan_publikasi ? (
                        <Link href={`${api_file}/${item.bahan_publikasi}`} target='_blank'>
                          <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.bahan_publikasi}</Typography>
                        </Link>
                      ) : (
                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                      )}
                      <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                    </Stack>
                    <FormLabel className='mb-2 text-sm'>Surat Permohonan</FormLabel>
                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                      {item.surat_permohonan ? (
                        <Link href={`${api_file}/${item.surat_permohonan}`} target='_blank'>
                          <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.surat_permohonan}</Typography>
                        </Link>
                      ) : (
                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                      )}
                      <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                    </Stack>
                    <FormLabel className='mb-2 text-sm'>Disposisi</FormLabel>
                    <Stack direction='row' spacing={1} justifyContent='space-between' alignItems='center' className='mb-4'>
                      {item.disposisi ? (
                        <Link href={`${api_file}/${item.disposisi}`} target='_blank'>
                          <Typography className='text-sm hover:text-primary hover:underline hover:underline-offset-2 transition'>{item.disposisi}</Typography>
                        </Link>
                      ) : (
                        <Typography variant='body2' className='italic'>Belum ada data.</Typography>
                      )}
                      <Button size='small' disableElevation className='rounded-md capitalize py-1 px-3' disabled>Change File</Button>
                    </Stack>
                    <TextfieldLabel label={'Luaran Layanan'} value={item.luaran_layanan} multiline maxRows={8} InputProps={{ readOnly: true }} />
                    <Stack direction='row' spacing={1} className='mb-2 mt-6' justifyContent='space-between' alignItems={'center'}>
                      <Stack direction={'row'} spacing={1}>
                        <Typography variant='subtitle2' className='font-bold'>Status</Typography>
                        {
                          item.status === 'Pending' ? <Chip label={item.status} size='small' className='bg-pending text-white text-xs' />
                            : item.status === 'Approved & On Progress' ? <Chip label={item.status} size='small' className='bg-primary text-white text-xs' />
                              : item.status === 'Completed' ? <Chip label={item.status} size='small' className='bg-complete text-white text-xs' />
                                : item.status === 'Rejected' ? <Chip label={item.status} size='small' className='bg-error text-white text-xs' />
                                  : undefined
                        }
                      </Stack>
                      <Typography variant='caption' className='italic' marginTop={-4}>Diajukan pada {dateStringFormatter(item.createdAt)} - {timeFormatter(item.createdAt)} WIB</Typography>
                    </Stack>
                  </>
                );
              })}
            </Box>
            <Stack direction='row' justifyContent='flex-end' spacing={1} margin={2} marginBottom={1}>
              <ButtonIcon variant='contained' icon={<CancelIcon className='-mr-1' />} onClick={handleClose}>Tutup</ButtonIcon>
              <ButtonIcon variant='outlined' icon={<ArrowForwardIcon className='-mr-1' />} onClick={() => push(`/admins/riwayat-ajuan/Layanan Pembaruan Informasi/${currIndex}`)}>Lihat Ajuan</ButtonIcon>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
