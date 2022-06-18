import React from 'react';
import {Routes, Route} from "react-router-dom";
import Linkitem from "../components/Linkitem";
import Addpost from "./Addpost";

function Profile(props) {

    return (
        <>
            <section className={'profile'}>
                <div className="profile">
                    <div className="p-img-con"><img src={require('../images/pages/cool.jpg')} alt="" className="p-img"/></div>
                    <p className="p-fname">Joseph Thomas</p>
                    <p className="p-email">Jojothomas1515@gmail.com</p>
                    <p className="p-birthday">Sep 9 1998</p>
                </div>
                <div className={'p-links'}>
                    <Linkitem href={`posts`} name={'Posts'}></Linkitem>
                    <Linkitem href={`settings`} name={'Settings'}></Linkitem>
                    <Linkitem href={`edit`} name={'Edit'}></Linkitem>
                </div>
                <div>
                    <Routes>
                        <Route path={'posts'}> Hello jojo</Route>
                        <Route path={'settings'}> Hello jojo</Route>
                        <Route path={'edit'}> Hello jojo</Route>

                    </Routes>
                </div>

            </section>
        </>
    );
}

export default Profile;
