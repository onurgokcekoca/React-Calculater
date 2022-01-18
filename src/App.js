import "./App.css";
import Result from "./components/result/Result";
import Button from "./components/buttons/Button";
import { useState } from "react";

function App() {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState("");
  console.log(problem);
  return (
    <div className="App">
      <div className="calculator">
        <Result problem={problem} result={result} />
        <Button
          setResult={setResult}
          problem={problem}
          setProblem={setProblem}
          result={result}
        />
      </div>
    </div>
  );
}

export default App;
