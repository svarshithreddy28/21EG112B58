import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setDisplay(display === '0' ? number : display + number);
  };

  const handleOperationClick = (op) => {
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    let result;
    switch (operation) {
      case '+':
        result = previousValue + current;
        break;
      case '-':
        result = previousValue - current;
        break;
      case '*':
        result = previousValue * current;
        break;
      case '/':
        result = previousValue / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperationClick('+')}>+</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperationClick('-')}>-</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperationClick('*')}>*</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperationClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;