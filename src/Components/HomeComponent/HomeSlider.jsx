// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css/bundle"
import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-flip"
import "./Slider.css";
import { Navigation, Pagination, Autoplay, EffectFade  } from "swiper";


const HomeSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        autoplay={{delay:1000}}
        spaceBetween={50}
        navigation
        effect={"fade"}
        pagination={{ clickable: true }}
        slidesPerView={1}
        
      >
        <SwiperSlide>
          <div className="slider-img">
            <img
              className="w-full h-[450px] relative"
              src="https://www.iu.ac.bd/public/images/50788454_1094674947408157_3273916302586019840_n.jpg"
              alt="img"
            />
            <div className="overlay"></div>
            <div className="slide-content absolute top-[40%] left-[15%] z-[auto]">
              <h1 className="text-5xl text-white">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-[16px] text-white mt-5 w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus suscipit facilis labore quidem consectetur!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <img
              className="w-full h-[450px] relative"
              src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.15752-9/343603200_1299540497577390_1479259319954609498_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8aVF3TytvLIAX9bYHi_&_nc_ht=scontent.fdac137-1.fna&oh=03_AdQD1YcXAa82gn3Uzq8Wb2w3AQKDd8hUuVfnvNxyd-vvqA&oe=649EF70B"
              alt="img"
            />
            <div className="overlay"></div>
            <div className="slide-content absolute top-[40%] left-[15%] z-[auto]">
              <h1 className="text-5xl text-white">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-[16px] text-white mt-5 w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus suscipit facilis labore quidem consectetur!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <img
              className="w-full h-[450px] relative"
              src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.15752-9/345131175_972140737564169_331539402001349021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ruAV9NVph8cAX_A1Qr6&_nc_ht=scontent.fdac137-1.fna&oh=03_AdRAJ6cF08G9v5e08SQ9mkiRn0d2MYbXo8OJSYv7Vd9JFg&oe=649ED638"
              alt="img"
            />
            <div className="overlay"></div>
            <div className="slide-content absolute top-[40%] left-[15%] z-[auto]">
              <h1 className="text-5xl text-white">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-[16px] text-white mt-5 w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus suscipit facilis labore quidem consectetur!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <img
              className="w-full h-[450px]  relative"
              src="https://scontent.fdac137-1.fna.fbcdn.net/v/t1.15752-9/343270640_800872481465778_1403355273479991441_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1k8y-YFBNA0AX99JAN3&_nc_ht=scontent.fdac137-1.fna&oh=03_AdSRHvao8xmG70DMHjozJiqsKwORPbQ9Qj4wOC2ObXu0CA&oe=649EF576"
              alt="img"
            />
            <div className="overlay"></div>
            <div className="slide-content absolute top-[40%] left-[15%] z-[auto]">
              <h1 className="text-5xl text-white">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-[16px] text-white mt-5 w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                possimus suscipit facilis labore quidem consectetur!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
