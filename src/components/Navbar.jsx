import React from 'react';
import {Link} from 'react-router-dom'
import '../css/components/navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen, faNavicon} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import Linkitem from "./Linkitem";


function Navbar(props) {
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
                <h3>Logo Here</h3>
                <div className={'nav-toggle-con'}>
                    <label for={'nav-toggle'}><FontAwesomeIcon icon={faNavicon} className={'fa-2x'}/></label>
                    <input type={'checkbox'} id={'nav-toggle'} className={'nav-toggle'}/>
                    <ul className={'nav-items-con'}>
                        <Linkitem href={'/'} name={'Home'}/>
                        <Linkitem href={'/profile/'} name={'Profile'}/>
                        <Linkitem href={'/addpost/'} name={'Add Post'}/>
                        <Linkitem href={'/about/'} name={'About'}/>
                        <Linkitem href={'/info/'} name={<FontAwesomeIcon icon={faDoorOpen}/>} classes={"logout-btn"}/>


                    </ul>
                </div>
            </div>

        </div>);
}

export default Navbar;

