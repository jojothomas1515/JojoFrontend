import React from 'react';
import {Route, Routes} from "react-router-dom";
import Linkitem from "../components/Linkitem";
import '../css/pages/profile.css'
import Posts from "../components/Posts";
import Addpost from "../components/AddPost";

function Profile(props) {


    return (
        <>
            <section className={'profile contain'}>
                <div className="p-img-con"><img src={require('../images/pages/cool.jpg')} alt="" className="p-img"/>
                </div>
                <p className="p-fname">Joseph Thomas</p>
                <p className="p-email">Jojothomas@example.com</p>
                <p className="p-birthday">Sep 9 1990</p>
            </section>
            <div className={'p-links'}>
                <Linkitem href={`/`} name={'Posts'} wildcard={false} classes={'btn'}></Linkitem>
                <Linkitem href={`addpost`} name={'Add Post'} classes={'btn'}></Linkitem>
                <Linkitem href={`edit`} name={'Edit Info'} classes={'btn'}></Linkitem>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Posts/>}/>
                    <Route path={'addpost'} element={<Addpost/>}/>
                    <Route path={'edit'}/>

                </Routes>
            </div>


        </>
    );
}

export default Profile;
