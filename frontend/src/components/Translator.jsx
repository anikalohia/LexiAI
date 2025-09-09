import React, { useState, useCallback } from "react";
import axios from "axios";
import LanguageSelector from "./LanguageSelector";
import TextArea from "./TextArea";
import TranslateButton from "./TranslateButton";
import TranslationResult from "./TranslationResult";


const SUPPORTED_LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "it", name: "Italian", flag: "🇮🇹" }
];

function Translator() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = useCallback((text) => {
    setSourceText(text);
    setCharCount(text.length);
    setError("");
    if (translatedText) setTranslatedText("");
  }, [translatedText]);

  const handleLanguageSwap = useCallback(() => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  }, [sourceLang, targetLang, sourceText, translatedText]);

  const handleTranslate = useCallback(async () => {
    if (!sourceText.trim()) {
      setError("Please enter some text to translate");
      return;
    }

    if (sourceLang === targetLang) {
      setError("Source and target languages must be different");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/translate", {
        text: sourceText,
        source_lang: sourceLang,
        target_lang: targetLang,
      });
      
      setTranslatedText(response.data.translated_text);
    } catch (error) {
      console.error("Translation error:", error);
      setError(
        error.response?.data?.error || 
        "Failed to translate text. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [sourceText, sourceLang, targetLang]);

  const clearAll = useCallback(() => {
    setSourceText("");
    setTranslatedText("");
    setError("");
    setCharCount(0);
  }, []);

  return (
    <div className="translator">
      <div className="translator-container">
        <div className="language-selectors">
          <LanguageSelector
            label="From"
            value={sourceLang}
            onChange={setSourceLang}
            languages={SUPPORTED_LANGUAGES}
            disabled={isLoading}
          />
          
          <button 
            className="swap-button"
            onClick={handleLanguageSwap}
            disabled={isLoading || !sourceText || !translatedText}
            title="Swap languages"
          >
            🔄
          </button>
          
          <LanguageSelector
            label="To"
            value={targetLang}
            onChange={setTargetLang}
            languages={SUPPORTED_LANGUAGES}
            disabled={isLoading}
          />
        </div>

        <div className="text-areas">
          <div className="text-area-container">
            <TextArea
              value={sourceText}
              onChange={handleTextChange}
              placeholder="Enter text to translate..."
              disabled={isLoading}
              charCount={charCount}
              maxChars={5000}
            />
          </div>

          <div className="text-area-container">
            <TranslationResult
              text={translatedText}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>

        <div className="translator-actions">
          <TranslateButton
            onClick={handleTranslate}
            isLoading={isLoading}
            disabled={!sourceText.trim() || sourceLang === targetLang}
          />
          
          {(sourceText || translatedText) && (
            <button 
              className="clear-button"
              onClick={clearAll}
              disabled={isLoading}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Translator;
