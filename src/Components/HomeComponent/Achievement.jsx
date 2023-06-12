// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
// import AcievementImg from "./AcievementImg";

const Achievement = () => {
  return (
    <div className="container mx-auto mb-10">
      <h1 className="text-xl font-bold my-10">Achievement</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        loop={true}
        autoplay={{ delay: 1000 }}
        spaceBetween={0}
        navigation
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/HxdRZY9/1.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">Science Fair & Book Fair</h3>

                  <p className="text-sm">First Prise</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/JtCwwn4/ac02.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">University Cyber Drill</h3>

                  <p className="text-sm">Runners up</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/1ZHZRJY/ac3.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">Take first prize from the prime minister</h3>

                  <p className="text-sm">Badminton</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/JtCwwn4/ac02.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">University Cyber Drill</h3>

                  <p className="text-sm">Runners up</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/HxdRZY9/1.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">Science and Book fair</h3>

                  <p className="text-sm">First Price</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
       <SwiperSlide>
          <div>
            <a
              href="#"
              className="relative block overflow-hidden rounded-xl bg-[url(https://i.ibb.co/JtCwwn4/ac02.jpg)] bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 bg-black/25"></div>

              <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
                <div className="sm:pt-18 pt-12 text-white lg:pt-24">
                  <h3 className="text-xl font-bold sm:text-2xl">University Cyber Drill</h3>

                  <p className="text-sm">Runners up</p>
                </div>
              </div>
            </a>
          </div>
       </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Achievement;
