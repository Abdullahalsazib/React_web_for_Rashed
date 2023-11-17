import React from "react";
import NoPage from "./Components/Pages/NoPage";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Join from "./Components/Pages/Join";
import { motion } from "framer-motion";

function App() {
  return (
    <div className=" relative bg-slate-25 dark:bg-dark-800">
      {/* <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100% "}}
        transition={{ duration: 2 }}
        className=" bg-slate-50 w-[100vw] top-0 py-10 absolute"
      ></motion.div> */}
  
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
