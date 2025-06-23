import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setChat([...chat, { sender: "user", text: question }]);

    try {
      const res = await axios.post("http://localhost:5000/api/chat", {
        question: question,
      });
     


      setChat(prev => [...prev, { sender: "user", text: question }, { sender: "bot", text: res.data.answer }]);
    } catch (err) {
      setChat(prev => [...prev, { sender: "bot", text: "⚠️ Error contacting AgriBot." }]);
    }

    setQuestion('');
  };

  return (
    <div className="app"
     style={{
      backgroundImage: 'url("farmer.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>🌿 AgriBot – Crop Guide Assistant</h1>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div key={index} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about crops, fertilizers, Jivamrut..."
        />
        <button onClick={askQuestion}>Ask</button>
      </div>
    </div>
  );
}

export default App;


