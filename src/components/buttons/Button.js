import React from "react";
import "./button.css";

function Button({ setProblem, problem, setResult, result }) {
  const buttonClick = (e) => {
    setResult("");
    setProblem((prev) => `${prev === "Error" ? "" : prev}${e.target.value}`);
  };

  const resultButton = () => {
    setProblem("");
    try {
      //js (0.2*3 = 0.600000001)
      setResult(eval(problem).toFixed(6));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearResult = () => {
    setResult("");
  };

  return (
    <div className="buttons">
      <button className="clear" onClick={clearResult} value="c">
        c
      </button>
      <button onClick={buttonClick} value={7}>
        7
      </button>
      <button onClick={buttonClick} value={8}>
        8
      </button>
      <button onClick={buttonClick} value={9}>
        9
      </button>

      <button onClick={buttonClick} value="/">
        /
      </button>
      <button onClick={buttonClick} value={4}>
        4
      </button>
      <button onClick={buttonClick} value={5}>
        5
      </button>
      <button onClick={buttonClick} value={6}>
        6
      </button>
      <button onClick={buttonClick} value="*">
        *
      </button>
      <button onClick={buttonClick} value={1}>
        1
      </button>
      <button onClick={buttonClick} value={2}>
        2
      </button>
      <button onClick={buttonClick} value={3}>
        3
      </button>

      <button onClick={buttonClick} value="+">
        +
      </button>
      <button onClick={buttonClick} value=".">
        .
      </button>
      <button onClick={buttonClick} value={0}>
        0
      </button>
      <button className="equalButton" onClick={resultButton}>
        {" "}
        =
      </button>
      <button onClick={buttonClick} value="-">
        -
      </button>
    </div>
  );
}

export default Button;
