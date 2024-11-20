"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            setMeals(data.meals || []);
            setSelectedMeal(null);
        } catch (error) {
            console.error('Error fetching meal ideas:', error);
        }
    };
    

    if (ingredient) {
      fetchMealIdeas();
    }
  }, [ingredient]);

  const handleMealClick = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
  };

  return (
    <div className="bg-purple-500 text-green-300 rounded-lg p-4 mb-5">
      <h2 className="text-lg font-bold mb-4">Meal Ideas</h2>
      {ingredient && <p className="mb-4 font-bold">Here are some meal ideas using {ingredient}:</p>}
      <ul className="space-y-6">
        {meals.length === 0 ? (
          <p>No meal ideas found</p>
        ) : (
          meals.map(meal => (
            <li 
              key={meal.idMeal} 
              onClick={() => handleMealClick(meal.idMeal)} 
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-700"
            >
              {meal.strMeal}
            </li>
          ))
        )}
      </ul>
      {selectedMeal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-purple-500 p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <h3 className="text-lg font-bold mb-1">{selectedMeal.strMeal}</h3>
      <h4 className="text-md font-bold mb-1">Ingredients:</h4>
      <ul className="text-sm">
        {Object.keys(selectedMeal)
          .filter(key => key.startsWith('strIngredient') && selectedMeal[key])
          .map(key => (
            <li key={key}>{selectedMeal[key]}</li>
          ))}
      </ul>
      <button
        className="mt-2 bg-black text-white font-bold py-1 px-2 rounded hover:bg-red-600"
        onClick={() => setSelectedMeal(null)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}
