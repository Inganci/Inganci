import React from "react";
import Footer from "../components/Footer";
import { Call, Message, Send } from "iconsax-react";

const ContactUs = () => {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen flex items-center">
        {/* CONTAINER DIV */}
        <div className="container">
          {/* FULL WRAPPER */}
          <div className="w-full">
            {/* THE HEADER TEXT PART */}
            <div className="mt-[8rem] 2xl:mt-[10rem] mb-[5rem] flex items-center gap-4">
              <hr className="w-24 h-1 bg-primary border-none " />
              <h1 className="whitespace-nowrap text-3xl 2xl:text-4xl text-gray4 font-semibold  ">
                CONTACT US
              </h1>
              <hr className="h-1 w-[40%] bg-accent border-none    " />
            </div>

            {/* FORM AND DETAILS SECTION  */}
            <div className="w-[80%] mx-auto flex justify-between items-center round-lg mb-[5rem] ">
              {/* LEFT SIDE CONTAINING THE DETAILS */}
              <div className="w-1/2 flex flex-col items-start gap-10">
                {/* FOR GEN INQS */}
                <div className="flex flex-col items-start gap-2">
                  <h4 className="text-gray4 text-lg 2xl:text-xl mb-[1rem]">
                    For General Inquiries
                  </h4>
                  {/* FOR CALL */}
                  <div className="flex place-items-center gap-3">
                    <Call
                      className="text-gray4 w-7 h-7 2xl:w-8 2xl:h-8 bg-innerAccent p-1 rounded-md"
                      variant="Bold"
                    />
                    <p className="text-typeGray text-sm 2xl:text-base">
                      +234 812-345-6789
                    </p>
                  </div>

                  {/* FOR MAIL */}
                  <div className="flex place-items-center gap-3">
                    <Message
                      className="text-gray4 w-7 h-7 2xl:w-8 2xl:h-8 bg-innerAccent p-1 rounded-md"
                      variant="Bold"
                    />
                    <p className="text-typeGray text-sm 2xl:text-base">
                      mailouroffice@inganci.com
                    </p>
                  </div>
                </div>

                {/* FOR INVESTOR INQS */}
                <div className="flex flex-col items-start gap-2">
                  <h4 className="text-gray4 text-lg 2xl:text-xl mb-[1rem]">
                    For Investor Inquiries
                  </h4>
                  {/* FOR CALL */}
                  <div className="flex place-items-center gap-3">
                    <Call
                      className="text-gray4 w-7 h-7 2xl:w-8 2xl:h-8 bg-innerAccent p-1 rounded-md"
                      variant="Bold"
                    />
                    <p className="text-typeGray text-sm 2xl:text-base">
                      +234 812-345-6789
                    </p>
                  </div>

                  {/* FOR MAIL */}
                  <div className="flex place-items-center gap-3">
                    <Message
                      className="text-gray4 w-7 h-7 2xl:w-8 2xl:h-8 bg-innerAccent p-1 rounded-md"
                      variant="Bold"
                    />
                    <p className="text-typeGray text-sm 2xl:text-base">
                      mailouroffice@inganci.com
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE CONTAINING THE FORM */}
              <div className="w-1/2 flex flex-col ">
                <form action="" className="w-full flex flex-col gap-4">
                  {/* FIRST AND LAST NAME SECTION */}
                  <div className="flex items-center gap-4">
                    <input
                      className="border w-full border-typeGray text-sm py-3 px-4 rounded-md leading-3"
                      type="text"
                      placeholder="First Name"
                    />
                    <input
                      className="border w-full border-typeGray text-sm py-3 px-4 rounded-md leading-3"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <input
                    className="border border-typeGray text-sm py-3 px-4 rounded-md leading-3"
                    type="text"
                    placeholder="Your Emmail"
                  />
                  <textarea
                    className="border border-typeGray text-sm py-4 px-4 rounded-md leading-3"
                    cols="30"
                    rows="10"
                    placeholder="What yould you like to say?"
                  ></textarea>
                  <button className="flex justify-center self-end gap-3 items-center bg-primary py-3 w-[142px] rounded text-white text-sm hover:bg-accent hover:text-gray1 transition duration-200">
                    Send
                    <Send size="20" variant="Bold" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
