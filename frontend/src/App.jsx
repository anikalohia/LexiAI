import React from "react";
import Translator from "./components/Translator";
import "./App.css";



function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🌍LEXI AI </h1>
        <p>Break language barriers with AI-powered translation</p>
      </header>
      <main className="app-main">
        <Translator />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 MIMB Language Translator. Powered by AI.</p>
      </footer>
    </div>
  );
}

export default App;
