import React from "react";

import Defensive from "./../accessories/Defensive2.png";
import Weather from "./../accessories/Weatherapp.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-700 bg-[#fff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Work</p>
          <p className="py-6">Some of my most recent works!!</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 m:grid-cols-3 gap-4">
          {/* Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Defensive})` }}
            className="shadow-lg shadow-[#ecf0f3] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#ecf0f3] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-80">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS API App
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
