import React, { useState } from "react";
import HomePage from "./components/HomePage";
import Translator from "./components/Translator";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleGetStarted = () => {
    setCurrentPage("translator");
  };

  const handleGoHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="app">
      {currentPage === "home" ? (
        <HomePage onGetStarted={handleGetStarted} />
      ) : (
        <>
          <header className="app-header">
            <div className="header-content">
              <h1 onClick={handleGoHome} className="header-title">
                🌍 LEXI AI
              </h1>
              <p>Break language barriers with AI-powered translation</p>
            </div>
          </header>
          <main className="app-main">
            <Translator />
          </main>
          <footer className="app-footer">
            <p>&copy; 2024 LEXI AI Language Translator. Powered by AI.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
