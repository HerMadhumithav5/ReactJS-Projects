import { useState, useEffect } from "react";
import "./AdviceApp.css";

function AdviceApp() {
  const [currentAdvice, setCurrentAdvice] = useState(
    "Click the button to get advice"
  );
  const [adviceHistory, setAdviceHistory] = useState([]);
  const [adviceCount, setAdviceCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // Fetch advice from API
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setCurrentAdvice(data.slip.advice); // update current advice
    } catch (error) {
      setCurrentAdvice("Something went wrong. Please try again.");
    }
  };

  // useEffect: Update history and count whenever new advice is generated
  useEffect(() => {
    // Only update for real advice, not initial message or error
    if (
      currentAdvice &&
      currentAdvice !==
        "Click the button to get advice" &&
      currentAdvice !==
        "Something went wrong. Please try again."
    ) {
      // Prepend new advice to history
      setAdviceHistory((prevHistory) => [currentAdvice, ...prevHistory]);
      // Increment total advice count
      setAdviceCount((prevCount) => prevCount + 1);
    }
  }, [currentAdvice]); // runs whenever currentAdvice changes

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${theme}`}>
      <div className="box">
        <div className="theme-btn">
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <h1 className="heading">Daily Advice</h1>

        <div className="advice-area">
          <p>{currentAdvice}</p>
        </div>

        <button className="main-btn" onClick={fetchAdvice}>
          Get Advice
        </button>

        <p className="counter">Advice Generated: {adviceCount}</p>

        <div className="history">
          <h3>Previous Advice</h3>
          <ul>
            {adviceHistory.map((advice, index) => (
              <li key={index}>{advice}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdviceApp;
