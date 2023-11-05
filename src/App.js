/*import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './css/style.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050'; //run on API_URL, but if not available run on local host

const App = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]); //set 2 new variables and setting array to be empty

  
  // Function to handle user messages and receive bot responses
  const handleUserMessage = async () => {
    if (message.trim() === '') return;

    // Send the user's message to the server for processing
    const response = await axios.post('/api/messages', { message });
    const botResponse = response.data.botResponse;

    // Update the chat history with user's and bot's messages
    setChatHistory([...chatHistory, { text: message, isUser: true }, { text: botResponse, isUser: false }]);
    setMessage('');
  };
  

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => res.json()) //response when successful
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]); //adding data to current images array
      })
      .catch((err) => {
        //response when theres an error
        console.log(err);
      });
    setWord(''); //clears the form field
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id)); //get an id, compare it to the ids of all images in the array, and filter only the ones that dont have the same id
  };

  return (
    <div className="container">
      <div>
        <Header title="Anthropic Bot" />
        
        <div className="chat-container">
        {/* Render the chat history with alternating user and bot messages }
        {chatHistory.map((item, index) => (
          <div key={index} className={item.isUser ? 'user-message' : 'bot-message'}>
            {item.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
        




      </div>
    </div>
  );
};

export default App;
*/

import React from 'react';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <h1>Anthropic bot</h1>
      <ChatBot />
    </div>
  );
}

export default App;