import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Navbar />
      </header>
      <main>
        <section>
          <img src="" alt="" />
          <h1>
            Nice to meet you! I'm <b>Adam Keyes</b>.
          </h1>
          <p>
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <button>Contact me</button>

          <div>
            <ul>
              <li>HTML 4 Years Experience</li>

              <li>CSS 4 Years Experience</li>

              <li>JavaScript 4 Years Experience</li>

              <li>Accessibility 4 Years Experience</li>

              <li>React 3 Years Experience</li>

              <li>Sass 3 Years Experience</li>
            </ul>
          </div>
        </section>
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
