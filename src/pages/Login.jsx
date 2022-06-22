import React, {useEffect, useRef} from 'react';
import '../css/pages/login.css'

function Login(props) {
    const formRef = useRef(null)
    useEffect(() => {
        formRef.current.onsubmit = (e) => {
            const password = e.target.password.value
            const email = e.target.email.value
            fetch(`${process.env.REACT_APP_API}/api/token/`, {
                method:'POST',
                body: JSON.stringify({'email':email, 'password':password}),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(res => res.json()).then(data => {
                localStorage.setItem('accessToken', data.access)}
            ).catch(err =>{
                console.log(`this is an err: ${err}`)
            })
        e.preventDefault()
        }
    })

    return (

        <div className={'login-con'}>
            <form method={'post'} action={""} className={'login-form'} ref={formRef}>
                <h3>{process.env.REACT_APP_LOGO_TITLE}</h3>
                <div><label htmlFor="email">Email</label><input type="email" id={'email'} name={'email'} required/></div>
                <div><label htmlFor="password">Password</label><input id={'password'} type="password"
                                                                      name={'password'} required/></div>
                <div>
                    <button type={"submit"} className={'btn'}>Login</button>
                </div>
            </form>

        </div>
    );
}

export default Login;
