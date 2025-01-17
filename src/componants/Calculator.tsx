import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");

  const handleClick = (value: string) => {
    if (input === "0") {
      setInput(value); // set value if the input is zero
    } else {
      setInput(input + value); // append value to input
    }
  };

  return (
    <div>
      <div data-testid="result" className="result">
        {input}
      </div>
      <div>
        <button onClick={() => handleClick("1")} data-testid="button-1">
          1
        </button>
        <button onClick={() => handleClick("2")} data-testid="button-2">
          2
        </button>
        <button onClick={() => handleClick("3")} data-testid="button-3">
          3
        </button>
        <button onClick={() => handleClick("+")} data-testid="button-plus">
          +
        </button>
      </div>
    </div>
  );
};

export default Calculator;
