import { useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    const fetchHello = async () => {
        const res = await fetch('http://localhost:3000/api/hello');
        const data = await res.json();
        setMessage(data.message);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={fetchHello}
            >
                获取后端欢迎语
            </button>
            <div className="text-lg">{message}</div>
        </div>
    );
}

export default App;