import React, {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faImage, faUserEdit} from "@fortawesome/free-solid-svg-icons";

import '../css/pages/profile.css';
import {fetchUserInfo} from "../utilities/userInfo";
import {AuthContext} from "../utilities/AuthContext";
import Posts from "../components/Posts";

function Profile(props) {
    const {accessToken} = useContext(AuthContext)
    const profileImageModalRef = useRef()
    const editProfileModalRef = useRef()
    const pimRef = useRef()
    const [profileInfo, setProfileInfo] = useState("")

    useEffect(() => {
            fetchUserInfo(accessToken, setProfileInfo)
            console.log(profileInfo)
        },
        [])

    function openProfileImage() {
        profileImageModalRef.current.style.display = 'flex'
    }

    function closeProfileImage() {
        profileImageModalRef.current.style.display = 'none'

    }

    function closeEditProfile() {
        editProfileModalRef.current.style.display = 'none'
    }

    function openEditProfile() {
        editProfileModalRef.current.style.display = 'flex'
    }


    function changeImage(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profile_image', e.target.files[0])
        const file = new FileReader()

        fetch(`${process.env.REACT_APP_API}/changepic`, {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": `Bearer ${accessToken}`,

            }

        }).then(res => {
            if(res.status == 200){
                fetchUserInfo(accessToken, setProfileInfo)
            }
        })
        file.onload = (ev) => {
            pimRef.current.src = ev.target.result
        }
        file.readAsDataURL(e.target.files[0]
        )

    }


    return (
        <>
            <section className="contain profile">
                <FontAwesomeIcon className={'btn edit-profile'} icon={faUserEdit}
                                 onClick={openEditProfile}/>
                <div>
                    <img src={profileInfo.profile_image} alt="profile image" onClick={openProfileImage}/>
                </div>
                <div>
                    <p>{profileInfo.username}</p>
                    <p>{profileInfo.firstname} {profileInfo.lastname}</p>
                    <p>{profileInfo.email}</p>

                </div>
            </section>

            <section className={'profile-image-modal'} ref={profileImageModalRef}>
                <FontAwesomeIcon icon={faClose} className={'btn profile-image-modal-icon'} onClick={closeProfileImage}/>
                <div className={'img-con'}>
                    <img src={profileInfo.profile_image}/>
                </div>
            </section>

            <section className={'edit-profile-modal'} ref={editProfileModalRef}>

                <FontAwesomeIcon icon={faClose} onClick={closeEditProfile} className={'btn btn-danger close-edit'}/>

                <div className="edit-profile-con">
                    <div className={'pim-con'} style={{position: "relative"}}>
                        <img src={profileInfo.profile_image} alt="profile image" ref={pimRef}
                        />
                        <label htmlFor={'selectProfileImage'} style={{cursor: "pointer"}}><FontAwesomeIcon
                            icon={faImage}/></label>
                        <input type={'file'} accept={'image/*'} id="selectProfileImage" style={{display: "none"}}
                               onChange={changeImage}/>

                    </div>
                    <form>

                        <div className={"form-con"}>
                            <div className={'form-control'}><input type={"text"} placeholder={'First Name'}
                                                                   value={profileInfo.firstname}/>
                            </div>
                            <div className={'form-control'}>
                                <input type={"text"} placeholder={'Last Name'} value={profileInfo.lastname}/>
                            </div>
                            <div><input className={'btn'} type={'submit'} value={'Update Info'}/></div>

                        </div>
                    </form>

                </div>

            </section>
            <div style={{textAlign: "center"}}>
                <h2>Your Posts</h2>
            </div>
            <Posts link={`${process.env.REACT_APP_API}/myposts`}/>

        </>
    );
}

export default Profile;
