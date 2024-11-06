"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
import Link from "next/link";
import MealIdeas from './meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
      setSelectedItemName('');
  };

  const handleItemSelect = (item) => {
      const cleanedName = item.name.split(',')[0].trim();
      setSelectedItemName(cleanedName);
    };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect}/>

      <div className='absolute top-10 right-20'>
        <MealIdeas ingredient={selectedItemName} />
      </div>


      <Link href="/" className="absolute top-5 left-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
      Back to Home
    </Link>
    </main>
  );
}