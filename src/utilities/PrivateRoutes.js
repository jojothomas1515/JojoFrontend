import React, {useContext, useEffect} from 'react';
import {AuthContext} from "./AuthContext";
import {useMatch, useNavigate, useResolvedPath} from "react-router-dom";


function PrivateRoutes({children}) {
    const path = useResolvedPath('register')
    const matchPath = useMatch({path: path.pathname, end: true})
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        if (!user && !matchPath) {
            navigate('/login')
        }
    }, [])

    return (
        user? children: null
    )
}

export default PrivateRoutes;
