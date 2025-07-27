import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 全局样式（Tailwind 基础 + 自定义）
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);