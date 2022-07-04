import React, {useContext} from 'react';
import {AuthContext} from "../utilities/AuthContext";
import Posts from "../components/Posts";

import "../css/pages/Home.css";

function Home(props) {
    const {user} = useContext(AuthContext)
    return (
        <>
            <section className="intro container">
                <div>
                    <h1>My React Project</h1>
                    <p>Just one react project,  to check out the repository</p>
                    <a className={'btn'}>Click Here</a>
                </div>
            </section>
                <Posts link={`${process.env.REACT_APP_API}`}/>


        </>
    );
}

export default Home;
