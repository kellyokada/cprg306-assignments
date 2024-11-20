"use client"
const Item = ({ name, quantity, category, onSelect }) => {
    return (
        <li 
        onClick={onSelect}
        className="bg-purple-800 p-4 rounded-md shadow-md cursor pointer hover:bg-black">
        <h2 className="text-lg font-bold text-green-300">{name}</h2>
        <p className="text-green-200">Buy {quantity} in {category}</p>
      </li>
    );
  }

export default Item;
  