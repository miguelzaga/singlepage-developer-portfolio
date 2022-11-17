import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

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
      <footer>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form>
          Name Email Message
          <button>Send message</button>
        </form>

        <nav> adamkeyes</nav>
      </footer>
    </div>
  );
}

export default App;
