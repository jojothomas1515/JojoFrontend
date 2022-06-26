import React, {useContext} from 'react';
import '../css/pages/register.css'
import {AuthContext} from "../utilities/AuthContext";
import {Link} from "react-router-dom";

function Register(props) {
    const {registerUser} = useContext(AuthContext)
    return (
        <div className={'register-con'}>
            <form action="" className="register-form" onSubmit={e => registerUser(e)}>
                <h1>
                    {process.env.REACT_APP_LOGO_TITLE}
                </h1>
                <div className="form-control"><label htmlFor="email">Email</label><input type="email" id={'email'}
                                                                                         name={'email'} required/></div>
                <div className="form-control"><label htmlFor="username">Username</label><input type="text"
                                                                                               id={'username'}
                                                                                               name={'usernamefirstname'}
                                                                                               required/></div>
                <div className="form-control"><label htmlFor="firstname">First Name</label><input type="text"
                                                                                                  id={'firstname'}
                                                                                                  name={'firstname'}
                                                                                                  required/></div>
                <div className="form-control"><label htmlFor="lastname">Last Name</label><input type="text"
                                                                                                id={'lastname'}
                                                                                                name={'lastname'}
                                                                                                required/></div>

                <div className="form-control"><label htmlFor="password">Password</label><input type="password"
                                                                                               id={'password'}
                                                                                               name={'password'}
                                                                                               required/></div>
                <div className="form-control"><label htmlFor="password2">Re-Enter Password</label><input type="password"
                                                                                                         id={'password2'}
                                                                                                         name={'password2'}
                                                                                                         required/>
                </div>
                <input type={'submit'} value={'Sign Up'} className={'btn'}/>
                <p> Already Have an account?, <Link to={'/login'}>Click Here</Link></p>
            </form>
        </div>
    );
}

export default Register;
