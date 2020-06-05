import React, { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [num, setNum] = useState("");

  function onClickNum(e) {
    setNum(e.target.innerHTML);
    const newNumList = [...numbers, e.target.innerHTML];
    setNumbers(newNumList);
  }

  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <div className="numpad-head">{numbers}</div>
        <div className="numpad">
          <div className="num-row">
            <div className="num" onClick={onClickNum}>
              1
            </div>
            <div className="num" onClick={onClickNum}>
              2
            </div>
            <div className="num" onClick={onClickNum}>
              3
            </div>
          </div>

          <div className="num-row">
            <div className="num" onClick={onClickNum}>
              4
            </div>
            <div className="num" onClick={onClickNum}>
              5
            </div>
            <div className="num" onClick={onClickNum}>
              6
            </div>
          </div>

          <div className="num-row">
            <div className="num" onClick={onClickNum}>
              7
            </div>
            <div className="num" onClick={onClickNum}>
              8
            </div>
            <div className="num" onClick={onClickNum}>
              9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
