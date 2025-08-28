import React from "react";
import "./TextArea.css";

function TextArea({ value, onChange, placeholder, disabled, charCount, maxChars }) {
  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      onChange(text);
    }
  };

  return (
    <div className="text-area-wrapper">
      <textarea
        className="text-area"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={8}
      />
      <div className="char-counter">
        <span className={charCount > maxChars * 0.8 ? "char-counter-warning" : ""}>
          {charCount}
        </span>
        / {maxChars}
      </div>
    </div>
  );
}

export default TextArea;
