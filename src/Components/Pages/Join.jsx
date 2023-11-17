import { motion } from "framer-motion";
import React from "react";

function Join() {
  return (
    <div className=" flex items-center justify-center w-full h-screen bg-white dark:bg-slate-800">
      <div className=" w-[500px] py-6 rounded-lg px-5 dark:bg-slate-500 bg-slate-50 shadow-lg dark:shadow-md dark:shadow-slate-200">
        <div className=" w-full flex items-center justify-center">
          <div className=" w-[80px] h-[80px] rounded-full dark:bg-white bg-black"></div>
        </div>
        <div className=" text-center py-4">
          {" "}
          <h1 className=" dark:text-white text-[30px] font-semibold ">Create an account</h1>
          <p className=" text-[14px] font-normal dark:text-gray-50 text-gray-300">
            Start your 30-day free trial.
          </p>
        </div>
        <div className=" grid gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className=" text-[20px] w-full bg-transparent border-[2px] dark:border-slate-50 dark:text-white outline-none dark:placeholder-slate-100 border-gray-300 rounded-lg py-2 px-5"
          />
          <button className=" rounded-lg py-2 bg-purple-300 dark:bg-purple-800 dark:text-white text-white font-semibold text-[25px] text-center w-full">
            Get started
          </button>
        </div>
        <div className=" relative w-full h-[3px] bg-slate-400 my-10">

        <p className=" absolute -top-5  bg-white rounded-full  p-2 text-sm left-[45%] text-center">OR</p>
        </div>
        <div className=" grid grid-flow-row grid-row-3 gap-4">
          <With title="google" />
          <With title="facebook" />
          <With title="github" />
        </div>
      </div>
    </div>
  );
}

export default Join;
const With = (withprops) => {
  return (
    <>
      <button className="  border-[2px] dark:border-slate-100 border-slate-600 py-2 px-5 rounded-lg flex items-center justify-center space-x-3">
        <div className=" w-[30px] h-[30px] bg-black rounded-full"></div>
        <h1 className=" capitalize font-semibold dark:text-slate-25 text-slate-500">
          sign up with {withprops.title}
        </h1>
      </button>
    </>
  );
};
