
import { useState } from "react";

function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNextNumber, setWaitingForNextNumber] = useState(false);

  // Calculate two numbers
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

  
  function formatResult(number) {
    if (number === "Error") return "Error";
    return String(Number(number.toFixed(10)));
  }

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

    setDisplay(formatResult(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNextNumber(true);
  }

  
  return {
    display,
    handleNumber,
    handleOperator,
    handleEquals,
 
  };
}

export default useCalculator;
