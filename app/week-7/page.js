"use client";
import { useState } from 'react';
import Link from 'next/link'; 
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
      <Link href="/" className="absolute top-5 left-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
      Back to Home
    </Link>
    </main>
  );
}