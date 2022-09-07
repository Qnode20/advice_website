import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  console.log(advice);

  return (
    <div className="app">
      <div className="card">
        <h3 className="heading" index={advice.id}>
          {advice.advice}
        </h3>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
