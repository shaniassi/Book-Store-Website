import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/About/Hero/Hero";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Categories />
        <About />
      </div>
    </>
  );
};

export default App;
