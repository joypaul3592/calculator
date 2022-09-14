import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState("");
    const [expression, setExpression] = useState([]);
    const [exp, setExp] = useState(false)
    const handleClick = value => {
        setDisplay(value);
        setExpression([...expression, value]);
    };

    const handleResult = () => {
        const result = expression
            .join("")
            .split(/(\D)/g)
            .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
            .reduce((acc, value, index, array) => {
                switch (value) {
                    case "+":
                        return (acc = acc + array[index + 1]);
                    case "-":
                        return (acc = acc - array[index + 1]);
                    case "x":
                        return (acc = acc * array[index + 1]);
                    case "÷":
                        return (acc = acc / array[index + 1]);
                    default:
                        return acc;
                }
            });
        setDisplay(result);
        setExpression("");
        setExp(true)
    };

    return (
        <div className=" bg-red-200 p-4 rounded-md shadow-md">


            {
                exp ? <h3 className="display bg-red-300 mb-4 h-10 flex rounded justify-center shadow-md items-center text-2xl text-white font-bold">{display}</h3> : <div className=" bg-sky-500 w-full mb-4 h-10 rounded flex shadow-md justify-center items-center text-2xl text-white font-bold">{`${expression.length !== 0 ? expression : '00'}`}</div>
            }


            <section className="panel flex  justify-center ">
                <section className="numbers  w-60  mr-2">
                    <div className=' grid grid-cols-3 gap-2'>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(7)}>7</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(8)}>8</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(9)}>9</button>
                    </div>

                    <div className=' grid grid-cols-3 gap-2 mt-2'>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(4)}>4</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(5)}>5</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(6)}>6</button>
                    </div>

                    <div className=' grid grid-cols-3 gap-2 mt-2'>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(1)}>1</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(2)}>2</button>
                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md' onClick={() => handleClick(3)}>3</button>
                    </div>

                    <div className=' grid grid-cols-2 gap-2 mt-2'>
                        <button className=' w-full  py-1 bg-green-200 rounded shadow-md' onClick={() => handleClick(0)}>0</button>

                        <button className=' py-1 px-4 bg-green-200 rounded shadow-md ' onClick={() => handleResult()}>=</button>
                    </div>
                </section>

                <section className="operators flex flex-col">
                    <button className=' py-1 px-4 bg-green-200 rounded shadow-md ' onClick={() => handleClick("÷")}>÷</button>
                    <button className=' py-1 px-4 bg-green-200 rounded mt-2 shadow-md' onClick={() => handleClick("x")}>x</button>
                    <button className=' py-1 px-4 bg-green-200 rounded mt-2 shadow-md' onClick={() => handleClick("-")}>-</button>
                    <button className=' py-1 px-4 bg-green-200 rounded mt-2 shadow-md' onClick={() => handleClick("+")}>+</button>
                </section>
            </section>
        </div>
    );
};

export default Calculator;