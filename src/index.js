import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FruitApp from './FruitApp';
import reportWebVitals from './reportWebVitals';

// React.StrictMode: 開發模式包裝器，幫助開發者檢測潛在問題
// EX:過時的 API 使用、非最佳實踐等，在生產環境中不會有任何影響。
//不需要在每個元件中都使用 <React.StrictMode>。
//通常只需在應用程式的根層級（entry point）使用一次即可，
//這樣它就會自動套用到應用程式內的所有子元件中。

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FruitApp />
  </React.StrictMode>
);
// <App />：渲染 App 元件至 app-root 節點


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
