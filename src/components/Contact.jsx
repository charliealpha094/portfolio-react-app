import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ecf0f3] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Contact</p>
          <p className="py-4">
            To contact me submit the form below or simply send me an email
            directly to -{" "}
            <span className="text-[#0c4e83]"> carlosamaral94@gmail.com</span>
          </p>
        </div>
        <input
          className="bg-[#fff]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#fff] my-4 p-2"
          type="text"
          placeholder="Email"
          name="name"
        />
        <textarea name="message" cols="30" rows="9"></textarea>
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
