import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Review from './pages/Review.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Register from './pages/Register.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import BoxList from './pages/BoxList.jsx';
import Checkout from './pages/Checkout';
import OrderManager from './pages/OrderManagement.jsx';

import { AuthProvider, useAuth } from './context/AuthContext';
import SingleBoxDetail from "./pages/SingleBoxDetail.jsx";


const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default function App() {

    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <Routes>

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/box-list" element={<BoxList />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path='/single-box-detail' element={<SingleBoxDetail />} />
                    <Route
                        path="/order-management"
                        element={
                            <PrivateRoute>
                                <OrderManager />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/checkout" element={
                        <PrivateRoute>  {/* 结算页面需要登录才能访问 */}
                            <Checkout />
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}