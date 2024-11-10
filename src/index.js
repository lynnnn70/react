import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FruitApp from './FruitApp';
import reportWebVitals from './reportWebVitals';

const appRoot = ReactDOM.createRoot(document.getElementById('app-root'));
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const fruitRoot = ReactDOM.createRoot(document.getElementById('fruit-root'));
fruitRoot.render(
  <React.StrictMode>
    <FruitApp />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
