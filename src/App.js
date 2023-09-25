import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_APPWRITE_URL); // Access the environment variable

  return (
    <div className="App">
      <p>URL: {process.env.REACT_APP_APPWRITE_URL}</p> {/* Display the URL */}
    </div>
  );
}

export default App;
