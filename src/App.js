import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const firstDate = new Date("december 12 2028");
  const date = new Date("december 12 2028");
  const [count, setCount] = useState(1);
  const [stepRange, setStepRange] = useState(1);
  date.setDate(date.getDate() + count * stepRange);

  return (
    <>
      <div className="step-container">
        <p>Step</p>
        <input
          type="range"
          min={1}
          max={10}
          value={stepRange}
          onChange={(e) => setStepRange(e.target.value)}
        />
        <span>{stepRange}</span>
      </div>
      <div className="count-container">
        <input type="number" min={0} max={1000} value={count} onChange={(e) => setCount(e.target.value)}/>
      </div>
      <div className="display-container">
        <div>
          { stepRange * count === 0
            ? `Today is ${firstDate.toDateString()}`
            : `${
                count * stepRange
              } day(s) from ${firstDate.toDateString()} is ${date.toDateString()}`}{" "}
        </div>
      </div>
    </>
  );
}
