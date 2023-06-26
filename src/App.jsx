import React, { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleModeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleModeSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div className="font-poppins bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection></HeroSection>
          <Services></Services>
          <Works></Works>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default App;
