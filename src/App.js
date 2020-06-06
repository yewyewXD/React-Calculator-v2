import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";
import NumpadHead from "./NumpadHead";

function App() {
  const [headingNum, setHeadingNum] = useState([]);
  const [preservedNum, setPreservedNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isCleared, setIsCleared] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [toggleNegate, setToggleNegate] = useState(true);

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
      setIsCalculated(false);
    } else {
      console.log("Invalid Starting Value");
    }
  }
  function onClickClear() {
    setHeadingNum([]);
    setPreservedNum(null);
    setOperator(null);
  }
  function onClickDel() {
    const newNumList = [...headingNum];
    newNumList.splice(-1, 1);
    setHeadingNum(newNumList);
  }
  function onClickOperator(e) {
    if (headingNum.length > 0) {
      if (preservedNum !== null && isCalculated === false) {
        onClickCalculate();
      } else {
        const newNumList = [...headingNum];
        setPreservedNum(newNumList.join(""));
      }
      setOperator(e.target.innerHTML);
      setIsCleared(false);
    } else {
      console.log("Invalid Starting Value");
    }
  }
  function onClickNegate() {
    if (toggleNegate) {
      const newNumList = ["-", ...headingNum];
      setHeadingNum(newNumList);
    } else {
      const newNumList = [...headingNum];
      newNumList.splice(0, 1);
      setHeadingNum(newNumList);
    }
    setToggleNegate(!toggleNegate);
  }
  function onClickCalculate() {
    const numShown = [...headingNum];
    const plus = (
      parseInt(preservedNum) + parseInt(numShown.join(""))
    ).toString();
    const minus = (
      parseInt(preservedNum) - parseInt(numShown.join(""))
    ).toString();
    const multiple = (
      parseInt(preservedNum) * parseInt(numShown.join(""))
    ).toString();
    const divide = (
      parseInt(preservedNum) / parseInt(numShown.join(""))
    ).toString();
    switch (operator) {
      case "+":
        setHeadingNum(plus);
        setPreservedNum(plus);
        setIsCalculated(true);
        break;
      case "-":
        setHeadingNum(minus);
        setPreservedNum(minus);
        setIsCalculated(true);
        break;
      case "*":
        setHeadingNum(multiple);
        setPreservedNum(multiple);
        setIsCalculated(true);
        break;
      case "/":
        setHeadingNum(divide);
        setPreservedNum(divide);
        setIsCalculated(true);
        break;
      default:
        console.log("Invalid Starting Value");
    }
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator V2</h1>
        <NumpadHead headingNum={headingNum} />
        <Numpad
          onClickDel={onClickDel}
          onClickClear={onClickClear}
          onClickNum={onClickNum}
          onClickOperator={onClickOperator}
          onClickCalculate={onClickCalculate}
          onClickNegate={onClickNegate}
        />
      </div>
    </div>
  );
}

export default App;
