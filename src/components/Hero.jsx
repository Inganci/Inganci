import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import eggs from "../assets/eggpack.jpg";

const Hero = () => {
  return (
    <div className=" z-10 w-full h-screen overflow-hidden relative">
      {/* SIDEBAR WITH CONTENT */}
      <div className="absolute w-full lg:w-1/2 flex items-center h-screen z-10 left-0 hero-grad">
        {/* CONTENT WRAPPER */}
        <div className="w-full md:max-w-[320px] lg:max-w-[384px] xl:max-w-[640px] 2xl:max-w-[768px] md:mx-auto xl:ml-auto 2xl:ml-auto xl:mr-0 2xl:mr-0">
          {/* Tag and TEXT */}
          <div className="flex items-center gap-4  text-primary mt-[2rem]">
            <hr className="w-[40px] h-[2px] border-none bg-primary" />
            <h4>LIQUID AND POWDERED EGG PRODUCTS</h4>
          </div>

          {/* HEADER TEXT */}
          <div className="mb-[2rem]">
            <h1 className=" text-[56px] 2xl:text-[72px] font-bold text-white leading-[56px] 2xl:leading-[76px] mb-[26px]">
              Mafi-Inganci <br /> Egg Company
            </h1>
            <p className="text-white opacity-90 font-normal w-[70%] ">
              The brand of egg products solutions from one of the leading
              chicken egg producers
            </p>
          </div>

          {/* BUTTONS CTAS */}
          <div className="flex items-center gap-4">
            {/* GREEN */}
            <button className="hidden xl:block bg-primary py-3 w-[142px] rounded text-sm hover:bg-white hover:text-primaryDark transition duration-200">
              Products
            </button>
            {/* YELLOW */}
            <button className="hidden xl:block bg-accent py-3 w-[142px] rounded text-sm text-primaryDark hover:bg-white hover:text-primaryDark transition duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      
      <Swiper
        style={{ height: "100%", overflow: "hidden", widhth: "100vw" }}
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
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
        <SwiperSlide effect="fade">
          <div className="w-full h-[100%] flex items-center justify-center bg-primary">
            slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide effect="fade">
          <div className="w-full h-[100%] flex items-center justify-center bg-accent">
            slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide effect="fade">
          <div className="w-full h-[100%] flex items-center justify-center bg-accent1">
            slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
