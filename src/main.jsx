import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/vendor/normalize.css';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
