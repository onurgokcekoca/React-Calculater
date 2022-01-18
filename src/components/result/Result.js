import React from "react";
import "./result.css";

function Result({ problem, result }) {
  return <div className="result">{result ? result : problem}</div>;
}

export default Result;
