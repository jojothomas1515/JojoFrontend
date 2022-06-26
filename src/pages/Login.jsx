import React, {useContext} from 'react';

import '../css/pages/login.css'
import {AuthContext} from "../utilities/AuthContext";
import {Link} from "react-router-dom";


function Login(props) {
    const {loginUser} = useContext(AuthContext)
    return (
        <div className={'login-con'}>
            <form className={'login-form'} onSubmit={e => loginUser(e)}>
                <h2>{process.env.REACT_APP_LOGO_TITLE}</h2>
                <div className="form-control"><label htmlFor="email">Email</label><input type="email" id={'email'}
                                                                                         name={'email'} required/></div>
                <div className="form-control"><label htmlFor="password">Password</label><input type="password"
                                                                                               id={'password'}
                                                                                               name={'password'}
                                                                                               required/></div>
                <input type={'submit'} value={'Login'} className={'btn'}/>
                <p> Don't Have an account?, <Link to={'/register'}>Click Here</Link></p>

            </form>
        </div>
    );
}

export default Login;
