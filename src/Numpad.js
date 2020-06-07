import React from "react";

export default function Numpad({
  Num,
  Clear,
  Del,
  Operator,
  Calculate,
  Negate,
}) {
  return (
    <div className="numpad">
      <div className="num-row">
        <div className="num clear" onClick={Clear}>
          AC
        </div>
        <div className="num" onClick={Negate}>
          +/-
        </div>
        <div className="num" onClick={Del}>
          del
        </div>
        <div className="num operator" onClick={Operator}>
          +
        </div>
      </div>

      <div className="num-row">
        <div className="num" onClick={Num}>
          1
        </div>
        <div className="num" onClick={Num}>
          2
        </div>
        <div className="num" onClick={Num}>
          3
        </div>
        <div className="num operator" onClick={Operator}>
          -
        </div>
      </div>

      <div className="num-row">
        <div className="num" onClick={Num}>
          4
        </div>
        <div className="num" onClick={Num}>
          5
        </div>
        <div className="num" onClick={Num}>
          6
        </div>
        <div className="num operator" onClick={Operator}>
          *
        </div>
      </div>

      <div className="num-row">
        <div className="num" onClick={Num}>
          7
        </div>
        <div className="num" onClick={Num}>
          8
        </div>
        <div className="num" onClick={Num}>
          9
        </div>
        <div className="num operator" onClick={Operator}>
          /
        </div>
      </div>

      <div className="num-row">
        <div className="num" onClick={Num}>
          0
        </div>
        <div className="num equal" onClick={Calculate}>
          =
        </div>
      </div>
    </div>
  );
}
