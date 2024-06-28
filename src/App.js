import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching the dog image:', error);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Random Dog Image</h1>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="Random Dog" className="dog-image" />
          <br />
          <button onClick={fetchDogImage} className="button">Fetch Another Image</button>
        </div>
      )}
    </div>
  );
}

export default App;
