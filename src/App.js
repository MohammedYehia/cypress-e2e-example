import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <h1>Cypress test Example</h1>
      <div>
        Num 1 {"   "}
        <input
          id="num1"
          type="number"
          onChange={e => setNum1(e.target.value)}
        />
      </div>
      <div>
        Num 2 {"   "}
        <input
          id="num2"
          type="number"
          onChange={e => setNum2(e.target.value)}
        />
      </div>
      <div className="result">result : {result}</div>
      <button
        type="button"
        disabled={!num1 || !num2}
        onClick={() => setResult(+num1 + +num2)}
      >
        Sum
      </button>
    </div>
  );
}

export default App;
