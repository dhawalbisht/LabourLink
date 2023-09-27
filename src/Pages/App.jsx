import React, { useState } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { Route, Routes } from 'react-router-dom'
import FindWork from './FindWork'



export default function App() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path='/findwork' element={<FindWork />}></Route>
            </Routes>
        </>
    )
}
