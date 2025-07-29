// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password!== confirmPassword) {
            alert('两次输入的密码不一致，请重新输入！');
            return;
        }
        // 这里可添加向后端发送注册请求的逻辑
        // 假设注册成功，跳转到登录页面
        navigate('/login');
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
                        感谢选择 Hanson's Blind Box!
                    </h2>

                    <input
                        type="text"
                        placeholder="用户名"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 mb-4 border border-gold/30 rounded-md bg-luxury-black text-white"
                    />
                    <input
                        type="password"
                        placeholder="密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 mb-4 border border-gold/30 rounded-md bg-luxury-black text-white"
                    />
                    <input
                        type="password"
                        placeholder="确认密码"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-3 mb-6 border border-gold/30 rounded-md bg-luxury-black text-white"
                    />
                    <button
                        onClick={()=>navigate('/login')}
                        type="submit"
                        className="w-full px-8 py-3 bg-gold text-luxury-black font-modern font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-glow transform hover:-translate-y-1"
                    >
                        注册
                    </button>
                    <div className="mt-6 text-center">
                        <span className="text-white/60">已有账户?</span>
                        <a
                            href="/login"
                            className="ml-2 text-gold hover:text-gold-light transition-colors duration-300 font-medium"
                        >
                            去登录
                        </a>
                    </div>
                </div>
                <p className="mt-6 text-center text-white/30 text-sm">
                    © 2025 Hanson's Blind Box. 保留所有权利.
                </p>
            </div>
        </div>
    );
    /*return (
        <div className="flex justify-center items-center h-screen bg-luxury-black">
            <form onSubmit={handleSubmit} className="bg-luxury-gray p-8 rounded-lg shadow-md w-96">
                <h2 className="font-elegant text-3xl text-gold text-center mb-6">注册</h2>
                <input
                    type="text"
                    placeholder="用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 mb-4 border border-gold/30 rounded-md bg-luxury-black text-white"
                />
                <input
                    type="password"
                    placeholder="密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border border-gold/30 rounded-md bg-luxury-black text-white"
                />
                <input
                    type="password"
                    placeholder="确认密码"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 mb-6 border border-gold/30 rounded-md bg-luxury-black text-white"
                />
                <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gold text-luxury-black font-modern font-semibold rounded-sm hover:bg-gold-light transition-all duration-300 shadow-gold hover:shadow-gold-glow transform hover:-translate-y-1"
                >
                    注册
                </button>
            </form>
        </div>
    );*/
}

export default Register;

