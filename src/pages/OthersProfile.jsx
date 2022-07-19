import React, {useCallback, useContext, useEffect, useState} from 'react';
import "../css/pages/otherprofile.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faImage, faUserEdit} from "@fortawesome/free-solid-svg-icons";
import Posts from "../components/Posts";
import {AuthContext} from "../utilities/AuthContext";

function OthersProfile(props) {
    const {accessToken} = useContext(AuthContext)
    const [profileInfo, setProfileInfo] = useState({})
    const getProfile = useCallback(async () => {
        const res = await fetch(`${process.env.REACT_APP_API}${window.location.pathname}`, {
            method:"GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            }
        })
        const data = await res.json()
      setProfileInfo(data)
    })
    useEffect(() => {
        getProfile()
    }, [])

    return (
        <>
            <section className="contain profile">

                <div>
                    <img src={profileInfo.profile_image} alt="profile image" />
                </div>
                <div>
                    <p>{profileInfo.username}</p>
                    <p>{profileInfo.firstname} {profileInfo.lastname}</p>
                    <p>{profileInfo.email}</p>

                </div>
            </section>
            <div style={{textAlign: "center", padding:"1rem", borderTop:"5px solid black"}}>
                <h2>{profileInfo.username} Posts</h2>
            </div>

            <Posts link={`${process.env.REACT_APP_API}${window.location.pathname}/posts`}/>

        </>
    );
}

export default OthersProfile;
