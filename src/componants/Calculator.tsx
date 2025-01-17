import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");

  const handleClick = (value: string) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput(input + value);
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
