// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const location = useLocation(); // 获取当前路由信息

    useEffect(() => {
        // 每次路由变化时，滚动到页面顶端（x=0, y=0）
        window.scrollTo(0, 0);
    }, [location.pathname]); // 依赖路由路径，路径变化时触发

    return null; // 该组件不渲染任何内容
}