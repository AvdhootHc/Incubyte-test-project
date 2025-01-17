import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");
  const [prevInput, setPrevInput] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("0");
      setPrevInput("");
      setOperator("");
      return;
    }

    if (value === "=") {
      if (operator && prevInput) {
        if (operator === "+") {
          setInput((parseFloat(prevInput) + parseFloat(input)).toString());
        } else if (operator === "-") {
          setInput((parseFloat(prevInput) - parseFloat(input)).toString());
        } else if (operator === "*") {
          setInput((parseFloat(prevInput) * parseFloat(input)).toString());
        } else if (operator === "/") {
          setInput((parseFloat(prevInput) / parseFloat(input)).toString());
        }
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/"
    ) {
      setOperator(value);
      setPrevInput(input);
      setInput("0");
    } else {
      if (input === "0") {
        setInput(value);
      } else {
        setInput(input + value);
      }
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
        <button onClick={() => handleClick("4")} data-testid="button-4">
          4
        </button>
        <button onClick={() => handleClick("5")} data-testid="button-5">
          5
        </button>
        <button onClick={() => handleClick("6")} data-testid="button-6">
          6
        </button>
        <button onClick={() => handleClick("7")} data-testid="button-7">
          7
        </button>
        <button onClick={() => handleClick("8")} data-testid="button-8">
          8
        </button>
        <button onClick={() => handleClick("9")} data-testid="button-9">
          9
        </button>
        <button onClick={() => handleClick("0")} data-testid="button-0">
          0
        </button>
        <button onClick={() => handleClick("+")} data-testid="button-plus">
          +
        </button>
        <button onClick={() => handleClick("-")} data-testid="button-minus">
          -
        </button>
        <button onClick={() => handleClick("*")} data-testid="button-multiply">
          *
        </button>
        <button onClick={() => handleClick("/")} data-testid="button-divide">
          /
        </button>
        <button onClick={() => handleClick("=")} data-testid="button-equal">
          =
        </button>
        <button onClick={() => handleClick("C")} data-testid="button-clear">
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
