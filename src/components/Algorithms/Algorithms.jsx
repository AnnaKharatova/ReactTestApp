import './Algorithms.css'
import { useEffect, useState } from 'react'

function Algorithms() {

    const [polidromeString, setPolidromeString] = useState('')
    const [polidromeResult, setPolidromeResult] = useState('')
    const [number, setNumber] = useState(1)
    const [string, setString] = useState('')
    const [debouncedInputValue, setDebouncedInputValue] = useState("")

    //1.1 Проверка на палиндром
    function isPalindrome(e) {
        e.preventDefault()
        if (polidromeString != '') {
            polidromeString == polidromeString.split('').reverse().join('') ? setPolidromeResult('Полидром') : setPolidromeResult('Не Полидром')
        } else {
            setPolidromeResult('Пусто')
        }
    }

    //  1.2 FizzBuzz - результат выведен в консоль
    function fizzBuzz() {
        for (let i = 1; i <= 100; i++) {
            let string = "";
            if (i % 3 === 0) {
                string += "Fizz";
            }
            if (i % 5 === 0) {
                string += "Buzz";
            }
            console.log(string || i);
        }
    }
    fizzBuzz()

    // 1.3 Разбиение массива на части - результат выведен в консоль
    function sliceArray(e) {
        e.preventDefault()
        if (number != 0) {
            const array = string.split(',')
            const sliced_array = [];
            let currentIndex = 0

            for (let i = 0; i < Math.ceil(array.length / number); i++) {
                const item = array.slice(currentIndex, currentIndex + number);
                sliced_array.push(item)
            }
            console.log(sliced_array);
        } else {
            setNumber(1)
        }
    }

    // 5.1 Функция debounce
    useEffect(() => {
        const delayInputTimeoutId = setTimeout(() => {
            setDebouncedInputValue(polidromeString);
        }, 2000);
        return () => clearTimeout(delayInputTimeoutId);
    }, [polidromeString, 2000]);

    // 5.2 Глубокое клонирование объекта
    function deepClone(obj) {
        return structuredClone(obj)
    }

    const original = {
        name: 'John',
        address: {
            city: 'New York',
            country: 'USA'
        }
    };
    const copy = deepClone(original);
    copy.address.city = 'Los Angeles';
    console.log(original.address.city); // New York 
    console.log(copy.address.city); // Los Angeles

    return (
        <div className='algorithms'>
            <h2> 1. Основные алгоритмические задачи</h2>
            <h2> 5. Решение проблем и оптимизация </h2>
            <h3>1.1 Проверка на палиндром</h3>
            <form className='algorithms__form' onSubmit={isPalindrome}>
                <input className='algorithms__input' type='text' placeholder='Введите строку' onChange={(e) => { setPolidromeString(e.target.value) }} value={polidromeString} />
                <button type='submit' className='algorithms__button'>Проверить</button>
            </form>
            <p>Строка: {debouncedInputValue}</p>
            <p>Результат: {polidromeResult}</p>
            <h3>1.3 Разбиение массива на части</h3>
            <form className='algorithms__form' onSubmit={sliceArray}>
                <input className='algorithms__input' type='text' placeholder='Введите массив через запятую' onChange={(e) => { setString(e.target.value) }} value={string} required />
                <input className='algorithms__input' type='number' placeholder='Введите число' onChange={(e) => { setNumber(e.target.value) }} value={number} required />
                <button type='submit' className='algorithms__button'>Разбить массив</button>
            </form>
            <p>Результат pаботы функции выведен в консоль</p>
        </div>
    )
}

export default Algorithms