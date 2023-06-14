import { useCallback, useEffect, useState, useRef} from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DayCalendarSkeleton, LocalizationProvider, PickersDay, PickersDayProps, StaticDatePicker } from '@mui/x-date-pickers';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import event from '@/json/events.json'
import { Box, Divider, Modal, Typography } from '@mui/material';
import EventModalItems from '../EventModalItems';
import { getKalenderEvents } from '@/services/agenda';
import { dateFormatter, oneDigitdateFormatter } from '@/common/utils/dateFormatter.util';

export default function EventCalendar() {
  const initialValue = dayjs()
  const getBulan = initialValue.month()+1
  const getTahun = initialValue.year()

  const [kalenderData, setKalenderData] = useState<Array<any>>([])

  const getKalenderData = useCallback(async () => {
    const data = await getKalenderEvents()
    setKalenderData(data)
  }, [getKalenderEvents])

  useEffect(() => {
    getKalenderData()
  }, [getKalenderData])

  // get array of object from db (json)
  // const tanggalKalender = kalenderData.map((item) => item.tb_kegiatan.tgl_kegiatan)
  const tanggalKalender = kalenderData ? kalenderData.map((item) => oneDigitdateFormatter(item.date)) : [];
  
  // filter array of object from db (json) by current month
  const filterMonthdb = tanggalKalender.filter((item:any) => item.split('/')[1] == getBulan.toString())
  // const splitDate = filterMonthdb.map((item) => item.split('/')[1] == currentMonth.toString())
  // console.log(filterMonthdb)
  
  // filter array from filterMonthdb by current year
  const filterYeardb = filterMonthdb.filter((item:any) => item.split('/')[2] == getTahun.toString())
  
  // get only date from array of object from db (json)
  const stringDate = filterYeardb.map((item:any) => item.split('/')[0])

  // convert date string to number
  const highlightDays = stringDate.map(Number)

  const [fetchP, setFetchP] = useState<number[]>(highlightDays)
  const requestAbortController = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState<Array<number>>([]);
  const [value, setValue] = useState<Dayjs | null>(initialValue)
  const [open, setOpen] = useState(false)
  
  // define type of eventdb
  const [filteredDate, setFilteredDate] = useState<Array<any>>([])

  function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }, highlightDays: number[]) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
      const timeout = setTimeout(() => {
        // const daysInMonth = date.daysInMonth();
        const daysToHighlight = highlightDays;
        
        const dateValue = value?.format('D-M-YYYY')
        // console.log(highlightDays)
  
        resolve({ daysToHighlight });
      }, 500);
  
      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException('aborted', 'AbortError'));
      };
    });
  }

  const fetchHighlightedDays = (date: Dayjs, highlightDays: number[]) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    }, highlightDays)
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue, fetchP);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date, fetchP);
    const getCurrentMonth = date.month()+1;
    const getCurrentYear = date.year()
    filterEvent(getCurrentMonth, getCurrentYear)
    // console.log(getCurrentYear)
  };

  const handleDateChange = (newValue:any) => {
    setValue(newValue);
    filterModal(newValue);
  }

  function filterModal(newValue:any) {
    // convert date to local string (20/12/2023 15:15:20)
    const dateString = new Date(newValue).toLocaleDateString('it-IT')
    const filtered = kalenderData.filter(t=>oneDigitdateFormatter(t.date) === dateString);
    // console.log(filtered)
    { 
        if (filtered.length !== 0) {
            { setOpen(true)}
            setFilteredDate(filtered)
    // console.log(event.date)
        } else {
            { setOpen(false) }
        }
    }
  }

  function filterEvent(getCurrentMonth:number, getCurrentYear:number) {
    // get array of object from db (json)
    const tanggalKalender = kalenderData ? kalenderData.map((item) => oneDigitdateFormatter(item.date)) : []

    // get current month from handleMonthChange
    const currentMonth = getCurrentMonth
    // console.log(currentMonth)

    // get current year from handleMonthChange
    const currentYear = getCurrentYear
    // console.log(currentYear)

    // filter array of object from db (json) by current month
    const filterMonthdb = tanggalKalender.filter((item) => item.split('/')[1] == currentMonth.toString())
    // const splitDate = filterMonthdb.map((item) => item.split('/')[1] == currentMonth.toString())

    // filter array from filterMonthdb by current year
    const filterYeardb = filterMonthdb.filter((item) => item.split('/')[2] == currentYear.toString())
    // console.log(filterYeardb)
    
    // get only date from array of object from db (json)
    const stringDate = filterYeardb.map((item) => item.split('/')[0])

    // convert date string to number
    const highlightDays = stringDate.map(Number)

    // console.log(highlightDays)
    // setHighlightedDays(highlightDays)
    const date = dayjs()
    fetchHighlightedDays(date, highlightDays)
    setHighlightedDays(highlightDays)
}

function ServerDay(props: PickersDayProps<Dayjs> & { highlighDays?: number[] }) {
  const { highlighDays = highlightedDays, day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? <FiberManualRecordIcon sx={{fontSize: 12}} color='primary' />  : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        className='max-w-80 h-[23rem]'
        openTo='day'
        displayStaticWrapperAs='desktop'
        value={value}
        loading={isLoading}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        componentsProps={{
            actionBar: {
                actions: ['today'],
            },
        }}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay
        }}
      />
      
      <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ width: {xs: 300, sm: 380, md: 512}, maxHeight: 530}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border p-4 rounded-lg overflow-y-auto'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    List Agenda
                </Typography>
                <Divider className='mt-3'/>
                <Typography id="modal-modal-description">
                    <EventModalItems filteredDate={filteredDate} />
                </Typography>
            </Box>
        </Modal>
    </LocalizationProvider>
  );
}