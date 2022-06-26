import React, {useContext, useMemo} from 'react';
import {AuthContext} from "./AuthContext";
import {Routes, useNavigate} from "react-router-dom";
import {useNav} from "./NavHook";
import {useEffect} from "react";



function  IsAuth({children}) {
    const navigate = useNav()
    const {user} = useContext(AuthContext)
    useEffect(() =>{
        if (user){
            navigate('/')
        }
    }, [])

    return (
        <Routes>{children}</Routes>
    );
}

export default IsAuth;
