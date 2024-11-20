"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import Link from "next/link";
import MealIdeas from './meal-ideas';
import { addItem } from '../_services/shopping-list-service';
import { getItems } from '../_services/shopping-list-service';
import { useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();

  const loadItems = async () =>{
    try {
      const listItems = await getItems(user.uid)
      setItems(listItems)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]
)

  const handleAddItem = async (item) => {
    try {
      const itemId = await addItem(user.uid, item)
      item.id = itemId;
      setItems([...items, item]);
      setSelectedItemName(" ");
    } catch (error) {
      console.error(error)
      
    }
  }

  const handleItemSelect = (item) => {
      const cleanedName = item.name.split(',')[0].trim();
      setSelectedItemName(cleanedName);
    };

if (!user){
  return <p className='text-center bolder'>Please, login first!</p>
}

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