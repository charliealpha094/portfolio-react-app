import React from "react";

import CSS from "./../accessories/CSS3.png";
import github from "./../accessories/github.png";
import linux from "./../accessories/linux.png";
import mongodb from "./../accessories/MongoDB-Logo.jpg";
import mysql from "./../accessories/mysql.png";
import nodejs from "./../accessories/nodejs.png";
import python from "./../accessories/pythonlogo.png";
import reactjs from "./../accessories/reactjs.png";
import ubuntu from "./../accessories/Ubuntu_log.jpg";
import javascript from "./../accessories/Unofficial_JavaScript_logo_2.svg.png";
import html from "./../accessories/html.png";
import tailwind from "./../accessories/tailwind-css-logo-vector.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-[#ecf0f3] text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline  border-b-4">Skills</p>
          <h2 className="py-4">
            My knowledge and the technologies I've recently been working on...
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={html} alt="html icon" />
            <p className="my-3">HTML</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="html icon" />
            <p className="my-3">CSS</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={javascript} alt="html icon" />
            <p className="my-3">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={reactjs} alt="html icon" />
            <p className="my-3">ReactJs</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={github} alt="html icon" />
            <p className="my-3">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={linux} alt="html icon" />
            <p className="my-3">Linux</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={ubuntu} alt="html icon" />
            <p className="my-3">ubuntu</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={python} alt="html icon" />
            <p className="my-3">Python</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={nodejs} alt="html icon" />
            <p className="my-3">NodeJs</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={mongodb} alt="html icon" />
            <p className="my-3">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={mysql} alt="html icon" />
            <p className="my-3">MySql</p>
          </div>
          <div className="shadow-md shadow-[#bfc9c9] hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={tailwind} alt="html icon" />
            <p className="my-3">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
