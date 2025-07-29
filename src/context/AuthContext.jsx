// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 从localStorage加载用户信息
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
        setLoading(false);
    }, []);

    // 登录函数
    const login = async (username, password) => {
        try {
            const response = await axios.post('/api/auth/login', {
                username,
                password,
            });

            const { user, token } = response.data;
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            return true;
        } catch (error) {
            console.error('登录失败:', error);
            throw error;
        }
    };

    // 注册函数
    const register = async (username, password) => {
        try {
            await axios.post('/api/auth/register', {
                username,
                password,
            });
            return true;
        } catch (error) {
            console.error('注册失败:', error);
            throw error;
        }
    };

    // 登出函数
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};