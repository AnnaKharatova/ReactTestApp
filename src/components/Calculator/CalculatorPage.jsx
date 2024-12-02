import './Calculator.css'
import { useState } from "react";
import { Calculator } from "./Calculator";

function CalculatorPage() {
    const [numberA, setNumberA] = useState('')
    const [numberB, setNumberB] = useState('')
    const [result, setResult] = useState()
    const calculator = new Calculator(numberA, numberB)

    return (
        <div className="calculator">
            <h1 className="calculator__header">4.1 Объектно-ориентированный JavaScript:  Реализация простого калькулятора</h1>
            <h2 className="calculator__title">Введите два числа</h2>
            <div className="calculator__inputs">
                <input className="calculator__input" type='number' id='numberA' onChange={(e) => setNumberA(e.target.value)} value={numberA} required />
                <input className="calculator__input" type='number' id='numberB' onChange={(e) => setNumberB(e.target.value)} value={numberB} required />
            </div>
            <div className="calculator__buttons">
                <button className="calculator__button" onClick={() => setResult(calculator.add())}>Сложить</button>
                <button className="calculator__button" onClick={() => setResult(calculator.subtract())}>Вычесть</button>
                <button className="calculator__button" onClick={() => setResult(calculator.multiply())}>Умножить</button>
                <button className="calculator__button" onClick={() => setResult(calculator.divide())}>Разделить</button>
            </div>
            <p className="calculator__result" >Результат: {result}</p>
        </div>
    )
}

export default CalculatorPage