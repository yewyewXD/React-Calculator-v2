import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";
import NumpadHead from "./NumpadHead";

function App() {
  const [headingNum, setHeadingNum] = useState([]);
  const [preservedNum, setPreservedNum] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isOperated, setIsOperated] = useState(false);
  const [isCal, setIsCal] = useState(false);
  const [toggleNegate, setToggleNegate] = useState(false);

  const newNumList = [...headingNum];

  function onClickNum(e) {
    const num = e.target.innerText;
    const newHeadingNum = [...headingNum, num];
    if (parseInt(num) > 0 || headingNum.length > 0) {
      if (operator === null) {
        setHeadingNum(newHeadingNum);
      } else if (isOperated) {
        setHeadingNum(newHeadingNum);
      } else {
        setHeadingNum(num);
        setIsOperated(true);
      }
      setIsCal(false);
    }
  }
  function onClickClear() {
    setHeadingNum([]);
    setPreservedNum(null);
    setOperator(null);
  }

  function onClickDel() {
    newNumList.splice(-1, 1);
    setHeadingNum(newNumList);
  }
  function onClickOperator(e) {
    if (headingNum.length > 0) {
      preservedNum !== null && !isCal
        ? onClickCalculate()
        : setPreservedNum(newNumList.join(""));
      setOperator(e.target.innerText);
      setIsOperated(false);
    }
  }
  function onClickNegate() {
    !toggleNegate ? newNumList.splice(0, 0, "-") : newNumList.splice(0, 1);
    setHeadingNum(newNumList);
    setToggleNegate(!toggleNegate);
  }

  function onClickCalculate() {
    const result = eval(
      `${preservedNum} ${operator} ${newNumList.join("")}`
    ).toString();
    setHeadingNum(result);
    setPreservedNum(result);
    setIsCal(true);
  }

  return (
    <>
      <h1>React Calculator V2</h1>
      <p>by yewyewXD</p>
      <NumpadHead headingNum={headingNum} />
      <Numpad
        Del={onClickDel}
        Clear={onClickClear}
        Num={onClickNum}
        Operator={onClickOperator}
        Calculate={onClickCalculate}
        Negate={onClickNegate}
      />
    </>
  );
}

export default App;
