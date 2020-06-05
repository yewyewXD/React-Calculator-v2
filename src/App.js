import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [numset1, setNumset1] = useState(0);
  const [numset2, setNumset2] = useState(0);
  const [operator, setOperator] = useState("");

  function onClickNum(e) {
    setNumbers([]);
    const newNumList = [...numbers, e.target.innerHTML];
    setNumbers(newNumList);
  }
  function onClickClear() {
    setNumbers([]);
    setNumset1(0);
    setNumset2(0);
  }
  function onClickDel() {
    const newNumList = [...numbers];
    newNumList.splice(-1, 1);
    setNumbers(newNumList);
  }
  function onClickPlus() {
    setOperator("+");
    const newNumList = [...numbers];
    setNumset1(newNumList.join(""));
    setNumbers([]);
  }
  function onClickCalculate() {
    const newNumList = [...numbers];
    const plus = parseInt(numset1) + parseInt(newNumList.join(""));
    switch (operator) {
      case "+":
        setNumbers(plus);
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <div className="numpad-head">{numbers}</div>
        <Numpad
          onClickDel={onClickDel}
          onClickClear={onClickClear}
          onClickNum={onClickNum}
          onClickPlus={onClickPlus}
          onClickCalculate={onClickCalculate}
        />
      </div>
    </div>
  );
}

export default App;
