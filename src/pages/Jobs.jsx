import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { jobs } from "../data/data";
import { ProfileCircle, Send } from "iconsax-react";

const Jobs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full">
      {/* THE TOP SECTION WITH THE TITLE AND THE SEARCH BAR */}
      <div className="w-full">
        <div className="container">
          <div className="w-full min-h-[50vh] items-center">
            {/* THE TOP SECTION FOR THE TITLE AND THE SUBTITLE SEARCH BAR MAYBE */}
            <div className="w-full min-h-[40vh] 2xl:min-h-[30vh] mb-[6rem] flex items-end">
              <div className="w-[70%] mx-auto text-center">
                <h1 className="text-6xl mb-6">Jobs & Positions</h1>
                <p className="w-[70%] mx-auto text-typeGray">
                  {" "}
                  Welcome to the jobs and positions section of our website,
                  Here, we keep you up to date on all the available vacancies to
                  be filled in the company
                </p>
              </div>
            </div>

            {/* BOTTOM SECTION WHERE ALL THE JOBS SHALL BE DISPLAYED */}
            <div className="w-[80%] mx-auto flex items-stretch justify-between mb-[6rem] h-fit  flex-wrap">
              {/* ONE SINGLE JOB CARD */}
              {jobs && jobs.length > 0 ? (
                jobs.map((item) => (
                  <div key={item.id} className="w-[49%] flex flex-col bg-white rounded-md border mb-8 border-typefilltrans  shadow-md p-6 gap-[1rem] ">
                    {/* TOP PART */}
                    <div className="w-full flex items-center gap-3 justify-between">
                      <div className="w-12 rounded-full aspect-square bg-typefill2 text-primary flex justify-center items-center">
                        <ProfileCircle size="30" variant="Bold" />
                      </div>
                      {/* RIGHT */}
                      <div className="flex flex-col flex-1 items-start justify-start">
                        <h3 className="text-gray1 text-[18px] font-[600] leading-[18px] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-typeGray text-xs"> {item.location}</p>
                      </div>
                      {/* LEFT */}
                      <div>
                        <button className="text-sm bg-typefill2 text-primary rounded-3xl flex items-center gap-1 px-4 py-2">
                          Apply Now <Send size="20" variant="Bold" />
                        </button>
                      </div>
                    </div>

                    {/* MIDDLE PART */}
                    <div className="w-full">
                      <p className="text-sm text-typeGray h-10 overflow-hidden text-ellipsis">
                        {item.desc}
                      </p>
                    </div>

                    {/* BOTTOM FOR TAGS */}
                    <div className="w-full flex flex-wrap items-center gap-2">
                      {item.keys &&
                        item.keys.map((item, idx) => (
                          <div key={idx} className="bg-inner px-3 py-1 rounded-md text-xs text-typeGray whitespace-nowrap">
                            {item}
                          </div>
                        ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="w-full text-center text-typeGray p-[5rem] bg-inner rounded" >No Jobs at the moment, please check back later...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
