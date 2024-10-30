"use client"
import { useState } from 'react';

export default function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);

    const incrementDisable = quantity >= 20;
    const decrementDisable = quantity <= 1;

    const btnStyle = "px-5 py-2 m-2 text-white bg-emerald-500 rounded hover:bg-blue-600 disabled:bg-gray-400 transition duration-200";

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const Item = {
            name,
            quantity,
            category,
        };
        
        console.log(Item);

        alert(`Added Item: Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white flex flex-col justify-center items-center p-6 rounded shadow-lg">
                <div className="mb-4">
                    <input 
                        placeholder="Item Name"
                        className="px-3 py-2 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        required
                    />
                </div>

                <div className="mb-4">
                    <select
                        className="px-3 py-2 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:border-blue-500"
                        onChange={(event) => setCategory(event.target.value)}
                        value={category}
                    >
                        <option value="Produce">Produce</option>
                        <option value="Meat">Meat</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <h1 className="text-3xl font-extrabold text-gray-800 bg-gray-200 px-4 py-2 rounded">{quantity}</h1>
                </div>

                <div className="flex space-x-4 mb-6">
                    <button type="button" className={btnStyle} onClick={decrement} disabled={decrementDisable}>-</button>
                    <button type="button" className={btnStyle} onClick={increment} disabled={incrementDisable}>+</button>
                </div>

                <button type="submit" className={btnStyle}>Add new item</button>
            </form>
        </div>
    );
}
