import { motion } from "framer-motion";
import React from "react";

function Blog() {
  return (
    <>
      <motion.div
        initial={{
          x: -1900,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=" flex items-center justify-center w-full h-[90vh] bg-white dark:bg-slate-800"
      >
        <div className=" space-y-3 w-[45%] flex items-center justify-between">
          <motion.div
            initial={{
              x: -300,
              scale: 2
            }}
            animate={{
              x: 0,
              scale: 1
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
            className=" w-[400px] h-[400px] bg-black"
          ></motion.div>
          <motion.div
            initial={{
              x: 300,
              scale: 2
            }}
            animate={{
              x: 0,
              scale: 1
            }}
            transition={{
              duration: 0.3,
              delay: .5,
            }}
            className=" w-[40%]"
          >
            <h1 className=" text-[30px] font-semibold text-black">
              {" "}
              Lorem, ipsum dolor.
            </h1>
            <p className=" font-semibold text-[16px]">
              Lorem ipsum dolor sit amet. Lorem, ipsum.
            </p>
            <p className=" text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dicta error, excepturi nisi ipsum libero necessitatibus eum
              debitis incidunt accusantium nihil eveniet quas inventore
              cupiditate odit corrupti consequatur maiores rem in placeat iste
              esse illo ea! Minima quam, accusamus sint libero fugiat quibusdam!
              Porro hic pariatur harum odit cupiditate libero dolore, autem
              necessitatibus iure corrupti ipsam corporis aperiam eius suscipit
              expedita minus magni error consectetur sequi assumenda labore
              facere? Sapiente laborum eum odio, qui, asperiores quo impedit
              velit dolor sint neque aliquam reiciendis minima tempora dolorem
              amet atque ipsum dolores.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Blog;
