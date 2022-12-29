import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Foods from "./components/Foods";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <HeadlineCard/>
      <Foods/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
