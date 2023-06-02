// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
import { Navigation, Pagination, Autoplay, EffectCoverflow  } from "swiper";
import AcievementImg from './AcievementImg';

const Achievement = () => {
  return (
    <div className='container mx-auto mb-10'>
        <h1 className='text-xl font-bold my-10'>Achievement</h1>
        <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      loop={true}
    
      autoplay={{delay:1000}}
      spaceBetween={0}
      navigation
      effect={"coverflow"}
      coverflowEffect={
        {
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5
        }
      }
      slidesPerView={3}
      pagination={{ clickable: true }}
     
    >
      <SwiperSlide>
        <AcievementImg></AcievementImg>
      </SwiperSlide>
      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>
      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>
      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>

      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>
      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>



      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>

      <SwiperSlide>
      <AcievementImg></AcievementImg>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}

export default Achievement