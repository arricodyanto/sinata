/* eslint-disable */


import ContainerPage from "@/common/components/atoms/ContainerPage";
import PageTitle from "@/common/components/atoms/PageTitle";
import EventCardV2 from "@/common/components/molecules/EventCardV2";
import HeaderPages from "@/common/components/molecules/HeaderPages";
import EventCalendar from "@/common/components/organism/EventCalendar";
import Footer from "@/common/components/organism/Footer";
import TodaysEvent from "@/common/components/organism/TodaysEvent";
import TomorrowsEvent from "@/common/components/organism/TomorrowsEvent";
import { dateStringFormatter, timeStrictFormatter } from "@/common/utils/dateFormatter.util";
import { getAllLayananPublikasiAgenda } from "@/services/layanan-pubagenda";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

export default function Events() {
  const [agenda, setAgenda] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalRow, setTotalRow] = useState<number>(0);

  const count = Math.ceil(totalRow / 12);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getAgenda = useCallback(async () => {
    const params = `limit=12&page=${page}&status=Completed`;
    const response = await getAllLayananPublikasiAgenda(params);
    setAgenda(response.data);
    setTotalRow(response.totalRow);
  }, [page, setAgenda]);

  useEffect(() => {
    getAgenda();
  }, [getAgenda]);

  useEffect(() => {
    getAgenda();
  }, [page]);

  const api_image = process.env.NEXT_PUBLIC_API_IMG;
  return (
    <Box className="bg-white">
      <HeaderPages
        titlePage="Agenda - Sistem Informasi Manajemen Pelayanan dan Berita"
        srcImg="/images/bg-events.jpg"
      />
      <ContainerPage>
        <PageTitle title="Agenda" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="justify-center flex">
            <EventCalendar />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="font-bold mb-4" color="primary">
              Agenda Hari Ini
            </Typography>
            <TodaysEvent />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="font-bold mb-4" color="primary">
              Agenda Selanjutnya
            </Typography>
            <TomorrowsEvent />
          </Grid>
        </Grid>
        <Box className="mt-10">
          <Typography variant="h5" className="font-bold mb-4" color="primary">
            Semua Agenda
          </Typography>
          <Grid container spacing={3}>
            {agenda.map(item => {
              return (
                <Grid item key={item.id} xs={12} md={4}>
                  <EventCardV2 id={item.id} image={`${api_image}/${item.leaflet_kegiatan}`} visibility={item.tb_kegiatan.sifat_kegiatan}
                    publisher={item.tb_kegiatan.tb_account.name} avatar={item.tb_kegiatan.tb_account.img_profil} title={item.tb_kegiatan.judul_kegiatan} description={item.caption}
                    date={dateStringFormatter(item.tb_kegiatan.tgl_kegiatan)} time={timeStrictFormatter(item.tb_kegiatan.waktu_kegiatan)} location={item.tb_kegiatan.tempat_kegiatan} />
                </Grid>
              );
            })}
          </Grid>
          <Stack className='mt-6 mb-4 grid justify-center'>
            <Pagination count={count} color='primary' size='small' onChange={handleChangePage} showFirstButton showLastButton />
          </Stack>
        </Box>
      </ContainerPage>
      <Footer />
    </Box>
  );
}
