import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";

function App() {
  const [headingNum, setHeadingNum] = useState([]);
  const [numset1, setNumset1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isCleared, setIsCleared] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  function onClickNum(e) {
    if (parseInt(e.target.innerHTML) > 0 || headingNum.length > 0) {
      if (operator === null) {
        const newNumList = [...headingNum, e.target.innerHTML];
        setHeadingNum(newNumList);
      } else if (isCleared) {
        const newNumList = [...headingNum, e.target.innerHTML];
        setHeadingNum(newNumList);
      } else {
        setHeadingNum(e.target.innerHTML);
        setIsCleared(true);
      }
    } else {
      console.log("Invalid Starting Number");
    }
  }
  function onClickClear() {
    setHeadingNum([]);
    setNumset1(null);
    setOperator(null);
  }
  function onClickDel() {
    const newNumList = [...headingNum];
    newNumList.splice(-1, 1);
    setHeadingNum(newNumList);
  }
  function onClickOperator(e) {
    if (numset1 !== null && isCalculated === false) {
      onClickCalculate();
    } else {
      setOperator(e.target.innerHTML);
      const newNumList = [...headingNum];
      setNumset1(newNumList.join(""));
    }
    setIsCleared(false);
  }

  function onClickCalculate() {
    const numShown = [...headingNum];
    const plus = (parseInt(numset1) + parseInt(numShown.join(""))).toString();
    const minus = (parseInt(numset1) - parseInt(numShown.join(""))).toString();
    const multiple = (
      parseInt(numset1) * parseInt(numShown.join(""))
    ).toString();
    const divide = (parseInt(numset1) / parseInt(numShown.join(""))).toString();
    switch (operator) {
      case "+":
        setHeadingNum(plus);
        setNumset1(plus);
        setIsCalculated(true);
        break;
      case "-":
        setHeadingNum(minus);
        setNumset1(minus);
        setIsCalculated(true);
        break;
      case "*":
        setHeadingNum(multiple);
        setNumset1(multiple);
        setIsCalculated(true);
        break;
      case "/":
        setHeadingNum(divide);
        setNumset1(divide);
        setIsCalculated(true);
        break;
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <div className="numpad-head">{headingNum}</div>
        <Numpad
          onClickDel={onClickDel}
          onClickClear={onClickClear}
          onClickNum={onClickNum}
          onClickOperator={onClickOperator}
          onClickCalculate={onClickCalculate}
        />
      </div>
    </div>
  );
}

export default App;
