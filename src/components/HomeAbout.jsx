import React from "react";
import homeabout from "../assets/homeabout.svg"

const HomeAbout = () => {
  return (
    <div className="min-h-screen w-full bg-white z-10 relative py-[4rem] pt-[8rem]">
      {/* MIDBAR  */}
      <div className="flex justify-between items-center absolute rounded-lg shadow-md left-1/2 -translate-x-1/2 -top-[46px] w-[80%] z-40 bg-white p-6">
        <p className="text-2xl font-[500] text-primary">
          Would you like to contact us directly or request a quote?
        </p>

        {/* BUTTONS QUOTE */}
        <div className="flex gap-6">
          <button className="hidden xl:block bg-primary py-3 w-[142px] rounded border-primary text-white text-sm hover:bg-white hover:text-primaryDark hover:shadow-md transition duration-200">
            Get in Touch
          </button>

          {/*  */}
          <button className="hidden xl:block bg-white py-3 w-[142px] rounded text-primaryDark border border-primaryDark text-sm hover:bg-white hover:border-white hover:text-primaryDark hover:shadow-md transition duration-200">
            Request Quote
          </button>
        </div>
      </div>

      <div className="container">
        {/* TAG AND TITLE */}
        <div className="flex items-center gap-4  text-primary mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-primary" />
          <h4 className="font-semibold ">ABOUT US</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div>
        {/* NEXT CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between py-[5rem] ">
          {/* LEFT SIDE WITH THE CONTENT */}
          <div className="flex flex-col gap-4 pr-[3rem] flex-1">
            <h3 className="text-[32px] font-semibold ">
              More About Mafi-Inganci
            </h3>
            <p className="text-typeGray text-sm 2xl:text-base">
              More About Mafi-Inganci It started in 1884 when Martinus Wulms
              opened a grocery store and soon expanded it into a true trading
              post in grains, eggs, cheese and butter. Over the past century,
              the family business has been passed down from generation to
              generation and has grown into a market leader in the Dutch egg
              trade.
              <br /> <br /> Wulms Egg Group guarantees quality, flexibility and
              professionalism. By pursuing this as the backbone of our
              organization, we have the necessary quality marks. This way you,
              as a customer, are assured that you are in good hands with Wulms.
            </p>
          </div>

          {/* RIGHT SIDE WITH THE PICTURES */}
          <div className="flex flex-1 relative ">
            <div className="absolute h-[60%] w-[26%] bg-accent rounded-md z-10 top-1/2 -translate-y-1/2 -right-[10%]"></div>
            <div className="w-full aspect-square flex items-center overflow-hidden rounded-lg relative">
              <img className="w-full" src={homeabout} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
