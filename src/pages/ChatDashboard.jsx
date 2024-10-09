    import React, { useState } from 'react';
    import { MessageSquare, Calendar, Utensils, Brain } from 'lucide-react';
    import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

    const ChatDashboard = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
        { id: 2, text: "I'd like some advice about my diet.", sender: "user" }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [selectedChat, setSelectedChat] = useState('General');

    const chatHistory = [
        { id: 1, name: 'General', lastMessage: 'Hello! How can I help you today?' },
        { id: 2, name: 'Diet Discussion', lastMessage: 'Here is your meal plan...' },
        { id: 3, name: 'Schedule Planning', lastMessage: 'Your next appointment...' }
    ];

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim()) {
        setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: 'user' }]);
        setInputMessage('');
        // Here you would typically call your LLM service
        // and handle the response in a .then() block
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Left Sidebar - Chat History */}
        <div className="w-64 bg-white border-r border-gray-200 p-4">
            <h2 className="text-lg font-bold mb-4">Chat History</h2>
            <div className="space-y-2">
            {chatHistory.map((chat) => (
                <div
                key={chat.id}
                className={`p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                    selectedChat === chat.name ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedChat(chat.name)}
                >
                <div className="font-semibold">{chat.name}</div>
                <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
                </div>
            ))}
            </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
            {/* Cards Section */}
            <div className="grid grid-cols-3 gap-4 p-4">
            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5" />
                    Diet Tracking
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p>Track your daily nutrition and get personalized meal suggestions.</p>
                <div className="mt-2">
                    <div className="text-sm text-gray-600">Today's Progress</div>
                    <div className="mt-1 h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                    </div>
                </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p>Manage your daily schedule and appointments.</p>
                <div className="mt-2">
                    <div className="text-sm text-gray-600">Next Event</div>
                    <div className="mt-1 text-sm">Meeting with nutritionist @ 2:00 PM</div>
                </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Wellness Tips
                </CardTitle>
                </CardHeader>
                <CardContent>
                <p>Get daily wellness tips and mental health insights.</p>
                <div className="mt-2">
                    <div className="text-sm text-gray-600">Today's Tip</div>
                    <div className="mt-1 text-sm">Practice 10 minutes of mindfulness</div>
                </div>
                </CardContent>
            </Card>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
                <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                    message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                >
                    {message.text}
                </div>
                </div>
            ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
                <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                <MessageSquare className="h-5 w-5" />
                </button>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default ChatDashboard;