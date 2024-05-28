import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/About/Hero/Hero";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Blog  from "./components/Blog/Blog";
import Addpage from "./components/Addpage";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Categories />
        <About />
        <Blog />
        <Addpage />
      </div>
    </>
  );
};

export default App;
