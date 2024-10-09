// src/pages/WelcomeScreen.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Utensils, LineChart, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';  // Fixed import path

const FeatureCard = ({ icon: Icon, title, description, path }) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
      onClick={() => navigate(path)}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-6 w-6" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const WelcomeScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to FitTech AI</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl text-gray-600">Choose a feature to get started</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard
            icon={Dumbbell}
            title="Workout Dashboard"
            description="Plan and track your workouts with AI-powered guidance for different muscle groups."
            path="/workout"
          />
          
          <FeatureCard
            icon={Utensils}
            title="Nutrition Tracker"
            description="Track your meals and get personalized nutrition advice based on your fitness goals."
            path="/nutrition"
          />
          
          <FeatureCard
            icon={LineChart}
            title="Progress Tracker"
            description="Visualize your fitness journey and track improvements over time."
            path="/progress"
          />

          <FeatureCard
            icon={LineChart}
            title="Chat"
            description="Visualize your fitness journey and track improvements over time."
            path="/Chat"
          />
          
          <FeatureCard
            icon={MessageSquare}
            title="AI Assistant"
            description="Get real-time answers to your fitness questions and form check guidance."
            path="/assistant"
          />
        </div>
      </main>
    </div>
  );
};

export default WelcomeScreen;