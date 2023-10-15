import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const wordCount = inputText.trim() === '' ? 0 : inputText.trim().split(/\s+/).length;

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <br></br>
      <br></br>
      <textarea
        
        value={inputText}
        onChange={handleInputChange}
      />
      <br></br>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
