import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ecf0f3]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full space-y-2">
        <p className="text-black text-3xl ">
          Hello! Thanks for visiting my website!
        </p>

        <h1 className="text-4xl text-gray-700 space-y-4">
          <span className="text-[#0c4e83]"> Carlos</span>, Front-end Developer
        </h1>
        <p className="py-4 max-w-[700px] ">
          I'm a front-end web-developer, currently developing mainly in ReactJS
          while learning back-end technologies... Practicing programming on a
          daily basis.
        </p>

        <div className="flex flex-row space-x-4">
          <div>
            <form action="https://github.com/charliealpha094">
              <button
                type="submit"
                className="text-black group border-2 px-6 py-3 my-2 flex items-center bg-white hover:bg-blue-600 hover:border-orange-600"
              >
                GitHub{" "}
                <span className="group-hover:rotate-90 duration-300"></span>
              </button>
            </form>
          </div>
          <div>
            <button
              type="submit"
              className="text-black group border-2 px-6 py-3 my-2 flex items-center bg-white hover:bg-blue-600 hover:border-orange-600"
            >
              Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
