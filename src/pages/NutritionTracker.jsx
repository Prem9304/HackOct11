// src/pages/NutritionTracker.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';  // Fixed import path
import { Utensils, Plus, Trash2 } from 'lucide-react';

const NutritionTracker = () => {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Breakfast', calories: 450, protein: 25, carbs: 45, fats: 20 }
  ]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Nutrition Tracker</h1>
        <p className="mt-1 text-gray-600">Track your meals and monitor your macros</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Daily Summary Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5" />
              Today's Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">1,850</div>
                <div className="text-sm text-gray-500">Calories</div>
              </div>
              <div>
                <div className="text-2xl font-bold">120g</div>
                <div className="text-sm text-gray-500">Protein</div>
              </div>
              <div>
                <div className="text-2xl font-bold">180g</div>
                <div className="text-sm text-gray-500">Carbs</div>
              </div>
              <div>
                <div className="text-2xl font-bold">65g</div>
                <div className="text-sm text-gray-500">Fats</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Add Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Add</CardTitle>
          </CardHeader>
          <CardContent>
            <button className="w-full py-2 px-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 flex items-center justify-center gap-2">
              <Plus className="h-5 w-5" />
              Add Meal
            </button>
          </CardContent>
        </Card>

        {/* Meal List */}
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-lg font-semibold">Today's Meals</h2>
          {meals.map((meal) => (
            <Card key={meal.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-medium">{meal.name}</h3>
                  <p className="text-sm text-gray-500">
                    {meal.calories} cal · {meal.protein}g protein · {meal.carbs}g carbs · {meal.fats}g fats
                  </p>
                </div>
                <button className="p-2 text-gray-400 hover:text-red-500">
                  <Trash2 className="h-5 w-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionTracker;