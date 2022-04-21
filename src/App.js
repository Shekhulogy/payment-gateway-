import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Donation from "./components/Donation";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/donation" element={<Donation />} />
      </Routes>
    </>
  );
}

export default App;
