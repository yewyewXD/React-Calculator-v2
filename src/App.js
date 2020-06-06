import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";

function App() {
  const [headingNum, setHeadingNum] = useState([]);
  const [numset1, setNumset1] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isCleared, setIsCleared] = useState(false);

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
  function onClickPlus(e) {
    if (numset1 !== null) {
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
    const plus = parseInt(numset1) + parseInt(numShown.join(""));
    switch (operator) {
      case "+":
        setHeadingNum(plus);
        const result = plus.toString();
        setNumset1(result);
    }
  }
  console.log(numset1);

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <div className="numpad-head">{headingNum}</div>
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
