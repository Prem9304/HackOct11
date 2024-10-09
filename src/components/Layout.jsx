// src/components/Layout.jsx
import React from 'react';
import '../styles/styles.css';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Utensils, LineChart, MessageSquare, User } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Workout', icon: Dumbbell, path: '/workout' },
    { name: 'Nutrition', icon: Utensils, path: '/nutrition' },
    { name: 'Progress', icon: LineChart, path: '/progress' },
    { name: 'Assistant', icon: MessageSquare, path: '/assistant' },
    { name: 'Chat', icon: MessageSquare, path: '/Chat' }

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;