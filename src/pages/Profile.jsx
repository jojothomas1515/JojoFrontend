import React, {useEffect, useRef} from 'react';
import {Route, Routes} from "react-router-dom";
import Linkitem from "../components/Linkitem";
import '../css/pages/profile.css'
import Posts from "../components/Posts";
import Addpost from "../components/AddPost";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import ProfileEdit from "../components/ProfileEdit";

function Profile(props) {
    const edit_profile_btn = useRef(null)
    const edit_profile = useRef(null)

    useEffect(() => {
        edit_profile_btn.current.onclick = ()=>{
            edit_profile.current.style.display='flex';
        }
    }, [])


    return (
        <>
            <section className={'profile contain'}>
                <button className={'btn edit-prof-btn'} ref={edit_profile_btn}><FontAwesomeIcon icon={faUserEdit}/> Edit Profile</button>
                <div>
                    <div className="p-img-con"><img src={require('../images/pages/cool.jpg')} alt="" className="p-img"/>
                    </div>
                    <p className="p-fname">Joseph Thomas</p>
                    <p className="p-email">Jojothomas@example.com</p>
                    <p className="p-birthday">Sep 9 1990</p>
                </div>
            </section>
            <div className={'p-links'}>
                <Linkitem href={`../profile`} name={'Posts'} wildcard={false} classes={'btn'}></Linkitem>
                <Linkitem href={`addpost`} name={'Add Post'} classes={'btn'}></Linkitem>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Posts/>}/>
                    <Route path={'addpost'} element={<Addpost/>}/>
                </Routes>
            </div>
            <ProfileEdit ref={edit_profile}/>



        </>
    );
}

export default Profile;
