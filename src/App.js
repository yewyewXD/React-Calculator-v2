import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">React Calculator</h1>

        <div className="numpad">
          <div className="num-row">
            <div className="num">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
          </div>

          <div className="num-row">
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
          </div>

          <div className="num-row">
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
