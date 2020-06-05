import React from "react";

export default function Numpad({ onClickNum }) {
  return (
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
  );
}
