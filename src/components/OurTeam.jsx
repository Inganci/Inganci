import { Star1 } from 'iconsax-react'
import React from 'react'
import man1 from '../assets/man1.jpg'
import man2 from '../assets/man2.jpg'
import woman1 from '../assets/woman1.jpg'
import mandev1 from '../assets/mandev2.jpg'
import mandev2 from '../assets/mandev1.jpg'
import clientSuccess from '../assets/clientsuccess.jpg'
import cusrep from '../assets/cusrep.jpg'

const OurTeam = () => {
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
              Meet our Team
            </h3>

            {/* STARS ROW */}
            <div className="flex w-[10%] mx-auto mb-8 text-primary justify-between">
              <Star1 className="" size="10" variant="Bold" />
              <Star1 className="" size="10" variant="Bold" />
              <Star1 className="" size="10" variant="Bold" />
            </div>

            <p className="text-typeGray text-sm 2xl:text-base mb-16 text-center">
              Inganci started in 1234 when Martinus Wulms opened a grocery store
              and soon expanded it into a true trading post in grains, eggs,
              cheese and butter. Over the past century, the family business has
              been passed down from generation to generation and has grown into
              a market leader in the Dutch egg trade.
            </p>

            <h3 className="text-[26px] font-semibold text-center mx-auto mb-10 border-accentDark border-b-[1px] w-fit">
              Our Executives
            </h3>
            
            {/* THE EXECUTIVE SECTION */}
            <div className=" scrollbar w-[90%] overflow-x-scroll mx-auto flex gap-4 items-center pb-4 flex-nowrap">


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max' src={man1} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mr. Alfred Miller</h4> 
                  <p className="text-xs">Founder & CEO Inganci</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%] ' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max' src={man2} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mr. George Marshall</h4> 
                  <p className="text-xs">CCO & CTO Inganci</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max transform scale-[1.3] mt-[3rem]' src={woman1} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mrs. Edwina Todd</h4> 
                  <p className="text-xs">Head Finance & Accounts</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max transform scale-[1]' src={mandev1} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mr. Wole Oyenuga</h4> 
                  <p className="text-xs">Head Products & Development</p>
                </div>
              </div>


              <div className="flex"></div>
            </div>
          </div>
        </div>
        
        
        
        {/* EMPLOYEE CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between py-[5rem] ">
          {/* OUR MISSION CONTENT */}
          <div className="flex flex-col gap-4  flex-1">

            <h3 className="text-[26px] font-semibold text-center mx-auto mb-10 border-accentDark border-b-[1px] w-fit">
              Our Members
            </h3>
            
            {/* THE EXECUTIVE SECTION */}
            <div className=" scrollbar w-[90%] overflow-x-scroll mx-auto flex gap-4 items-center pb-4 flex-nowrap">


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max' src={mandev1} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mr. Wole Oyenuga</h4> 
                  <p className="text-xs">Senior FullStack Developer</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%] ' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max' src={mandev2} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Mr. Edward Bright</h4> 
                  <p className="text-xs">Senior Machinery Operator</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max transform scale-[1]' src={cusrep} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Ms. Kimberly Tobe</h4> 
                  <p className="text-xs">Customer Representative</p>
                </div>
              </div>


              {/* ONE TEAM MEMBER SAMPLE */}
              <div className='w-[30%] min-w-[30%]' >
                {/* IMAGE BOX */}
                <div className='flex items-center justify-center rounded-md overflow-hidden  bg-yellow-400 w-[90%] mx-auto aspect-[0.8]'>
                  <img className='h-full min-w-max transform scale-[1.6]' src={clientSuccess} alt="inganci.com" />
                </div>
                {/* NAME AND TITLE CONTENT */}
                <div className='w-[90%] mx-auto mt-2 flex flex-col items-start' >
                  <h4 className="text-base font-semibold ">Ms. Jean Beverly</h4> 
                  <p className="text-xs">Client Success</p>
                </div>
              </div>


              <div className="flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam