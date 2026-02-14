import { useState, useEffect } from "react";
import "./AdviceApp.css";

function AdviceApp() {
  const [currentAdvice, setCurrentAdvice] = useState(
    "Click the button to get advice",
  );
  const [adviceHistory, setAdviceHistory] = useState([]);
  const [adviceCount, setAdviceCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setCurrentAdvice(data.slip.advice);
    } catch (error) {
      setCurrentAdvice("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (
      currentAdvice &&
      currentAdvice !== "Click the button to get advice" &&
      currentAdvice !== "Something went wrong. Please try again."
    ) {
      setAdviceHistory((prevHistory) => [currentAdvice, ...prevHistory]);

      setAdviceCount((prevCount) => prevCount + 1);
    }
  }, [currentAdvice]);
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
