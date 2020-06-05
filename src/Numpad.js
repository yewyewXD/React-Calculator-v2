import React from "react";

export default function Numpad({ onClickNum, onClickClear }) {
  return (
    <div className="numpad">
      <div className="num-row">
        <div className="num clear" onClick={onClickClear}>
          AC
        </div>
        <div className="num">+/-</div>
        <div className="num">del</div>
        <div className="num operator">+</div>
      </div>

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
        <div className="num operator">-</div>
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
        <div className="num operator">*</div>
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
        <div className="num operator">/</div>
      </div>

      <div className="num-row">
        <div className="num" onClick={onClickNum}>
          0
        </div>
        <div className="num equal" onClick={onClickNum}>
          =
        </div>
      </div>
    </div>
  );
}
