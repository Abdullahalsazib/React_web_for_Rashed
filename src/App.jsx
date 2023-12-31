import React from "react";
import NoPage from "./Components/Pages/NoPage";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Join from "./Components/Pages/Join";
import Contact from "./Components/Pages/Contact";
function App() {
  return (
    <>
      <div
        className={` bg-[url('./Components/Pages/PNG/light.png')] dark:bg-[url('./Components/Pages/PNG/dark.png')] bg-center bg-cover w-full h-screen`}
      >
        <Navbar />
        <Router>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
