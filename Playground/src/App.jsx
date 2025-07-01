import React from "react";
import Header from "./Static/Header";
import Hero from "./components/block/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
      </BrowserRouter>
    {/* <Header />
    <Hero /> */}
    </>
)
};
export default App