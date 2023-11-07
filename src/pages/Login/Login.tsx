import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');

    const register = async () => {
        try {
            await axios.post('http://34.83.15.61:8080/api/user/join', {
                userName: username,
                password: password,
            });
            alert('Registration successful!');
        } catch (error) {
            alert('Registration failed!');
            console.error(error);
        }
    };

    const login = async () => {
        try {
            const response = await axios.post('http://34.83.15.61:8080/api/user/login', {
                userName: username,
                password: password,
            });

            const { accessToken } = response.data;
            setAccessToken(accessToken);
            localStorage.setItem('accessToken', accessToken);
            alert('Login successful!');
        } catch (error) {
            alert('Login failed!');
            console.error(error);
        }
    };

    const logout = () => {
        setAccessToken('');
        localStorage.removeItem('accessToken');
        alert('Logout successful!');
    };

    return (
        <div>
            {!accessToken ? (
                <>
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button onClick={register}>Register</button>

                    <h2>Login</h2>
                    <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button onClick={login}>Login</button>
                </>
            ) : (
                <>
                    <h2>Welcome, {username}!</h2>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    );
};

export default App;
