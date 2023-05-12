import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import eggs from "../assets/eggpack.jpg";
// import win1 from "../assets/window1.svg";
import win2 from "../assets/window2.svg";
import win3 from "../assets/window3.svg";
import win4 from "../assets/window4.svg";
import win5 from "../assets/window5.svg";

const SwiperHome = () => {
  return (
    <div className="w-full min-h-screen bg-gray2 swipebg flex items-center py-[6rem]">
      <div className="container">
        <div className="w-[90%] mx-auto mb-[2rem] flex items-center justify-between">
          {/* TAG AND TITLE */}
          <div className="flex items-center gap-4  text-primary">
            <hr className="w-[40px] h-[2px] border-none bg-primary" />
            <h4 className="font-semibold ">FOOTPRINT</h4>
            <hr className="w-[380px] h-[5px] border-none bg-accent" />
          </div>
          <div>
            <h3 className="text-[32px] text-white font-semibold text-center">
              Detail of manufacturing facility
            </h3>
          </div>
        </div>
        <div className="w-[80%] h-[80vh] mx-auto">
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
            {/* SLIDE 1 */}
            {/* <SwiperSlide className="w-full bg-gray2 " effect="fade">
              <div className="w-full h-full flex items-center justify-between">
                <div className="w-[48%]">
                  <img
                    className="w-full "
                    src={win1}
                    alt="https://www.inganci.com"
                  />
                </div>
                <div className="w-[48%] flex flex-col  gap-2 text-white">
                  <h2 className="font-semibold text-[32px]">OUR IP</h2>
                  <p className="text-sm 2xl:text-base text-typeGray">
                    Our unique approach focuses on four pillars that underpin
                    the agricultural technology of the future.
                  </p>
                </div>
              </div>
            </SwiperSlide> */}
            {/* SLIDE 2 */}
            <SwiperSlide className="w-full bg-gray2 " effect="fade">
              <div className="w-full h-full flex flex-row-reverse items-center justify-between">
                <div className="w-[48%]">
                  <img
                    className="w-full "
                    src={win2}
                    alt="https://www.inganci.com"
                  />
                </div>
                <div className="w-[48%] flex flex-col gap-2 text-white">
                  <h2 className="font-semibold text-[32px]">
                    Facility and Lighting Design
                  </h2>
                  <p className="text-sm 2xl:text-base text-typeGray">
                    Our facilities are constructed to allow all of the benefits
                    of natural sunlight, while maintaining a sealed, positive
                    pressure environment to deliver adjusted optimal conditions
                    to crops in terms of temperature, humidity, velocity,
                    filtration and sanitation of airflow. Along with providing
                    natural light for the plants, we designed what we believe is
                    near ideal supplemental lighting technology to achieve
                    unprecedented luminous efficacy, providing distribution of
                    the full light spectrum for the best growth conditions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            SLIDE 3
            <SwiperSlide className="w-full bg-gray2 " effect="fade">
              <div className="w-full h-full flex flex-row-reverse items-center justify-between">
                <div className="w-[48%]">
                  <img
                    className="w-full "
                    src={win3}
                    alt="https://www.inganci.com"
                  />
                </div>
                <div className="w-[48%] flex flex-col gap-2 text-white">
                  <h2 className="font-semibold text-[32px]">
                    Facility and Lighting Design
                  </h2>
                  <p className="text-sm 2xl:text-base text-typeGray">
                    Our facilities are constructed to allow all of the benefits
                    of natural sunlight, while maintaining a sealed, positive
                    pressure environment to deliver adjusted optimal conditions
                    to crops in terms of temperature, humidity, velocity,
                    filtration and sanitation of airflow. Along with providing
                    natural light for the plants, we designed what we believe is
                    near ideal supplemental lighting technology to achieve
                    unprecedented luminous efficacy, providing distribution of
                    the full light spectrum for the best growth conditions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* SLIDE 4 */}
            <SwiperSlide className="w-full bg-gray2 " effect="fade">
              <div className="w-full h-full flex flex-row-reverse items-center justify-between">
                <div className="w-[48%]">
                  <img
                    className="w-full "
                    src={win4}
                    alt="https://www.inganci.com"
                  />
                </div>
                <div className="w-[48%] flex flex-col gap-2 text-white">
                  <h2 className="font-semibold text-[32px]">
                    Facility and Lighting Design
                  </h2>
                  <p className="text-sm 2xl:text-base text-typeGray">
                    Our facilities are constructed to allow all of the benefits
                    of natural sunlight, while maintaining a sealed, positive
                    pressure environment to deliver adjusted optimal conditions
                    to crops in terms of temperature, humidity, velocity,
                    filtration and sanitation of airflow. Along with providing
                    natural light for the plants, we designed what we believe is
                    near ideal supplemental lighting technology to achieve
                    unprecedented luminous efficacy, providing distribution of
                    the full light spectrum for the best growth conditions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            {/* SLIDE 5 */}
            <SwiperSlide className="w-full bg-gray2" effect="fade">
              <div className="w-full h-full flex flex-row-reverse items-center justify-between">
                <div className="w-[48%]">
                  <img
                    className="w-full "
                    src={win5}
                    alt="https://www.inganci.com"
                  />
                </div>
                <div className="w-[48%] flex flex-col gap-2 text-white">
                  <h2 className="font-semibold text-[32px]">
                    Facility and Lighting Design
                  </h2>
                  <p className="text-sm 2xl:text-base text-typeGray">
                    Our facilities are constructed to allow all of the benefits
                    of natural sunlight, while maintaining a sealed, positive
                    pressure environment to deliver adjusted optimal conditions
                    to crops in terms of temperature, humidity, velocity,
                    filtration and sanitation of airflow. Along with providing
                    natural light for the plants, we designed what we believe is
                    near ideal supplemental lighting technology to achieve
                    unprecedented luminous efficacy, providing distribution of
                    the full light spectrum for the best growth conditions.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperHome;
