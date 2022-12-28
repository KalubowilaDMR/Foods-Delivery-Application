import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCard from "./components/HeadlineCard";
import Foods from "./components/Foods";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <HeadlineCard/>
      <Foods/>
      <Category/>
    </div>
  );
}

export default App;
