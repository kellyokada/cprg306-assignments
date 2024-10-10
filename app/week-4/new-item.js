"use client"
import { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }

    let incrementDisable = quantity >= 20;  

    const decrement = () => {
        setQuantity(quantity - 1);
    }

    let decrementDisable = quantity <= 1;


    let btnStyle = "px-5 py-2 m-4 text-white bg-emerald-500  rounded hover:bg-blue-600 disabled:bg-gray-400";

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-black p-10 rounded shadow-lg text-center">
                <h1 className="text-white font-extrabold ">{quantity}</h1>
                <button
                className={btnStyle} 
                onClick={increment}
                disabled={incrementDisable}
                >+</button>
                <button
                className={btnStyle} 
                onClick={decrement}
                disabled={decrementDisable}
                >-</button>

                
            </div>
            </div>
            )
        };