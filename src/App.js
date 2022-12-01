import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Intro />
        <Projects />
      </main>
      <div className="bg-alt">
        <footer className="footer">
          <Contact />
          <Navbar />
        </footer>
      </div>
    </div>
  );
}

export default App;
