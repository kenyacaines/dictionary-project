import React from "react";
import Dictionary from "./Dictionary";
import logo from "./Dictionary-title.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="The Groovy Dictionary" />
        </header>
        <main>
          <Dictionary defaultKeyword="rainbow" />
        </main>
        <footer className="App-footer">
          <small>
            Coded with love by Kenya Caines,{" "}
            <a
              href="https://github.com/kenyacaines/dictionary-project"
              rel="no referrer"
            >
              open-sourced.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
