import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1 className="title-funky">Funky</h1>
          <h1 className="title-dictionary">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded with love by Kenya Caines,
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
