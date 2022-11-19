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
      <footer className="footer">
        <Contact />
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
