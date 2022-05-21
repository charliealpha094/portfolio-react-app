import React from "react";

import Defensive from "./../accessories/Defensive2.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-700 bg-[#fff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Work</p>
          <p className="py-6">Some of my most recent works!!</p>
        </div>

        <div
          style={{ backgroundImage: `url(${Defensive})` }}
          className="grid sm:grid-cols-2 m:grid-cols-3 gap-4"
        >
          <div className="shadow-lg shadow-[#ecf0f3] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div>
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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
