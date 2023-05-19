import { ArrowDown2, HambergerMenu } from "iconsax-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)

  return (
    <div className="w-full z-50 bg-white p-3 py-5 2xl:p-5 fixed top-0 shadow-md">
      {/* ABSOLUTE SIDE DRAWER */}
      <div
        style={{ left: openNav === true ? "0px" : "-260px" }}
        className="transition duration-300 fixed top-0 h-screen w-[260px] bg-white shadow-md "
      ></div>

      {/* CONTAINER  */}
      <div className="container">
        <div id="nav" className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/"><div className="">
            <h1 className="text-primary font-bold text-2xl ">inganci</h1>
          </div></Link>

          {/* LINKS AND BUTTONS*/}
          <div className="flex items-center justify-between gap-20">
            {/* LINKS */}
            <ul className="hidden lg:flex items-center gap-16 text-sm text 2xl:text-base ">
              {/* ABOUT US */}
                <li className="flex items-center cursor-pointer gap-1 text-gray1 li-drop relative">
                  <p>About Us</p>
                  <ArrowDown2
                    size="20"
                    className="navcon transition duration-200"
                  />
                  <div className="transition duration-200 overflow-hidden navdrop absolute top-[280%] right-0 shadow-md rounded-md flex-col bg-white w-[200%]  h-0 flex justify-center ">
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        About Inganci
                      </p>
                    </Link>
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        M & A
                      </p>
                    </Link>
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        Our Team
                      </p>
                    </Link>
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        Insights
                      </p>
                    </Link>
                  </div>
                </li>

              {/* PRODUCTS */}
                <li className="flex items-center gap-1 cursor-pointer text-gray1 li-drop relative">
                  <p>Products</p>
                  <ArrowDown2
                    size="20"
                    className="navcon transition duration-200"
                  />
                  <div className="transition duration-200 overflow-hidden navdrop absolute top-[280%] right-0 shadow-md rounded-md flex-col bg-white min-w-[200%] flex justify-center h-0">
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010] whitespace-nowrap">
                        Egg Solution/Product
                      </p>
                    </Link>
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        Consulting
                      </p>
                    </Link>
                    <Link to="/">
                      <p className="transition duratioon-200 px-4 py-2 hover:bg-[#00000010]">
                        Project
                      </p>
                    </Link>
                  </div>
                </li>


              {/* INVESTORS */}
              <Link to="/investors">
                <li className="flex items-center gap-1 text-gray1 li-drop relative">
                  <p>Investors</p>
                </li>
              </Link>

              
              {/* BLOG */}
              <Link to="/blog">
                <li className="flex items-center gap-1 text-gray1 li-drop relative">
                  <p>Blog</p>
                </li>
              </Link>

              {/* CAREERS */} 
              <Link to="/careers">
                <li className="flex items-center gap-1 text-gray1 li-drop relative">
                  <p>Careers</p>
                </li>
              </Link>
            </ul>

            {/* BUTTON */}
            <Link to="/contact" >
              <button className="hidden xl:block bg-primary py-3 w-[142px] rounded text-white text-sm hover:bg-accent hover:text-gray1 transition duration-200">
                Contacts
              </button>
            </Link>

            {/* HAMBURGER MENU */}
            <div
              className="block xl:hidden "
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              <HambergerMenu className="text-primary" size="32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
