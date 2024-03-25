/** @format */

import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (input === "") {
        setResult("Error");
      } else {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult("Error");
        }
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator </h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "C", 0, "=", "+"].map(
          (btnValue) => (
            <button key={btnValue} onClick={() => handleClick(btnValue)}>
              {btnValue}
            </button>
          )
        )}
      </div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Calculator;
