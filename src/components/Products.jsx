import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import image from "../assets/homeabout.svg";
import eggs from "../assets/eggpack.jpg";
import eggblue from "../assets/eggblue.png";
import eggwood from "../assets/eggwood.png";
import eggnpowder from "../assets/eggnpowder.png";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center w-full bg-white z-10 relative py-[4rem] pt-[4rem]">
      <div className="container">
        {/* TAG AND TITLE */}
        <div className="flex items-center gap-4  text-primary mt-[2rem]">
          <hr className="w-[40px] h-[2px] border-none bg-primary" />
          <h4 className="font-semibold ">OUR PRODUCTS</h4>
          <hr className="w-[380px] h-[5px] border-none bg-accent" />
        </div>

        {/* THE BACKGROUND SHAPE */}
        {/* CARDS CONTENT */}
        <div className="w-[80%] mx-auto flex items-center justify-between py-[5rem] ">
          {/* CARD ONE */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card cursor-pointer w-[32%] aspect-[0.8] rounded-xl shadow-lg  overflow-hidden flex flex-col items-center"
          >
            {/* TOP WITH THE IMAGE */}
            <div className="topcard w-full h-[70%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="w-[100%]  min-w-[120%] mx-auto my-auto"
                src={eggblue}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-md font-semibold">
                LIQUID EGGS PASTEURIZED
              </h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[88%] mx-auto flex items-end justify-between ">
                <ul className="flex flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Liquid egg white pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Liquid Egg Yolk Pasteurized 1 kg
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Liquid whole Egg pasteurizedChilled/Frozen
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Liquid Egg Yolk Pasteurized 1 kg
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD TWO */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card cursor-pointer w-[32%] aspect-[0.8] rounded-xl shadow-lg  overflow-hidden flex flex-col items-center"
          >
            {/* TOP WITH THE IMAGE */}
            <div className="topcard w-full h-[70%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="w-[100%]  min-w-[120%] mx-auto my-auto"
                src={eggnpowder}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-md font-semibold">
                LIQUID EGGS PASTEURIZED
              </h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[88%] mx-auto flex items-end justify-between ">
                <ul className="flex flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Whole egg powder.
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Egg white powder (Albumen).
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Egg yolk powder.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD THREE */}
          <div
            onClick={() => {
              navigate("/");
            }}
            className="card cursor-pointer w-[32%] aspect-[0.8] rounded-xl shadow-lg  overflow-hidden flex flex-col items-center"
          >
            {/* TOP WITH THE IMAGE */}
            <div className="topcard w-full h-[70%] rounded-xl flex items-center justify-center bg-blue-300 overflow-hidden">
              <img
                className="w-[100%]  min-w-[120%] mx-auto my-auto"
                src={eggwood}
                alt="inganci.com/eggs.svg"
              />
            </div>
            {/* BOTTOM WITH THE CONTENT */}
            <div className="w-full h-[45%] bg-white p-6 items-start justify-between">
              {/* THE TITLE */}
              <h4 className="text-primary text-md font-semibold">
                LIQUID EGGS PASTEURIZED
              </h4>

              {/* DIV CONTAINING LIST */}
              <div className="w-[88%] mx-auto flex items-end justify-between ">
                <ul className="flex flex-col list-disc text-typeGray mt-2 gap-1">
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Fresh chicken eggs
                    </p>
                  </li>
                  <li>
                    <p className="text-xs 2xl:text-sm text-typeGray">
                      Washed chicken eggs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
