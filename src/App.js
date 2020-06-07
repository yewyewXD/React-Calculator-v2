import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";
import NumpadHead from "./NumpadHead";

function App() {
  const [headingNum, setHeadingNum] = useState([]);
  const [preservedNum, setPreservedNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOperated, setIsOperated] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [toggleNegate, setToggleNegate] = useState(true);

  function onClickNum(e) {
    const newNumList = [...headingNum, e.target.innerHTML];
    if (parseInt(e.target.innerHTML) > 0 || headingNum.length > 0) {
      if (operator === null) {
        setHeadingNum(newNumList);
      } else if (isOperated) {
        setHeadingNum(newNumList);
      } else {
        setHeadingNum(e.target.innerHTML);
        setIsOperated(true);
      }
      setIsCalculated(false);
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
    const newNumList = [...headingNum];
    if (headingNum.length > 0) {
      if (preservedNum !== null && !isCalculated) {
        onClickCalculate();
      } else {
        setPreservedNum(newNumList.join(""));
      }
      setOperator(e.target.innerHTML);
      setIsOperated(false);
    }
  }
  function onClickNegate() {
    const newNumList = [...headingNum];
    if (toggleNegate) {
      newNumList.splice(0, 0, "-");
      setHeadingNum(newNumList);
    } else {
      newNumList.splice(0, 1);
      setHeadingNum(newNumList);
    }
    setToggleNegate(!toggleNegate);
  }

  const preservedNumCal = {
    "+": function (x, y) {
      return x + y;
    },
    "-": function (x, y) {
      return x - y;
    },
    "*": function (x, y) {
      return x * y;
    },
    "/": function (x, y) {
      return x / y;
    },
  };

  const preservedInt = parseInt(preservedNum);
  const numShown = [...headingNum];
  const intShown = parseInt(numShown.join(""));

  function totalCalculation(opt, num1, num2) {
    return preservedNumCal[opt](num1, num2).toString();
  }
  function onClickCalculate() {
    const result = totalCalculation(operator, preservedInt, intShown);
    setHeadingNum(result);
    setPreservedNum(result);
    setIsCalculated(true);
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
