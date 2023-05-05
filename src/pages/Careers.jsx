import React from 'react'
import Footer from '../components/Footer'
import eggnbowl from "../assets/eggnbowl.jpg"
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="w-full ">
      <div className="w-full min-h-screen mb-[5rem]">
        {/* CONTAINER  */}
        <div className="container">
          {/* CONTAINER WRAPPER */}
          <div>
            {/* THE HEADER TEXT PART */}
            <div className="mt-[8rem] 2xl:mt-[10rem] mb-[5rem] flex items-center gap-4">
              <hr className="w-24 h-1 bg-primary border-none " />
              <h1 className="whitespace-nowrap text-3xl 2xl:text-4xl text-gray4 font-semibold  ">
                CAREERS
              </h1>
              <hr className="h-1 w-[40%] bg-accent border-none    " />
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
                Learn more <Link to="/" className='text-primary hover:decoration-underline' >here</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers