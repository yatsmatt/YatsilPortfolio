import React from "react";
import Resume from "../pages/Resume";
import Porfolio from "../pages/Porfolio";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Porfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default Router;
