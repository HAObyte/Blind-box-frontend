// src/App.jsx
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
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" />;
};


export default function App() {

    /*const location = useLocation(); // 获取当前路由信息

    // 每次路由变化时，滚动到页面顶部
    useEffect(() => {
        window.scrollTo(0, 0); // x=0, y=0 即页面顶端
    }, [location.pathname]);*/

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
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}