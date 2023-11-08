import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'
import Restaurants from './pages/Restaurants/restaurants'
import Search from './pages/Search/search';
import './App.scss'


function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* public routes */}
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search/>}/>
                <Route path="restaurants" element={<Restaurants />} />

                {/* protected routes */}
                <Route element={<RequireAuth />}>
                    <Route path="welcome" element={<Welcome />} />
                    <Route path="userslist" element={<UsersList />} />
                </Route>

            </Route>
        </Routes>
    )
}

export default App;