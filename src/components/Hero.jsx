import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import eggs from "../assets/eggpack.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute w-1/2 h-screen z-10 left-0 hero-grad" >

      </div>
      <Swiper
        style={{ height: "100%", overflow: "hidden", widhth: "100vw" }}
        modules={[ Pagination, EffectFade, Autoplay ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }} 
        loop
        pagination={{ clickable: true }}
        scrollbar={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="w-full" effect="fade">
          <div className="w-full h-full flex items-center justify-center">
            <img
              className="h-[100%] max-w-fit w-auto xl:w-[100%] xl:max-w-full m-auto"
              src={eggs}
              alt="inganci.com/eggs.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100%] flex items-center justify-center bg-primary">
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100%] flex items-center justify-center bg-accent">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100%] flex items-center justify-center bg-accent1">
            slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
