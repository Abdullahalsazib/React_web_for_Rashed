import React from "react";
import NoPage from "./Components/Pages/NoPage";
import Home from "./Components/Pages/Home";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import Join from "./Components/Pages/Join";

function App() {
  return (
    <div className=" relative bg-slate-25 dark:bg-dark-800">
      <Navbar />
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
