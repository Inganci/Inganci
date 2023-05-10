import React from "react";
import { Star1 } from "iconsax-react";

const Missions = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] z-10 relative py-[4rem]">
      <div className="container">
        {/* TAG AND TITLE */}
        {/* <div className="flex items-center gap-4  text-primary mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-primary" />
          <h4 className="font-semibold ">OUR MISSION AND GOALS</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div> */}
        {/* NEXT CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between py-[5rem] ">
          {/* OUR MISSION CONTENT */}
          <div className="flex flex-col gap-4  flex-1">
            <h3 className="text-[32px] font-semibold text-center">
              Our Mission
            </h3>

            {/* STARS ROW */}
            <div className="flex w-[10%] mx-auto mb-4 text-primary justify-between">
              <Star1 className="" size="10" variant="Bold" />
              <Star1 className="" size="10" variant="Bold" />
              <Star1 className="" size="10" variant="Bold" />
            </div>

            <p className="text-typeGray text-sm 2xl:text-base mb-8 text-center">
              Inganci started in 1234 when Martinus Wulms opened a grocery store
              and soon expanded it into a true trading post in grains, eggs,
              cheese and butter. Over the past century, the family business has
              been passed down from generation to generation and has grown into
              a market leader in the Dutch egg trade.
            </p>

            {/* THE ACTUAL MISSION CARDS SECTIONS */}
            <div className="w-[90%] mx-auto flex gap-4 items-stretch justify-center">
              {/* ONE CARD SAMPLE */}
              <div className="w-[30%] bg-inner flex flex-col rounded-[12px] overflow-hidden p-4">
                {/* TOP */}
                <div className="w-full flex justify-center mb-4">
                  <Star1 className="text-primary" variant="Bold" size="60" />
                </div>

                {/* CONTENT */}
                <div className="w-full justify-center ">
                  <div className="flex gap-2 items-center justify-center mb-3">
                    {/* <Star1 className="text-gray4" variant="Bold" size="26" /> */}
                    <h4 className="text-lg font-semibold text-gray1">
                      {" "}
                      Mission One{" "}
                    </h4>
                  </div>
                  <p className="w-[100%] mx-auto text-xs 2xl:text-sm text-center text-gray4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis placeat deleniti est natus provident optio amet
                    similique aliquam exercitationem id!
                  </p>
                </div>
              </div>
              {/* ONE CARD SAMPLE */}
              <div className="w-[30%] bg-inner flex flex-col  rounded-[12px] overflow-hidden p-4">
                {/* TOP */}
                <div className="w-full flex justify-center mb-4">
                  <Star1 className="text-primary" variant="Bold" size="60" />
                </div>

                {/* CONTENT */}
                <div className="w-full justify-center ">
                  <div className="flex gap-2 items-center justify-center mb-3">
                    {/* <Star1 className="text-gray4" variant="Bold" size="26" /> */}
                    <h4 className="text-lg font-semibold text-gray1">
                      {" "}
                      Mission Two{" "}
                    </h4>
                  </div>
                  <p className="w-[100%] mx-auto text-xs 2xl:text-sm text-center text-gray4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis placeat deleniti est natus provident optio amet
                    similique aliquam exercitationem id!
                  </p>
                </div>
              </div>
              {/* ONE CARD SAMPLE */}
              <div className="w-[30%] bg-inner flex flex-col  rounded-[12px] overflow-hidden p-4">
                {/* TOP */}
                <div className="w-full flex justify-center mb-4">
                  <Star1 className="text-primary" variant="Bold" size="60" />
                </div>

                {/* CONTENT */}
                <div className="w-full justify-center ">
                  <div className="flex gap-2 items-center justify-center mb-3">
                    {/* <Star1 className="text-gray4" variant="Bold" size="26" /> */}
                    <h4 className="text-lg font-semibold text-gray1">
                      {" "}
                      Mission Three{" "}
                    </h4>
                  </div>
                  <p className="w-[100%] mx-auto text-xs 2xl:text-sm text-center text-gray4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis placeat deleniti est natus provident optio amet
                    similique aliquam exercitationem id!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
