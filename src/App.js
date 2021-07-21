import React from "react";
import "./tailwind.css";
import "tailwindcss/tailwind.css"
import Nav from "./component/navbar"
import Hero from "./component/hero"
import About from "./component/about"
import Skills from "./component/skills"
import Projects from "./component/projects"

export default function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  );
}
