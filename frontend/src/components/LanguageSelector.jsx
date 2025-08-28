import React from "react";
import "./LanguageSelector.css";

function LanguageSelector({ label, value, onChange, languages, disabled }) {
  return (
    <div className="language-selector">
      <label className="language-label">{label}</label>
      <div className="select-wrapper">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="language-select"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <div className="select-arrow">▼</div>
      </div>
    </div>
  );
}

export default LanguageSelector;
