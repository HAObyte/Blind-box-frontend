// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setLoading(true);
            // 调用登录方法
            await login(username, password);
            // 登录成功后跳转到首页
            navigate('/');
        } catch (err) {
            setError(err.message); // 显示错误信息（如用户名或密码错误）
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-luxury-black to-luxury-gray relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 w-full max-w-md">
                <div className="bg-luxury-gray/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gold/20">
                    {/* 品牌标识 */}
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-gold">
                            <span className="font-elegant font-bold text-luxury-black text-2xl">HBB</span>
                        </div>
                    </div>

                    <h2 className="font-elegant text-3xl text-gold text-center mb-6 tracking-wider">
                        欢迎回来
                    </h2>

                    {/* 错误提示 */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 text-red-300 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {/* 登录表单 */}
                    <form onSubmit={handleSubmit}>
                        {/* 用户名输入 */}
                        <div className="mb-4">
                            <label className="block text-white/70 mb-2 text-sm">用户名</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full bg-luxury-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                            />
                        </div>

                        {/* 密码输入 */}
                        <div className="mb-6">
                            <label className="block text-white/70 mb-2 text-sm">密码</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-luxury-black/50 border border-gold/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                            />
                        </div>

                        {/* 登录按钮 */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-luxury-black font-modern font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
                        >
                            {loading ? '登录中...' : '登录'}
                        </button>
                    </form>

                    {/* 没有账户？注册链接 */}
                    <div className="mt-6 text-center">
                        <span className="text-white/60">还没有账户？</span>
                        <Link
                            to="/register"
                            className="ml-2 text-gold hover:text-gold-light transition-colors duration-300 font-medium"
                        >
                            立即注册
                        </Link>
                    </div>
                </div>

                <p className="mt-6 text-center text-white/30 text-sm">
                    © 2025 Hanson's Blind Box. 保留所有权利.
                </p>
            </div>
        </div>
    );
}