import React from "react";
import "./TranslationResult.css";

function TranslationResult({ text, isLoading, error }) {
  if (isLoading) {
    return (
      <div className="translation-result loading">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>Translating your text...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="translation-result error">
        <div className="error-icon">⚠️</div>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!text) {
    return (
      <div className="translation-result empty">
        <div className="empty-content">
          <div className="empty-icon">📝</div>
          <p>Translation will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="translation-result">
      <div className="result-content">
        <p className="translated-text">{text}</p>
      </div>
    </div>
  );
}

export default TranslationResult;
