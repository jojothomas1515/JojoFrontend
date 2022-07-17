import jwt_decode from "jwt-decode";

export const loginUser = async (e, setAuthTokens, setUser, navigate) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    try {

        const res = await fetch(`${process.env.REACT_APP_API}/api/token/`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        let data = await res.json()

        if (res.status == 200) {
            localStorage.setItem('AuthToken', JSON.stringify(data))
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            navigate('/')
        } else if (res.status == 401) {
            alert('Email or Password is incorrect')
            e.target.password.value = ""
        }
    } catch (e) {
        alert('api services may be down, try again later')
    }

    ;

}

export const registerUser = async (e, setAuthTokens, setUser, navigate) => {
    e.preventDefault()
    const email = e.target.email.value
    const username = e.target.username.value
    const firstname = e.target.firstname.value
    const lastname = e.target.lastname.value
    const password = e.target.password.value
    const password2 = e.target.password2.value

    const bodyData = JSON.stringify({
        email: email,
        password: password,
        password2: password2,
        username: username,
        firstname: firstname,
        lastname: lastname
    })

    if (password !== password2) {
        alert('Passwords do not match')
        return
    }

    const res = await fetch(`${process.env.REACT_APP_API}/register/`, {
        method: 'POST',
        body: bodyData,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
    let data = await res.json()

    if (res.status == 200) {
        navigate('login')
        alert('User Created Successfully')
    } else if (res.status == 400) {
        alert('Username or Email already taken')
    }


}

export const logout = (setAuthTokens, setUser, navigate) => {
    localStorage.removeItem('AuthToken')
    setUser(null)
    setAuthTokens(null)
    navigate("/login")

}

export const updateToken = async (AuthToken, setAuthTokens, setUser, navigate) => {
    try{
        const res = await fetch(`${process.env.REACT_APP_API}/api/token/refresh/`, {
            method: 'POST',
            body: JSON.stringify({refresh: AuthToken.refresh}),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
        let data = await res.json()

        if (res.status == 200) {
            localStorage.setItem('AuthToken', JSON.stringify(data))
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
        } else if (res.status == 401) {
            logout(setUser, setAuthTokens, navigate)
        }
    }
    catch (err){
        logout(setUser, setAuthTokens, navigate)
    }


}
