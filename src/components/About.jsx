import React from "react";

import macintosh from "./../accessories/gummy-macintosh.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1040px] m-auto m:grid grid-cols-3 gap-8">
        <div className="cols-span-2">
          <h1 className="py-4 text-gray-600 text-3xl">About myself</h1>
          <p className="py-2 text-gray-600">
            During COVID-19 pandemics and lockdowns, I decided to change my life
            and start to learn programming. Being born in the 90's, I've always
            been connected to computers and technology, so it was time to learn
            how a tech machine or a piece of software works under the hood...
          </p>
          <p className="py-2 text-gray-600">
            I started by learning Python and developed some simple and
            interesting GUI applications that developed my interest in
            programming. However I also wanted to build websites, and even
            though Python has some frameworks for that purpose such as Django
            and Flask, I had to put my time and effort to learn HTML, CSS and
            then JavaScript. I also learned MySql databases, started to work
            with Linux as my main OS and right now I'm focused on building
            responsive frontend applications with ReactJs as well as learning
            some backend techs like NodeJs and MongoDb.
          </p>
        </div>
        <div className="w-[50%] h-[14rem] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img className="rounded-xl" src={macintosh} alt="classic macintosh" />
        </div>
      </div>
    </div>
  );
};

export default About;
