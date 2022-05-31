import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomeScreen />
  </React.StrictMode>
);
reportWebVitals();
