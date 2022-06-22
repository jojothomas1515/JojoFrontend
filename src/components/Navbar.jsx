import React from 'react';
import {Link} from 'react-router-dom'
import '../css/components/navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen, faNavicon} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import Linkitem from "./Linkitem";


function Navbar(props) {
    function logout(){
        localStorage.removeItem('accessToken')
    }
    useEffect(e => {
        const navbar = document.querySelector('.navbar');
        const check_toggle = navbar.querySelector('#nav-toggle')
        const nav_links = navbar.querySelectorAll('a')
        nav_links.forEach(link => {
            link.addEventListener('click', () => {
                check_toggle.checked = false;
            })
        })
        window.addEventListener('scroll', e => {
            if (window.scrollY >= 90) navbar.style.opacity = .7; else navbar.style.opacity = 1;
        })
        return window.removeEventListener('click', () => {
        });
    }, [])
    return (

        <div className={'navbar'}>
            <div className={'navbar-con'}>
                <h3>{process.env.REACT_APP_LOGO_TITLE}</h3>
                <div className={'nav-toggle-con'}>
                    <label for={'nav-toggle'}><FontAwesomeIcon icon={faNavicon} className={'fa-2x'}/></label>
                    <input type={'checkbox'} id={'nav-toggle'} className={'nav-toggle'}/>
                    <ul className={'nav-items-con'}>
                        <Linkitem href={'/'} name={'Home'} classes={'nav-btn'}/>
                        <Linkitem href={'/profile/'} name={'Profile'} classes={'nav-btn'}/>
                        <Linkitem href={'/addpost/'} name={'Add Post'} classes={'nav-btn'}/>
                        <Linkitem href={'/about/'} name={'About'} classes={'nav-btn'}/>
                        <button classes={"nav-btn logout-btn"} onClick={logout}><FontAwesomeIcon icon={faDoorOpen}/></button>


                    </ul>
                </div>
            </div>

        </div>);
}

export default Navbar;

