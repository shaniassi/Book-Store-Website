import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Navbar/Hero/Hero";
import Categories from "./components/Navbar/Categories/Categories";



const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Categories />
      </div>
    </>
  );
};

export default App;
