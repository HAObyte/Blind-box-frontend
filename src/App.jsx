import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import BoxDraw from './pages/BoxDraw.jsx'
import Review from './pages/Review.jsx'
import BoxList from './pages/BoxList.jsx'
import BoxSearch from './pages/BoxSearch.jsx'
import OrderManagement from './pages/OrderManagement.jsx'
import BoxManagement from './pages/BoxManagement.jsx'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/box-draw" element={<BoxDraw />} />
                <Route path="/review" element={<Review />} />
                <Route path="/box-list" element={<BoxList />} />
                <Route path="/box-search" element={<BoxSearch />} />
                <Route path="/order-management" element={<OrderManagement />} />
                <Route path="/box-management" element={<BoxManagement />} />
            </Routes>
        </Router>
    );
}
