import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const MenuList = [
  { menuTitle: "Home", menuLink: "/" },
  { menuTitle: " Blog", menuLink: "/blog" },
  { menuTitle: "About", menuLink: "/about" },
  { menuTitle: "Contact Us", menuLink: "/contact" },
];
function Navbar() {
  const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);
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
  return (
    <div className=" relative px-[10%] dark:shadow-black shadow-md shadow-blue-100   w-full dark:bg-slate-900  bg-transparent text-white py-4  flex items-center justify-between">
      <a
        href="/"
        className=" text-slate-900 dark:text-white font-bold text-[23px]"
      >
        Logo
      </a>
      <div className=" flex items-center space-x-10">
        <ul className=" capitalize space-x-5 font-bold text-[19px] flex items-center justify-center">
          {MenuList.map((items, index) => (
            <motion.li
              key={index}
              whileTap={{
                scale: 2,
                transition: { duration: 0.5 },
              }}
            >
              <a
                className={`py-2 px-5 focus:text-black  text-slate-400`}
                href={items.menuLink}
              >
                {items.menuTitle}
              </a>
            </motion.li>
          ))}
        </ul>
        <div
          className={`  px-1 w-[65px] py-1 rounded-full flex items-center  ${
            theme === "light"
              ? "justify-end bg-slate-900 border-[2px] border-black"
              : "justify-start bg-white border-[2px] border-black"
          } `}
          onClick={handleThemeSwitch}
        >
          <motion.div
            animate={{
              transition: { duration: 2 },
            }}
            className={` w-[20px] h-[20px]  rounded-full ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
          ></motion.div>
        </div>
        {/* <motion.a
          whileTap={{
            scale: 2,
            transition: { duration: 0.5 },
          }}
          href="/join"
          className=" ring-[3px] ring-blue-500 hover:bg-sky-500 duration-200 hover:ring-sky-500 hover:text-black bg-blue-500 py-2 px-5 uppercase rounded-md text-white font-semibold"
        >
          join now
        </motion.a> */}
      </div>

      <div className="left-0 w-[100%] top-0 h-[6px]  absolute ">
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
          className=" w-[250px] h-[6px] bg-red-500 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
}

export default Navbar;
