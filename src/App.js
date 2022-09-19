import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded with love by Kenya Caines</small>
        </footer>
      </div>
    </div>
  );
}


