import React from "react";
import image from "../assets/homeabout.svg";
import eggs from "../assets/eggpack.jpg";
import { Link } from "react-router-dom";

const Insights = () => {
  return (
    <div className="h-screen flex items-center w-full bg-primary overflow-hidden z-10 relative">
      <div className="container">
        {/* TAG AND TITLE */}
        <div className="flex items-center gap-4  text-white  mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-white" />
          <h4 className="font-semibold ">INSIGHTS</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div>

        {/* THE BACKGROUND SHAPE */}
        {/* CARDS CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between py-[5rem] relative">
          {/* LEFT ABSOLUTE DESIGN */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[90%] w-full h-[40%] bg-accent rounded-xl"></div>
          {/* RIGHT ABSOLUTE DESIGN */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[90%] -z10 w-full h-[40%] bg-accent rounded-xl"></div>

          {/* CARD ONE */}
          <div className="w-[32%] aspect-square rounded-md shadow-lg z-10 overflow-hidden flex flex-col items-center">
            {/* TOP WITH THE IMAGE */}
            <div className="w-full h-[55%] bg-blue-300 overflow-hidden">
              <img
                className="w-[100%] min-w-[110%]  m-auto "
                src={eggs}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 flex flex-col items-start justify-between">
              <h4 className="text-primary text-xs">OUR BRANDS</h4>
              <h2>Q & A on UN(THINK): Sustainability and Provenance</h2>
              <div className="w-full flex items-end justify-between">
                <p className="text-xs 2xl:text-sm text-typeGray">
                  {" "}
                  April 26th 2023
                </p>
                <Link to="/">
                  <button className="transition duration-200 py-2 px-4 text-xs 2xl:text-sm border rounded-full text-typeGray border-typeGray bg-white hover:border-primary hover:text-primary hover:shadow">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* CARD TWO */}
          <div className="w-[32%] aspect-square rounded-md shadow-lg  overflow-hidden flex flex-col items-center">
            {/* TOP WITH THE IMAGE */}
            <div className="w-full h-[55%] bg-blue-300 overflow-hidden">
              <img
                className="w-[100%] min-w-[110%]  m-auto "
                src={image}
                alt="inganci.com/show.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 flex flex-col items-start justify-between">
              <h4 className="text-primary text-xs">OUR SOLUTIONS</h4>
              <h2>Q & A on UN(THINK): Sustainability and Provenance</h2>
              <div className="w-full flex items-end justify-between">
                <p className="text-xs 2xl:text-sm text-typeGray">
                  {" "}
                  April 26th 2023
                </p>
                <Link to="/">
                  <button className="transition duration-200 py-2 px-4 text-xs 2xl:text-sm border rounded-full text-typeGray border-typeGray bg-white hover:border-primary hover:text-primary hover:shadow">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* CARD THREE */}
          <div className="w-[32%] aspect-square rounded-md shadow-lg z-10 overflow-hidden flex flex-col items-center">
            {/* TOP WITH THE IMAGE */}
            <div className="w-full h-[55%] overflow-hidden">
              <img
                className="w-[100%] min-w-[110%] m-auto "
                src={image}
                alt="inganci.com/show.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 flex flex-col items-start justify-between">
              <h4 className="text-primary text-xs">DOWNLOAD OUR PRESSKIT</h4>
              <h2>Would you like to download our presskit? </h2>
              <div className="w-full flex items-end justify-between">
                <p className="text-xs 2xl:text-sm text-typeGray">
                  {" "}
                  April 26th 2023
                </p>
                <Link to="/">
                  <button className=" transition duration-200 py-2 px-4 text-xs 2xl:text-sm border rounded-full text-typeGray border-typeGray bg-white hover:border-primary hover:text-primary hover:shadow">
                    Download Presskit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
