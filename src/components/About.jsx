import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1000px] m-auto m:grid grid-cols-3 gap-8">
        <div className="cols-span-2">
          <h1 className="py-4 text-gray-600 text-3xl">About myself</h1>
          <p className="py-2 text-gray-600"></p>
          <p className="py-2 text-gray-600"></p>
        </div>
      </div>
    </div>
  );
};

export default About;
