import React from "react";
import Resume from "../pages/Resume";
import Porfolio from "../pages/Porfolio";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/porfolio" element={<Porfolio />} />
      </Routes>
    </div>
  );
};

export default Router;
