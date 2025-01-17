// Calculator.tsx
import React, { useState } from "react";
import "./calculator.css";

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
        try {
          let result: number;
          const prev = parseFloat(prevInput);
          const current = parseFloat(input);

          switch (operator) {
            case "+":
              result = prev + current;
              break;
            case "-":
              result = prev - current;
              break;
            case "*":
              result = prev * current;
              break;
            case "/":
              if (current === 0) {
                setInput("Error");
                return;
              }
              result = prev / current;
              break;
            default:
              return;
          }

          setInput(result.toString());
          setPrevInput("");
          setOperator("");
        } catch (error) {
          setInput("Error");
        }
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setOperator(value);
      setPrevInput(input);
      setInput("0");
    } else {
      if (input === "0" || input === "Error") {
        setInput(value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div data-testid="result" className="result">
          {input}
        </div>
        <div className="buttons-grid">
          <button onClick={() => handleClick("7")} data-testid="button-7">
            7
          </button>
          <button onClick={() => handleClick("8")} data-testid="button-8">
            8
          </button>
          <button onClick={() => handleClick("9")} data-testid="button-9">
            9
          </button>
          <button
            onClick={() => handleClick("/")}
            data-testid="button-divide"
            className="operator"
          >
            /
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
          <button
            onClick={() => handleClick("*")}
            data-testid="button-multiply"
            className="operator"
          >
            *
          </button>

          <button onClick={() => handleClick("1")} data-testid="button-1">
            1
          </button>
          <button onClick={() => handleClick("2")} data-testid="button-2">
            2
          </button>
          <button onClick={() => handleClick("3")} data-testid="button-3">
            3
          </button>
          <button
            onClick={() => handleClick("-")}
            data-testid="button-minus"
            className="operator"
          >
            -
          </button>

          <button onClick={() => handleClick("0")} data-testid="button-0">
            0
          </button>
          <button
            onClick={() => handleClick("C")}
            data-testid="button-clear"
            className="clear"
          >
            C
          </button>
          <button
            onClick={() => handleClick("=")}
            data-testid="button-equal"
            className="equal"
          >
            =
          </button>
          <button
            onClick={() => handleClick("+")}
            data-testid="button-plus"
            className="operator"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
