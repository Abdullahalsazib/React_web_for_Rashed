import { motion } from "framer-motion";
import { Link, Menu, MenuIcon, MoonStar, SunMedium } from "lucide-react";
import React, { useEffect, useState } from "react";
import DLogo from "./PNG/logoD.png";
import LLogo from "./PNG/LogoL.png";

const MenuList = [
  { menuTitle: "Home", menuLink: "/" },
  { menuTitle: "About", menuLink: "/about" },
  { menuTitle: " Blog", menuLink: "/blog" },
  { menuTitle: "Contact", menuLink: "/contact" },
];
function Navbar() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // const [open, setOpen] = useState(false);
  // console.log(open);

  return (
    <div className=" relative px-5 lg:px-[10%] dark:shadow-black shadow-md shadow-blue-100   w-full dark:bg-slate-900  bg-transparent text-white py-4  flex items-center justify-between">
      <a href="/" className=" text-slate-900 dark:text-white font-bold ">
        {theme === "dark" ? (
          <img className=" w-[15%]" src={LLogo} alt="" />
        ) : (
          <img className=" w-[15%]" src={DLogo} alt="" />
        )}
      </a>

      <div className="flex items-center space-x-10">
        <ul
          className={`capitalize space-x-5 font-bold text-[19px] flex items-center justify-center`}
        >
          {MenuList.map((items, index) => (
            <li key={index}>
              <a
                className={`py-2 px-5 focus:text-black  text-slate-400`}
                href={items.menuLink}
              >
                {items.menuTitle}
              </a>
            </li>
          ))}
          <a
            href="./src/assets/resume.pdf"
            download
            className=" bg-[#ff5503] py-1 px-4 text-[18px] uppercase rounded-lg font-Roboto font-[500] dark:bg-transparent dark:border-[3px] dark:border-[#ff5503] border-[3px] border-white hover:bg-transparent hover:text-black dark:hover:bg-[#ff5503] dark:hover:border-transparent flex items-center space-x-3"
          >
            <p>resume</p>
            <Link size="18" className="" />
          </a>
        </ul>

        <div
          className={`  px-2 w-[65px]  py-1 rounded-full flex items-center ${
            theme === "dark"
              ? "justify-end bg-slate-400"
              : "justify-start bg-slate-900"
          }`}
          onClick={handleThemeSwitch}
        >
          {theme === "dark" ? (
            <SunMedium className=" text-black" />
          ) : (
            <MoonStar className=" text-white" />
          )}
        </div>
        {/* <div className=" lg:hidden block" onClick={() => setOpen(!open)}>
          <Menu
            size={40}
            className=" dark:text-white text-black block "
          />
        </div> */}
      </div>

      <div className="left-0 w-[100%] top-0 h-[6px] flex items-center  absolute ">
        <motion.div
          initial={{
            x: 2000,
            opacity: 5,
          }}
          animate={{
            x: -300,
            opacity: 0.2,
          }}
          transition={{
            duration: 3,
          }}
          className=" w-[150px] h-[6px] bg-red-500 rounded-full"
        ></motion.div>
        <motion.div
          initial={{
            x: 2000,
            opacity: 5,
          }}
          animate={{
            x: -300,
            opacity: 0.2,
          }}
          transition={{
            duration: 3,
          }}
          className=" w-[150px] h-[6px] bg-white rounded-full"
        ></motion.div>
        <motion.div
          initial={{
            x: 2000,
            opacity: 5,
          }}
          animate={{
            x: -600,
            opacity: 0.2,
          }}
          transition={{
            duration: 3,
          }}
          className=" w-[150px] h-[6px] bg-green-500 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
}

export default Navbar;
