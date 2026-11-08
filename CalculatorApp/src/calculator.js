
import { useState } from "react";

function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNextNumber, setWaitingForNextNumber] = useState(false);

  // Perform the calculation
  function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;

      case "-":
        return firstNumber - secondNumber;

      case "×":
        return firstNumber * secondNumber;

      case "÷":
        return secondNumber === 0 ? "Error" : firstNumber / secondNumber;

      default:
        return secondNumber;
    }
  }

  // Format the calculation result
  function formatResult(number) {
    if (!Number.isFinite(number)) {
      return "Error";
    }

    return String(Number(number.toFixed(10)));
  }

  // Handle number clicks
  function handleNumber(number) {
    if (display === "Error" || waitingForNextNumber) {
      setDisplay(number);
      setWaitingForNextNumber(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  }

  // Handle operator clicks
  function handleOperator(nextOperator) {
    if (display === "Error") return;

    const currentNumber = Number(display);

    if (previousValue === null) {
      setPreviousValue(currentNumber);
    } else if (operator && !waitingForNextNumber) {
      const result = calculate(previousValue, currentNumber, operator);

      if (result === "Error") {
        setDisplay("Error");
        setPreviousValue(null);
        setOperator(null);
        setWaitingForNextNumber(true);
        return;
      }

      setDisplay(formatResult(result));
      setPreviousValue(result);
    }

    setOperator(nextOperator);
    setWaitingForNextNumber(true);
  }

  // Handle equals
  function handleEquals() {
    if (operator === null || previousValue === null || waitingForNextNumber) {
      return;
    }

    const currentNumber = Number(display);
    const result = calculate(previousValue, currentNumber, operator);

    setDisplay(result === "Error" ? "Error" : formatResult(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNextNumber(true);
  }

  // Clear everything
  function handleClear() {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNextNumber(false);
  }

  // Handle decimal point
  function handleDecimal() {
    if (display === "Error" || waitingForNextNumber) {
      setDisplay("0.");
      setWaitingForNextNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  }

  // Handle percentage
  function handlePercentage() {
    if (display !== "Error") {
      setDisplay(formatResult(Number(display) / 100));
    }
  }

  // Handle positive and negative numbers
  function handleSign() {
    if (display !== "Error" && display !== "0") {
      setDisplay(formatResult(Number(display) * -1));
    }
  }

  return {
    display,
    handleNumber,
    handleOperator,
    handleEquals,
    handleClear,
    handleDecimal,
    handlePercentage,
    handleSign,
  };
}

export default useCalculator;
