import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Parser } from "expr-eval";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

const parser = new Parser();

const Calculator: React.FC = () => {

  const [input, setInput] = useState<string>("");

  const buttons = [
    "AC", "%", ".", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "="
  ];

  const handleClick = (value: string) => {

    const operators = ["+", "-", "×", "÷"];

    if (value === "AC") {
      setInput("");
      return;
    }

    if (value === "%") {
      const num = parseFloat(input);
      if (!isNaN(num)) {
        setInput((num / 100).toString());
      }
      return;
    }

    if (value === "=") {
      try {
        const expression = input
          .replace(/÷/g, "/")
          .replace(/×/g, "*");
        const result = parser.evaluate(expression);
        setInput(result.toString());
      } catch {
        setInput("Error");
      }
      return;
    }

    if (operators.includes(value) && operators.includes(input.slice(-1))) {
      return;
    }

    setInput(input + value);
  };

  const getButtonClass = (value: string) => {
    if (["÷", "×", "-", "+", "="].includes(value))
      return "btn btn-warning w-100 h-100";

    if (value === "AC")
      return "btn btn-danger w-100 h-100";

    return "btn btn-light w-100 h-100";
  };

  return (
    <div style={styles.container}>
      <Display value={input} />
      <ButtonGrid
        buttons={buttons}
        onClick={handleClick}
        getButtonClass={getButtonClass}
      />
    </div>
  );
};

export default Calculator;

const styles = {

  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "green"
  } as React.CSSProperties

};