import React from "react";
import { useNavigate } from "react-router-dom";
// import image from "../assets/homeabout.svg";
// import eggs from "../assets/eggpack.jpg";
import eggnpowder from "../assets/eggnpowder.png";
import consult from "../assets/consult.jpg"
import projects from "../assets/projects.jpg"

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center w-full bg-white z-10 relative py-[7rem] ">
      <div className="container min-h-screen">
        {/* TAG AND TITLE */}
        {/* <div className="flex items-center gap-4  text-primary mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-primary" />
          <h4 className="font-semibold ">OUR PRODUCTS</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div> */}

        <div className="w-[80%] mx-auto">
          <h3 className="text-[32px] font-semibold mb-6 text-center  border-accentDark border-b-[1px] w-fit mx-auto" >
            Our Services
          </h3>

          <p className="text-typeGray text-sm 2xl:text-base mb-8 text-center">
            Inganci started in 1234 when Martinus Wulms opened a grocery store
            and soon expanded it into a true trading post in grains, eggs,
            cheese and butter. Over the past century, the family business has
            been passed down from generation to generation and has grown into a
            market leader in the Dutch egg trade.
          </p>
        </div>

        {/* THE BACKGROUND SHAPE */}
        {/* CARDS CONTENT */}
        <div className="w-[80%] h-fit mx-auto flex flex-col gap-[5rem] items-stretch justify-between mt-[4rem]">
          {/* CARD ONE */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card w-[100%] h-[300px] 2xl:h-[340px] rounded-xl shadow-lg bg-white overflow-hidden flex items-center"
          >
            {/* LEFT SIDE WITH THE IMAGE */}
            <div className="topcard min-w-[40%] h-[100%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="h-full min-w-max"
                src={eggnpowder}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="min-w-[60%] h-[100%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-3xl font-semibold">
                EGG SOLUTION / PRODUCT
              </h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[100%] mx-auto flex flex-col items-start justify-between ">
                <p className="text-typeGray text-sm 2xl:text-base mt-2 text-left">
                  Inganci started in 1234 when Martinus Wulms opened a grocery
                  store and soon expanded it into a true trading post in grains,
                  eggs, cheese and butter. Over the past century, the family
                  business has been passed down from generation to generation
                  and has grown into a market leader in the Dutch egg trade.
                </p>
                <ul className="flex w-[90%] mx-auto flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                </ul>
                <div className="w-full flex items-center justify-end p-1 mt-4">
                  <button className="hidden xl:block bg-primary py-2 w-[122px] rounded-full text-white text-sm hover:bg-accent hover:text-gray1 transition duration-200">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CARD TWO */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card w-[100%] h-[300px] 2xl:h-[340px] rounded-xl shadow-lg bg-white overflow-hidden flex flex-row-reverse items-center"
          >
            {/* LEFT SIDE WITH THE IMAGE */}
            <div className="topcard min-w-[40%] h-[100%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="h-full min-w-max"
                src={consult}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="min-w-[60%] h-[100%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-3xl font-semibold">
                CONSULTING
              </h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[100%] mx-auto flex flex-col items-start justify-between ">
                <p className="text-typeGray text-sm 2xl:text-base mt-2 text-left">
                  Inganci started in 1234 when Martinus Wulms opened a grocery
                  store and soon expanded it into a true trading post in grains,
                  eggs, cheese and butter. Over the past century, the family
                  business has been passed down from generation to generation
                  and has grown into a market leader in the Dutch egg trade.
                </p>
                <ul className="flex w-[90%] mx-auto flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                </ul>
                <div className="w-full flex items-center justify-start p-1 mt-4">
                  <button className="hidden xl:block bg-primary py-2 w-[122px] rounded-full text-white text-sm hover:bg-accent hover:text-gray1 transition duration-200">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CARD THREE */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card w-[100%] h-[300px] 2xl:h-[340px] rounded-xl shadow-lg bg-white overflow-hidden flex items-center"
          >
            {/* LEFT SIDE WITH THE IMAGE */}
            <div className="topcard min-w-[40%] h-[100%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="h-full min-w-max"
                src={projects}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="min-w-[60%] h-[100%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-3xl font-semibold">PROJECTS</h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[100%] mx-auto flex flex-col items-start justify-between ">
                <p className="text-typeGray text-sm 2xl:text-base mt-2 text-left">
                  Inganci started in 1234 when Martinus Wulms opened a grocery
                  store and soon expanded it into a true trading post in grains,
                  eggs, cheese and butter. Over the past century, the family
                  business has been passed down from generation to generation
                  and has grown into a market leader in the Dutch egg trade.
                </p>
                <ul className="flex w-[90%] mx-auto flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-sm 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                </ul>
                <div className="w-full flex items-center justify-end p-1 mt-4">
                  <button className="hidden xl:block bg-primary py-2 w-[122px] rounded-full text-white text-sm hover:bg-accent hover:text-gray1 transition duration-200">
                    View more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
