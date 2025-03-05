import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [memory, setMemory] = useState(0);

    const handleButtonClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'C') {
            clearInput();
        } else if (value === '√') {
            calculateSquareRoot();
        } else if (value === '%') {
            calculatePercentage();
        } else if (value === 'M+') {
            addToMemory();
        } else if (value === 'M-') {
            subtractFromMemory();
        } else if (value === 'MR') {
            recallMemory();
        } else if (value === 'MC') {
            clearMemory();
        } else {
            setInput(input + value);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };

    const calculateSquareRoot = () => {
        try {
            const number = parseFloat(input || result);
            if (number < 0) {
                setResult('Error');
            } else {
                const sqrtResult = Math.sqrt(number).toString();
                setInput(sqrtResult);
                setResult(sqrtResult);
            }
        } catch (error) {
            setResult('Error');
        }
    };

    const calculatePercentage = () => {
        try {
            const number = parseFloat(input || result);
            const percentResult = (number / 100).toString();
            setInput(percentResult);
            setResult(percentResult);
        } catch (error) {
            setResult('Error');
        }
    };

    const addToMemory = () => {
        setMemory(memory + parseFloat(result || input || 0));
    };

    const subtractFromMemory = () => {
        setMemory(memory - parseFloat(result || input || 0));
    };

    const recallMemory = () => {
        setInput(memory.toString());
        setResult(memory.toString());
    };

    const clearMemory = () => {
        setMemory(0);
    };

    return (
        <div className="calculator" tabIndex={0}>
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', '√', '%', 'M+', 'M-', 'MR', 'MC'].map((btn) => (
                    <button key={btn} onClick={() => handleButtonClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
