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
  const [step, setStep] = useState(1);
  date.setDate(date.getDate() + count * step)
  // let newDate = new Date(date.getDate() + count);




  const countPlus = () => {
     setCount(count + 1);
  };
  const countMinus = () => {
     setCount(count - 1);
  };

  const stepPlus = () => {
     setStep(step + 1);
  };
  const stepMinus = () => {
     setStep(step - 1);
  };
  



  return (
    <>
      <div className="step-container">
        <button className="minus" onClick={stepMinus}>
          -
        </button>
        <div>Step: {step}</div>
        <button className="plus" onClick={stepPlus}>
          +
        </button>
      </div>
      <div className="count-container">
        <button className="minus" onClick={countMinus}>
          -
        </button>
        <div>Count: {count}</div>
        <button className="plus" onClick={countPlus}>
          +
        </button>
      </div>
      <div className="display-container">
        <div>{count === 0 ? `Today is ${firstDate.toDateString()}` : `${count*step} day(s) from ${firstDate.toDateString()} is ${date.toDateString()}`}  </div>
      </div>
    </>
  );
}
