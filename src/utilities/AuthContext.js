import React, {createContext, useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import {loginUser, logout, registerUser, updateToken} from "./AuthModule";


export const AuthContext = createContext()


export const AuthContextProvider = ({children}) => {
    const [AuthToken, setAuthTokens] = useState(localStorage.getItem('AuthToken') ? JSON.parse(localStorage.getItem('AuthToken')) : null)
    const [user, setUser] = useState(localStorage.getItem('AuthToken') ? jwt_decode(JSON.parse(localStorage.getItem('AuthToken')).access) : null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    let context = {
        user: user,
        loginUser: e => loginUser(e, setAuthTokens, setUser, navigate),
        registerUser: e => registerUser(e, setAuthTokens, setUser, navigate),
        accessToken: AuthToken?.access,
        logout: () => logout(setAuthTokens, setUser, navigate),

    }
   useEffect(()=>{
          if(AuthToken) updateToken(AuthToken, setAuthTokens, setUser,navigate)

   }, [])
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}
