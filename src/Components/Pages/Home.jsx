import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaUserShield } from "react-icons/fa";
import React from "react";
import {
  Facebook,
  GitBranch,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
const SocLink = [
  {
    Icon: Linkedin,
    hrerLink: "https://www.facebook.com/abdullahalsazib22",
  },
  {
    Icon: Facebook,
    hrerLink: "https://www.facebook.com/abdullahalsazib22",
  },
  {
    Icon: Instagram,
    hrerLink: "https://www.facebook.com/abdullahalsazib22",
  },
  {
    Icon: Twitter,
    hrerLink: "https://www.facebook.com/abdullahalsazib22",
  },
  
];

function Home() {
  return (
    <div className=" px-[10%] w-full h-[100vh] flex items-center justify-between">
      <motion.div
        initial={{
          x: -500,
        }}
        animate={{
          x: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className=" bottom-[140px] absolute left-[20px]"
      >
        <ul className="">
          {SocLink.map((items, index) => (
            <li key={index}>
              <a
                className=" rounded-full my-3 p-4 dark:bg-slate-700 dark:hover:bg-[#ff5503] bg-transparent border-[3px] border-black dark:border-white duration-300 hover:bg-[#ff5503] grid grid-flow-col gap-5"
                href={items.hrerLink}
              >
                {<items.Icon size="23" className=" dark:text-white text-[black]" />}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{
          x: -500,
        }}
        animate={{
          x: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className=" dark:text-white space-y-2"
      >
        <h1 className=" text-[20px] font-semibold">
          <p className=" font-Poppins font-[400]">Hi.. There..... 🌺 I'm a </p>
          <span className=" text-[55px] font-Poppins">
            <p className=" dark:slate-500 font-Poppins text-[60px] font-[400]">
              {" "}
              Professional
            </p>
            <p className=" dark:text-[#ff5003] capitalize">
              Digital Markater
              <span className=" px-5 font-Poppins text-[30px] dark:text-white text-[#ff5003]">
                and <br />
              </span>
              Content writer
            </p>
          </span>
        </h1>

        <h1 className=" text-[70px] font-bold leading-tight">
          <p className=" text-[20px] font-Poppins font-[400] tracking-[10px]">
            My Name is
          </p>

          <span className=" text-[#ff5003] font-Roboto">
            <span className=" dark:text-white text-black pr-10">MD:</span>
            Rashedul Islam
          </span>
        </h1>
        <div className=" flex items-center  space-x-6 pt-5">
          <a
            href="/"
            className=" bg-[#ff5503] px-10 rounded-md p-3 dark:text-white flex items-center  gap-x-3 dark:ring-[#ff5503] hover:text-black text-white duration-300 hover:bg-transparent hover:ring-2 hover:ring-blue-500 font-Roboto font-[500] text-[20px]"
          >
            Hier Me <FaExternalLinkAlt />
          </a>
          <a
            href="/about"
            className=" bg-transparent ring-[3px] border-slate-600 hover:right-3 hover:text-white hover:bg-blue-400 hover:ring-blue-500 duration-300 px-10 rounded-md p-3 font-Roboto font-[500] text-[20px] flex items-center gap-x-3"
          >
            About Me{" "}
            <FaUserShield className=" text-[#ff5503] dark:text-white" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        className=" "
      >
        <img className=" w-[80% ]" src="./src/assets/Home.svg" alt="" />
      </motion.div>
    </div>
  );
}

export default Home;
