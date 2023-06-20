import { useEffect, useCallback, useState } from 'react';
import EventCard from '@/common/components/molecules/EventCard';
import { Carousel } from 'react-daisyui';
import { getKalenderEvents } from '@/services/agenda';
import { dateFormatter, timeFormatter } from '@/common/utils/dateFormatter.util';

export default function DaisyCarousel() {
  const [cardData, setCardData] = useState<Array<any>>([]);
  const api_image = process.env.NEXT_PUBLIC_API_IMG;

  const getKalenderData = useCallback(async () => {
    const response = await getKalenderEvents();
    setCardData(response.data);
  }, [getKalenderEvents]);

  useEffect(() => {
    getKalenderData();
  }, []);
  return (
    <>
      <Carousel display='sequential' className='py-2'>
        {cardData ? cardData.map((item) => {
          return (
            <>
              <Carousel.Item className='mx-2'>
                <EventCard eventDate={dateFormatter(item.date)} eventTime={timeFormatter(item.date)} eventImage={`${api_image}/${item.image}`} eventTitle={item.title} eventDesc={item.description} eventLink={item.link} />
              </Carousel.Item>
            </>
          );
        }) : []}
      </Carousel>
    </>
  );
}
