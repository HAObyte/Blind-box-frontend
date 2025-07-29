import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(username, password);
            navigate('/');
        } catch (error) {
            setError(error.response?.data?.message || '登录失败，请重试');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-luxury-black to-luxury-gray relative overflow-hidden">
            {/* 背景装饰元素 */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 w-full max-w-md">
                {/* 卡片容器 */}
                <div className="bg-luxury-gray/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gold/20 transform transition-all duration-500 hover:shadow-gold/20 hover:shadow-2xl">
                    {/* 品牌标识 */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-gold animate-pulse">
                            <span className="font-elegant font-bold text-luxury-black text-2xl">HBB</span>
                        </div>
                    </div>

                    <h2 className="font-elegant text-3xl text-gold text-center mb-2 tracking-wider">
                        尊贵的用户 欢迎回来
                    </h2>
                    <div className="mb-6 relative">
                        <input
                            type="text"
                            placeholder="用户名"
                            className="w-full pl-10 pr-4 py-3 bg-luxury-black/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300 text-white placeholder-white/40"
                            required
                        />
                    </div>
                    <div className="mb-8 relative">
                        <input
                            type="password"
                            placeholder="密码"
                            className="w-full pl-10 pr-4 py-3 bg-luxury-black/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all duration-300 text-white placeholder-white/40"
                            required
                        />
                    </div>
                    <p className="text-center text-white/60 mb-8">点击下方按钮登录</p>

                    <button
                        onClick={() => {
                            login();
                            navigate('/');
                        }}
                        className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <i className="fa fa-sign-in"></i>
                        <span>登录</span>
                    </button>

                    {/* 注册链接 */}
                    <div className="mt-6 text-center">
                        <span className="text-white/60">还没有账户?</span>
                        <a
                            href="/register"
                            className="ml-2 text-gold hover:text-gold-light transition-colors duration-300 font-medium"
                        >
                            立即注册
                        </a>
                    </div>
                </div>

                <p className="mt-6 text-center text-white/30 text-sm">
                    © 2025 Hanson's Blind Box. 保留所有权利.
                </p>
            </div>
        </div>
    );
}