/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css"; // Ensure you include the font in your CSS file
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Certs from "./Components/Certs";
import Contact from "./Components/Contact";
import Ach from "./Components/Ach";
import CoCurricular from "./Components/CoCurricular";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certs />
      <Ach />
      <CoCurricular />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
