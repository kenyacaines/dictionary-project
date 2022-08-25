import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          Kenya's Dictionary App
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Kenya Caines</small>
        </footer>
      </div>
    </div>
  );
}


