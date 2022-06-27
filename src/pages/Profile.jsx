import React, {useContext, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faImage, faUserEdit} from "@fortawesome/free-solid-svg-icons";

import '../css/pages/profile.css';
import {fetchUserInfo} from "../utilities/userInfo";
import {AuthContext} from "../utilities/AuthContext";

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
    function closeEditProfile(){
        editProfileModalRef.current.style.display='none'
    }

    function openEditProfile() {
        editProfileModalRef.current.style.display = 'flex'
    }


    function changeImage(e) {
        const file = new FileReader()

        file.onload = (ev) => {
            pimRef.current.src = ev.target.result
        }
        file.readAsDataURL(e.target.files[0]
        )
    }


    return (
        <>
            <section className="contain profile">
                <FontAwesomeIcon className={'btn edit-profile'}  icon={faUserEdit}
                                 onClick={openEditProfile}/>
                <div>
                    <img src={require('../images/pages/index.jpeg')} alt="profile image" onClick={openProfileImage}/>
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
                    <img src={require('../images/pages/cool.jpg')}/>
                </div>
            </section>

            <section className={'edit-profile-modal'} ref={editProfileModalRef}>

                <FontAwesomeIcon icon={faClose} onClick={closeEditProfile} className={'btn btn-danger close-edit'}/>

                <div className="edit-profile-con">
                    <div className={'pim-con'} style={{position: "relative"}}>
                        <img src={require('../images/pages/index.jpeg')} alt="profile image" ref={pimRef}
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

        </>
    );
}

export default Profile;
