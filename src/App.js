// src/App.jsx
import React from 'react';
import './styles/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './pages/WelcomeScreen';
import WorkoutDashboard from './pages/WorkoutDashboard';
import NutritionTracker from './pages/NutritionTracker';
import ProgressTracker from './pages/ProgressTracker';
import AiAssistant from './pages/AiAssistant';
import Layout from './components/Layout';
import ChatDashboard from './pages/ChatDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route element={<Layout />}>
          <Route path="/workout" element={<WorkoutDashboard />} />
          <Route path="/nutrition" element={<NutritionTracker />} />
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/assistant" element={<AiAssistant />} />
          <Route path="/Chat" element={<ChatDashboard />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;