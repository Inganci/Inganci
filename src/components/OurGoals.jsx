import React from "react";
import eggbg from "../assets/eggbg.jpg";
import three from "../assets/3.png";
import { Bubble, TickCircle } from "iconsax-react";
// import leaves from '../assets/leaf.png';
import eggsFloat from '../assets/eggsfloat.png';


const OurGoals = () => {
  return (
    <div className="min-h-screen w-full bg-white z-10 relative py-[5rem]">
      <div className="container">
        {/* TAG AND TITLE */}
        {/* <div className="flex items-center gap-4  text-primary mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-primary" />
          <h4 className="font-semibold ">OUR MISSION AND GOALS</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div> */}
        {/* NEXT CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between  ">
          {/* OUR MISSION CONTENT */}
          <div className="flex flex-col gap-4 -1">
            {/* DESIGN AND CONTENT */}
            <div className="w-full mx-auto flex items-center justify-between">
              {/* DESIGN DIV */}
              <div className="w-[45%] aspect-square flex items-center relative justify-center">
                <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
                  <img
                    className="h-[100%] min-w-max"
                    src={eggbg}
                    alt="inganci.com"
                  />
                </div>
                <div className="absolute w-[50%]  aspect-square bg-white overflow-hidden border-primary border-[12px] rounded-full top-[100%] right-[100%]  transform -translate-y-[80%]  translate-x-[80%] ">
                  <img src={three} alt="inganci.com" />
                </div>
              </div>
              {/* CONTENT DIV */}
              <div className="w-[50%] flex flex-col gap-6 relative">
                <h2 className="text-[32px] font-semibold text-gray1 ">
                  Our Goals and Objectives{" "}
                </h2>
                <ul className="w-full flex flex-col items-start gap-2 mb-[1rem]">
                  <li className="w-full flex gap-4 items-center text-primary">
                    <TickCircle variant="Bold" size="24" />
                    <p className="text-sm 2xl:test-base text-gray4">
                      This right here is where the first objective of the
                      company will go
                    </p>
                  </li>
                  <li className="w-full flex gap-4 items-center text-primary">
                    <TickCircle variant="Bold" size="24" />
                    <p className="text-sm 2xl:test-base text-gray4">
                      This right here is where the first objective of the
                      company will go
                    </p>
                  </li>
                  <li className="w-full flex gap-4 items-center text-primary">
                    <TickCircle variant="Bold" size="24" />
                    <p className="text-sm 2xl:test-base text-gray4">
                      This right here is where the first objective of the
                      company will go
                    </p>
                  </li>
                  <li className="w-full flex gap-4 items-center text-primary">
                    <TickCircle variant="Bold" size="24" />
                    <p className="text-sm 2xl:test-base text-gray4">
                      This right here is where the first objective of the
                      company will go
                    </p>
                  </li>
                </ul>

                {/* THE TINY BUBBLE CARDS BELOW */}
                <div className="flex items-center w-full mx-auto gap-3">
                  {/* THE FIRST CARD */}
                  <div className="w-[32%] bg-inner rounded-md flex items-start gap-[6px] p-2">
                    <Bubble
                      className="text-primary min-w-[10%]"
                      size="20"
                      variant="Bold"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-semibold text-primary">
                        Work Culture
                      </p>
                      <span className="text-xs text-primary">
                        Happy Employees, Satisfied Clients
                      </span>
                    </div>
                  </div>

                  {/* THE SECOND CARD */}
                  <div className="w-[32%] bg-innerAccent rounded-md flex items-start gap-[6px] p-2">
                    <Bubble
                      className="text-accentDark min-w-[10%]"
                      size="20"
                      variant="Bold"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-semibold text-accentDark">
                        Happy Employees
                      </p>
                      <span className="text-xs text-accentDark">
                        Work Culture, Satisfied Clients
                      </span>
                    </div>
                  </div>

                  {/* THE THREE CARD */}
                  <div className="w-[32%] bg-typefill2 rounded-md flex items-start gap-[6px] p-2">
                    <Bubble
                      className="text-type min-w-[10%]"
                      size="20"
                      variant="Bold"
                    />
                    <div className="flex flex-col items-start">
                      <p className="text-xs font-semibold text-type">
                        Satisfied Clients
                      </p>
                      <span className="text-xs text-type">
                        Happy Employees, Work Culture
                      </span>
                    </div>
                  </div>
                </div>

                              {/* THE FLOATING BG IMAGES */}
                <div className="absolute top-1/2 transform -translate-y-1/2 -right-[20%] opacity-30 -z-10">
                  <img src={eggsFloat} alt="" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
