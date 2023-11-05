import React, { useState, useEffect } from 'react';
import '../css/chatbot.css';


function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
      // You can add bot response logic here, e.g., use a chatbot API
    }, []);
  
    const handleUserMessage = () => {
      // Handle user input and add it to the message list
      const userMessage = { text: input, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
  
      // Simulate bot response (you can replace this with actual bot logic)
      setTimeout(() => {
        const botResponse = { text: 'Hello! This is the bot.', isUser: false };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    };
  
  

  return (
    <div className="chat-bot">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleUserMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;