import React from "react";
import p1 from "../assets/1.png";
import p2 from "../assets/2.png";
import p3 from "../assets/3.png";
import p4 from "../assets/4.png";
import p5 from "../assets/5.png";
import { Call, Location, Message } from "iconsax-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* TOP WITH IMAGES */}
      <div className="w-full flex items-center">
        <img className="w-[20%]" src={p1} alt="https://www.inganci.com" />
        <img className="w-[20%]" src={p2} alt="https://www.inganci.com" />
        <img className="w-[20%]" src={p3} alt="https://www.inganci.com" />
        <img className="w-[20%]" src={p4} alt="https://www.inganci.com" />
        <img className="w-[20%]" src={p5} alt="https://www.inganci.com" />
      </div>

      {/* BOTTOM WITH THE DETAILS */}
      <div className="footer-grad w-full p-[50px]">
        <div className="container">
          <div className="flex flex-col gap-9">
            {/* THE UL LIST PART */}
            <ul className="flex items-center justify-between list-disc text-white mx-auto gap-[5rem]">
              <li>LIQUID EGGS PASTEURIZED</li>
              <li>EGG POWDER</li>
              <li>CHICKEN EGGS </li>
            </ul>

            {/* MIDDLE PART WITH LOGO LEFT AND LINKS ON THE RIGHT */}
            <div className="flex items-start mt-[3rem] mb-[2rem]">
              {/* THE LEFT SIDE */}
              <div className="flex-1 text-white flex items-start justify-between">
                
                
                <h1 className="text-white text-[38px] font-black mb-[1rem]">
                  inganci<span className="text-primary">.</span>
                </h1>
                
                
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-[1rem]">
                    <Location size="18" variant="Bold" />
                    <p className="text-sm 2xl:text-">
                      Seelenstraat 7, 6004 RL Weert, The Netherlands
                    </p>
                  </div>
                  <div className="w-[80%] flex items-center gap-2">
                    <Call size="18" variant="Bold" />
                    <p className="text-sm 2xl:text-">
                      Phone:{" "}
                      <span className="underline">+234 123-456-7890</span>
                    </p>
                  </div>
                  <div className="w-[80%] flex items-center gap-2 mb-2">
                    <Message size="18" variant="Bold" />
                    <p className="text-sm 2xl:text-">
                      Mail: <span className="underline">info@inganci.com</span>
                    </p>
                  </div>
                </div>
  

                {/* THE RIGHT SIDE */}
                <div className="flex items-start gap-[5rem]">
                  <ul className="text-white text-sm flex flex-col gap-[.8rem]">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Inganci Team</Link>
                    </li>
                    <li>
                      <Link to="/">News</Link>
                    </li>
                    <li>
                      <Link to="/">Customers</Link>
                    </li>
                  </ul>

                  <ul className="text-white text-sm flex flex-col gap-[.8rem]">
                    <li>
                      <Link to="/">Export</Link>
                    </li>
                    <li>
                      <Link to="/">Contacts</Link>
                    </li>
                    <li>
                      <Link to="/">Technology</Link>
                    </li>
                    <li>
                      <Link to="/">Quality and Safety</Link>
                    </li>
                  </ul>
                </div>


              </div>
            </div>

            {/* WHITE RECTANGLE CONTAINING THE COPY RIGHTS */}
            <div className="bg-white rounded-md p-[18px] flex items-center justify-between">
              <p className="text-xs 2xl:text-sm">Inganci@2023</p>
              <p className="text-xs 2xl:text-sm text-primary">
                <Link to="/">Contact our Support</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
