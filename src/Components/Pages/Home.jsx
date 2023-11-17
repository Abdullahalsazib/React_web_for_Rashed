import { motion } from "framer-motion";
import React from "react";

function Home() {
  return (
    <motion.div
      initial={{
        x: -1900,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className=" flex items-center justify-center w-full h-[90vh] dark:bg-slate-800 bg-white"
    >
      <div className=" space-y-3 w-[45%]">
        <motion.h1
          initial={{
            y: -200,
            opacity: 0.4,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className=" text-[70px] dark:text-white font-bold text-center"
        >
          Hi There... 🌺 <br /> <p className=" text-sm">My name is</p>
          <h1>
            Abdullah Al <span className=" dark:text-purple-200 text-purple-500">Sazib</span>
          </h1>
        </motion.h1>
        <motion.h2 initial={{scale: 2.2}} animate={{
          scale: 1
        }}
        transition={{
          duration: 2
        }} className=" dark:text-slate-100 text-[20px] font-semibold text-center pb-4">I'm a <span className=" text-red-500">Web Designer</span> and <span className=" text-purple-500">Developer</span></motion.h2>
        <p className=" text-sm font-sans text-slate-600 dark:text-slate-50 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          aliquid, aperiam Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Nisi accusamus amet fuga eaque quam et ea! Aspernatur officia
          eos cum unde molestias vel dolorem, numquam obcaecati, quibusdam
          temporibus facilis sunt? laudantium modi aliquam totam saepe fugiat
          dolorum libero expedita.
        </p>
        <div className=" space-x-5 flex items-center justify-center py-6">
          <motion.button
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className=" ring-[3px] ring-blue-500 hover:bg-sky-500 duration-200 hover:ring-sky-500 hover:text-black bg-blue-500 py-2 px-5 rounded-md text-white font-semibold"
          >
            Live Demo
          </motion.button>
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className=" ring-[3px] ring-blue-500 bg-slate-50 py-2 px-5 rounded-md text-black font-semibold"
          >
            See more
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
