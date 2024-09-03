import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Feedback from "./Components/Feedback";
import Slider from "./Components/Slider";
import RegistrationForm from "./Components/RegistrationForm";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-[#EBF0FF]">
      <Navbar />
      <Hero />
      <Feedback />
      <Slider />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
