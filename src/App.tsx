import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { login } from './components/Store/authSlice'; // authSlice에서 login 액션 생성자를 import 합니다.
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RestaurantDetail from './pages/RestaurantDetail/restaurantDetail';
import Restaurants from './pages/Restaurants/restaurants';
import Search from './pages/Search/search';
import Signup from './pages/Signup/Signup';
import './App.scss';
import Rating from "./pages/ReviewWritePage/Rating";
import Write from './pages/ReviewWritePage/Write';
import Reviewcomplete from './pages/ReviewWritePage/Reviewcomplete';
import Redirection from './pages/Login/Redirection';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const username = localStorage.getItem('username');
        if (accessToken && username) {
            dispatch(login({ accessToken, username })); // login 액션 생성자를 사용합니다.
        }
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search/>}/>
                <Route path="restaurants" element={<Restaurants />} />
                <Route path="detail" element={<RestaurantDetail />} />
                <Route path="signup" element={<Signup />} />
                <Route path="/Write" element={<Write />} />
                <Route path="Rating" element={<Rating />} />
                <Route path="/Reviewcomplete" element={<Reviewcomplete />} />
                <Route path='/auth/kakao/callback' element={<Redirection />} />
            </Route>
        </Routes>
    )
}

export default App;
