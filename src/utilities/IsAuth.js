import React, {useContext, useEffect} from 'react';
import {AuthContext} from "./AuthContext";
import {Routes, useMatch, useResolvedPath} from "react-router-dom";
import {useNav} from "./NavHook";


function IsAuth({children}) {
    const navigate = useNav()
    const loginResolvedPath = useResolvedPath("login")
    const loginPath = useMatch({path: `${loginResolvedPath.pathname}`, end: true})
    const registerResolvedPath = useResolvedPath("login")
    const registerPath = useMatch({path: `${registerResolvedPath.pathname}`, end: true})


    const {user} = useContext(AuthContext)
    useEffect(() => {
        if (user && (registerPath || loginPath)) {
            navigate("/")
        }

    }, [])

    return (
        <Routes>{children}</Routes>
    );
}

export default IsAuth;
