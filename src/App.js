import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Intro />
        <section>
          <div>
            <h2>Projects</h2>

            <button>Contact me</button>
          </div>

          <ul>
            <li>Design portfolio HTML CSS View project View code</li>

            <li>E-learning landing page HTML CSS View project View code</li>

            <li>Todo web app HTML CSS JavaScript View project View code</li>

            <li>
              Entertainment web app HTML CSS JavaScript View project View code
            </li>

            <li>Memory Game HTML CSS JavaScript View project View code</li>

            <li>
              Art gallery showcase HTML CSS JavaScript View project View code
            </li>
          </ul>
        </section>
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
