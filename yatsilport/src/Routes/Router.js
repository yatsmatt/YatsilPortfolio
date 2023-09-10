import React from "react";
import Porfolio from "../pages/Porfolio";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porfolio" element={<Porfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;
