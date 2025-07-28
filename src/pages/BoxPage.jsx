// src/pages/BoxPage.jsx
import React, { useState } from "react";

const BoxPage = () => {
    const [prize, setPrize] = useState(null);

    const drawPrize = async () => {
        try {
            // 向后端发送 GET 请求，获取随机奖品
            const response = await fetch("http://localhost:5000/api/box/draw");
            const data = await response.json();

            // 更新奖品数据
            setPrize(data);
        } catch (error) {
            console.error("Error during draw:", error);
        }
    };

    return (
        <div className="text-center text-white p-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6">抽盒时间！</h2>
            <button
                onClick={drawPrize}
                className="px-6 py-3 bg-yellow-500 text-black text-xl rounded-full hover:bg-yellow-400 transition duration-300 transform hover:scale-105 mb-6"
            >
                抽奖
            </button>
            {prize && (
                <div className="animate__animated animate__fadeIn animate__delay-1s">
                    <img
                        src={prize.image}
                        alt={prize.name}
                        className="w-48 h-48 object-cover mx-auto mb-4 rounded-full shadow-lg"
                    />
                    <h3 className="text-2xl font-semibold">{prize.name}</h3>
                    <p className="mt-2 text-lg">{prize.description}</p>
                </div>
            )}
        </div>
    );
};

export default BoxPage;
