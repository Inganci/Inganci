import React, { useEffect } from "react";
import Footer from "../components/Footer";
import eggnbowl from "../assets/eggnbowl.jpg";
import { Link, useNavigate } from "react-router-dom";

const Careers = () => {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full ">
      <div className="w-full min-h-screen mb-[5rem]">
        {/* CONTAINER  */}
        <div className="container">
          {/* CONTAINER WRAPPER */}
          <div>
            {/* THE TOP SECTION FOR THE TITLE AND THE SUBTITLE SEARCH BAR MAYBE */}
            <div className="w-full min-h-[40vh] 2xl:min-h-[30vh] mb-[6rem] flex items-end">
              <div className="w-[70%] mx-auto text-center">
                <h1 className="text-6xl mb-6">Careers</h1>
                <p className="w-[70%] mx-auto text-typeGray">
                  {" "}
                  Welcome to the blogs and articles section of our website,
                  Here, we keep you up to date on all the interesting and news
                  as well as all imoirtant updates
                </p>
              </div>
            </div>

            {/* THE FEATURED IMAGE DIV */}
            <div className="w-[80%] aspect-[4] mx-auto rounded-[12px] flex items-center overflow-hidden">
              <img className="w-full" src={eggnbowl} alt="inganci.com" />
            </div>

            {/* THE TEXT THAT FOLLOWS */}
            <div className="w-[70%] aspect-[4] mx-auto flex flex-col items-center gap-7 mt-[4rem]">
              <p className="text-sm 2xl:text-base leading-6 2xl:leading-8">
                The Inganci team is dedicated to transforming agriculture in
                multiple sectors—from the seed to the production process that
                creates plant-based foods and other products. We have a
                corporate commitment and, we believe, a responsibility to grow,
                produce, and process plant-based products in more
                environmentally respectful and sustainable ways. Our purpose is
                to positively transform farm, food, and family every day,
                everywhere.
              </p>
              <p className="text-sm 2xl:text-base bg-typefilltrans p-[3rem] leading-6 2xl:leading-8 py-[2rem] rounded-[12px]">
                The people at Inganci and its group of companies are smart,
                talented, knowledgeable, caring, and committed to making the
                world a better place through the work that we do. We
                collaborate, connect, and support one another. From the CEO to
                the most junior staffer, we’re a team, and we like it that way.
              </p>
              <p className="text-sm 2xl:text-base leading-6 2xl:leading-8">
                At Inganci, diversity and inclusion are not just a set of tasks,
                they are part of our everyday mission. We know that a diverse,
                equitable, and inclusive company is a more innovative and
                successful one. And the same way we look at un(thinking) our
                products and services through game-changing IP and knowledge, we
                apply the same approach across our workforce, as we embrace
                diversity of background, perspective, culture, and experience.
                Learn more{" "}
                <Link to="/" className="text-primary hover:underline">
                  here
                </Link>
                .
              </p>
              <p className="text-sm 2xl:text-base leading-6 2xl:leading-8">
                INGANCI is publicly listed on NASDAQ (AGRI) and has a seasoned
                senior team and a vision that creates interest, excitement and,
                usually, the question: “How can I be a part of this?” <br />{" "}
                <br /> If you’d like to be on the INGANCI team and don’t see a
                position that fits your skill set,{" "}
                <a className="text-primary hover:underline " href="/">
                  email
                </a>{" "}
                us your resume with a short note on why you believe that you
                would be a great fit for INGANCI.
              </p>
              <hr className="w-full border-t" />
              <div className="w-full flex items-center justify-center py-[1rem] ">
                <button onClick={() => {navigate('/careers/jobs')}} className="flex justify-center self-end gap-3 items-center bg-primary py-3 px-4 min-w-[142px] rounded text-white text-sm hover:-translate-y-1 active:-translate-y-[2px]  hover:shadow-lg transition duration-200">
                  View available positions
                </button>
              </div>
              <hr className="w-full border-t" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
