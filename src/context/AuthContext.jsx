// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // 登录状态和当前用户信息
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // 初始化加载状态

    // 初始化：从localStorage读取登录状态（刷新页面不丢失）
    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            setIsLoggedIn(true);
            setCurrentUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    // 注册功能：保存用户到本地存储
    const register = (username, password) => {
        // 读取已存在的用户（若无则为空数组）
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

        // 验证用户名是否已存在
        if (existingUsers.some(user => user.username === username)) {
            throw new Error('用户名已存在');
        }

        // 保存新用户（简单存储，实际项目需加密密码）
        const newUser = { username, password };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
    };

    // 登录功能：验证用户名和密码
    const login = (username, password) => {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = existingUsers.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            throw new Error('用户名或密码错误');
        }

        // 登录成功：更新状态并保存到本地存储
        setIsLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    // 登出功能
    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                currentUser,
                login,
                logout,
                register,
                loading
            }}
        >
            {!loading && children} {/* 加载完成后再渲染子组件 */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);