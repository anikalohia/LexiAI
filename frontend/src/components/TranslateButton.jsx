import React from "react";
import "./TranslateButton.css";

function TranslateButton({ onClick, isLoading, disabled }) {
  return (
    <button
      className={`translate-button ${isLoading ? "loading" : ""}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <>
          <span className="spinner"></span>
          Translating...
        </>
      ) : (
        <>
          🌐 Translate
        </>
      )}
    </button>
  );
}

export default TranslateButton;
