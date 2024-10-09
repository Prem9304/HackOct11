// src/pages/WorkoutDashboard.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Dumbbell, Calendar, Trophy, ChevronDown } from 'lucide-react';

const workoutCategories = {
  chest: ['Bench Press', 'Incline Dumbbell Press', 'Chest Flyes', 'Push-Ups'],
  back: ['Pull-Ups', 'Bent Over Rows', 'Lat Pulldowns', 'Deadlifts'],
  shoulders: ['Military Press', 'Lateral Raises', 'Front Raises', 'Shrugs'],
  legs: ['Squats', 'Leg Press', 'Lunges', 'Leg Extensions']
};

const WorkoutDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900">Workout Dashboard</h1>
        <p className="mt-1 text-gray-600">Plan and track your workouts</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Workout Planner */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5" />
              Exercise Library
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(workoutCategories).map(([category, exercises]) => (
                <div key={category} className="border rounded-lg">
                  <button
                    className="w-full flex items-center justify-between p-2 hover:bg-gray-50"
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  >
                    <span className="capitalize">{category}</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${
                      selectedCategory === category ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {selectedCategory === category && (
                    <div className="p-2 border-t">
                      {exercises.map((exercise) => (
                        <button
                          key={exercise}
                          className="w-full text-left p-1 hover:bg-gray-100 rounded"
                        >
                          {exercise}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schedule Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium">Chest & Triceps</div>
                <div className="text-sm text-gray-600">4 exercises planned</div>
              </div>
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Start Workout
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkoutDashboard;