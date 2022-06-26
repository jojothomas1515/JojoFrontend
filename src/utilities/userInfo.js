export const fetchUserInfo = async (accessToken, setProfileInfo) => {
    let result;
    fetch(`${process.env.REACT_APP_API}/userinfo`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            }
        }
    )
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
        })
        .then(data => {
            setProfileInfo(data)
        })
        .catch(e => {
            console.log(e)
        })
}
