import { useState } from "react";
import "./AdviceApp.css";

function AdviceApp() {
  const [message, setMessage] = useState("Click the button to get advice");
  const [pastAdvice, setPastAdvice] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [mode, setMode] = useState("light");

  async function fetchAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      const text = data.slip.advice;

      setMessage(text);
      setPastAdvice([text, ...pastAdvice]);
      setTotalCount(totalCount + 1);
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    }
  }

  function changeMode() {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  return (
    <div className={`container ${mode}`}>
      <div className="box">
        <div className="theme-btn">
          <button onClick={changeMode}>
            {mode === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <h1 className="heading">Daily Advice</h1>
        <div className="advice-area">
          <p>{message}</p>
        </div>
        <button className="main-btn" onClick={fetchAdvice}>
          Get Advice
        </button>
        <p className="counter">
          Advice Generated: {totalCount}
        </p>
        <div className="history">
          <h3>Previous Advice</h3>
          <ul>
            {pastAdvice.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AdviceApp;
