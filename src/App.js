
import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../src/components/Signup/Signup";
import Homepage from "../src/components/Homepage/Homepage";
import Landing from "../src/components/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import FirstLand from "./components/FirstLand/FirstLand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/FirstLand" element={<FirstLand />} />
    </Routes>
  );
}

export default App;

