import React, { useState } from "react";
import "./App.css";
import Numpad from "./Numpad";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [num, setNum] = useState("");

  function onClickNum(e) {
    setNum(e.target.innerHTML);
    const newNumList = [...numbers, e.target.innerHTML];
    setNumbers(newNumList);
  }

  function onClickClear() {
    setNumbers([""]);
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <div className="numpad-head">{numbers}</div>
        <Numpad onClickClear={onClickClear} onClickNum={onClickNum} />
      </div>
    </div>
  );
}

export default App;
