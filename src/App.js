import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import moment from 'moment';

export default function App() {
  const [advice, setAdvice] = useState('');
  const formatDate = moment().format('MMMM Do YYYY, h:mm:ss a');

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
      <h3 className="heading">{formatDate}</h3>
      <div className="card">
        <h3 className="heading" index={advice.id}>
          {advice.advice}
        </h3>
        <button className="button" onClick={fetchAdvice}>
          <span>ADVICE!</span>
        </button>
      </div>
    </div>
  );
}
