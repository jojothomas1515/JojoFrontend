import React, {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faFireExtinguisher, faUserEdit} from "@fortawesome/free-solid-svg-icons";

import '../css/pages/profile.css';
import {fetchUserInfo} from "../utilities/userInfo";
import {AuthContext} from "../utilities/AuthContext";
function Profile(props) {
    const {accessToken} = useContext(AuthContext)
    const profileImageModalRef = useRef()
    const [profileInfo, setProfileInfo] = useState("")

    useEffect(()=>{
        fetchUserInfo(accessToken, setProfileInfo)
        console.log(profileInfo)
        },
       [])

    function openProfileImage(){
        profileImageModalRef.current.style.display = 'flex'
    }
    function closeProfileImage(){
        profileImageModalRef.current.style.display = 'none'

    }


    return (
        <>
            <div className="contain profile">
                <FontAwesomeIcon className={'btn edit-profile'} data-edit-info icon={faUserEdit} onClick={() => console.log('modal opener')}/>
                <div>
                    <img src={require('../images/pages/index.jpeg')} alt="profile image" onClick={openProfileImage}/>
                </div>
                <div>
                    <p>{profileInfo.username}</p>
                    <p>{profileInfo.firstname} {profileInfo.lastname}</p>
                    <p>{profileInfo.email}</p>

                </div>
            </div>

            <div className={'profile-image-modal'} ref={profileImageModalRef}>
                <FontAwesomeIcon icon={faClose} className={'btn profile-image-modal-icon'} onClick={closeProfileImage}/>
                <div className={'img-con'}>
                    <img src={require('../images/pages/cool.jpg')}/>
                </div>
            </div>

        </>
    );
}

export default Profile;
