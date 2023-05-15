import React from 'react'
import Footer from '../components/Footer'
import {blogs} from "../data/data"
import { Messages2, ProfileCircle } from 'iconsax-react'

const Blog = () => {

  return (
    <div className="w-full">
      {/* THE TOP SECTION WITH THE TITLE AND THE SEARCH BAR */}
      <div className="w-full">
        <div className="container">
          <div className="w-full min-h-[50vh] items-center">
            {/* THE TOP SECTION FOR THE TITLE AND THE SUBTITLE SEARCH BAR MAYBE */}
            <div className="w-full min-h-[40vh] mb-[6rem] flex items-end">
              <div className="w-[70%] mx-auto text-center">
                <h1 className="text-6xl mb-6">Blogs & Articles</h1>
                <p className="w-[70%] mx-auto text-typeGray">
                  {" "}
                  Welcome to the blogs and articles section of our website,
                  Here, we keep you up to date on all the interesting and news
                  as well as all imoirtant updates
                </p>
              </div>
            </div>

            {/* BOTTOM SECTION WHERE ALL THE BLOGS SHALL BE DISPLAYED */}
            <div className="w-[70%] mx-auto flex flex-col gap-[3rem] relative">
              {/* THIS IS THE AREA WHERE ALL THE BLOGS ARE MAPPED OUT */}
              {blogs && blogs.length ? (
                blogs.map((item) => (
                  <div className="w-full flex flex-col bg-white shadow-xl rounded-b-2xl ">
                    {/* TOP SECTION FOR THE IMAGE*/}
                    <div className="w-full aspect-[2.2] bg-accent overflow-hidden ">
                      <img
                        className="w-full"
                        src={item.image}
                        alt="inganci.com"
                      />
                    </div>
                    {/* BOTTOM SECTION FOR THE CONTENT*/}
                    <div className="w-full p-[50px] relative">

                      {/* THE DAY DATE DIV */}
                      <div className="absolute bottom-full bg-white py-1 text-gray1 text-6xl 2xl:text-6xl w-[100px] aspect-square rounded-t-md flex items-center justify-center">
                        <p className='font-normal' >{item.date.slice(0, 2)}</p>
                      </div>
                     
                     
                      {/* THE MONTH AND YEAR DIV */}
                      <div className="absolute top-0 bg-accent py-1 text-primaryDark text-sm 2xl:text-base w-[100px]  rounded-b-md flex items-center justify-center">
                        <p className='font-[600]' >{item.date.slice(2, 100)}</p>
                      </div>


                      {/* THE ADMIN AND COMMENTS */}
                      <ul className="flex items-center gap-4">
                        <li className="flex gap-2  items-center">
                          <ProfileCircle
                            className="text-primary"
                            size="24"
                            variant="Bold"
                          />
                          <p className="m-0 text-sm">{item.perm}</p>
                        </li>
                        <li className="flex gap-1 items-center">
                          <Messages2
                            className="text-primary"
                            size="22"
                            variant="Outline"
                          />
                          <p className="m-0 text-sm">{item.comments}Comments</p>
                        </li>
                      </ul>

                      <div className="w-full ">
                        <h2 className="text-gray1 my-4 font-semibold text-4xl">
                          {item.title}
                        </h2>
                        <p className="text-sm 2xl:text-base text-typeGray ">
                          {item.desc}
                        </p>
                        <div className="w-full flex mt-6">
                          <button className="hidden xl:block bg-primary  py-3 w-[142px] rounded-full text-sm text-white hover:bg-primary hover:text-wehite hover:-translate-y-1 active:translate-y-[2px] hover:shadow-md transition duration-200">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full flex flex-col bg-white shadow-xl mb-[6rem] rounded-b-2xl ">
                  {/* TOP SECTION FOR THE IMAGE*/}
                  <div className="w-full aspect-[2.2] bg-accent">
                    {/* <img src={} alt="inganci.com" /> */}
                  </div>
                  {/* BOTTOM SECTION FOR THE CONTENT*/}
                  <div className="w-full p-[50px] ">
                    {/* THE ADMIN AND COMMENTS */}
                    <ul className="flex items-center gap-4">
                      <li className="flex gap-2  items-center">
                        <ProfileCircle
                          className="text-primary"
                          size="24"
                          variant="Bold"
                        />
                        <p className="m-0 text-sm">Admin</p>
                      </li>
                      <li className="flex gap-1 items-center">
                        <Messages2
                          className="text-primary"
                          size="22"
                          variant="Outline"
                        />
                        <p className="m-0 text-sm">22 Comments</p>
                      </li>
                    </ul>

                    <div className="w-full ">
                      <h2 className="text-gray1 my-4 font-semibold text-4xl">
                        Minuter him own clothes but observe country.
                      </h2>
                      <p className="text-sm 2xl:text-base text-typeGray ">
                        Bndulgence diminution so discovered mr apartments. Are
                        off under folly death wrote cause her way spite. Plan
                        upon yet way get cold spot its week. Almost do am or
                        limits hearts. Resolve parties but why she shewing. She
                        sang know now
                      </p>
                      <div className="w-full flex mt-6">
                        <button className="hidden xl:block bg-primary  py-3 w-[142px] rounded-full text-sm text-white hover:bg-primary hover:text-wehite hover:-translate-y-1 active:translate-y-[2px] hover:shadow-md transition duration-200">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* THE SECTION WITH EACH BLOG */}
      <div className="w-full">
        <div className="container">
          <div className="w-full"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog