import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import ContainerPage from "@/common/components/atoms/ContainerPage";
import PageTitle from "@/common/components/atoms/PageTitle";
import HeaderPages from "@/common/components/molecules/HeaderPages";
import EventCalendar from "@/common/components/organism/EventCalendar";
import Footer from "@/common/components/organism/Footer";
import TodaysEvent from "@/common/components/organism/TodaysEvent";
import TomorrowsEvent from "@/common/components/organism/TomorrowsEvent";
import eventData from '@/json/events.json'
import EventCardV2 from "@/common/components/molecules/EventCardV2";

export default function Events() {
  const [min, setMin] = React.useState(0)
  const [max, setMax] = React.useState(8)
  const count = Math.ceil(eventData.length / 9)

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
      if (value >= 2) {
          setMin((value - 1) * 9)
          setMax(((value - 1) * 9)+8)
      } else if ( value == 1) {
          setMin(0)
          setMax(8)
      }
    }
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
            { eventData.slice(0).reverse().filter((item, index) => index >= min && index <= max).map(item => {
                return (
                    <>
                        <Grid item key={item.id} xs={12} md={4}>
                            <EventCardV2 image={item.image} visibility={item.sifat} publisher={item.publisher} avatar={item.avatar} title={item.title}
                              description={item.description} date={item.date} time={item.time} location={item.location} />
                        </Grid>
                    </>
                )
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
