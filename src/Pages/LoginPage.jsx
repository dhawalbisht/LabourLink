import React from 'react'
import Form from '../components/Form'

function LoginPage({ isLogin, setIsLogin }) {
    return (
        <>
            <Form isLogin={isLogin} setIsLogin={setIsLogin} />
        </>
    )
}

export default LoginPage