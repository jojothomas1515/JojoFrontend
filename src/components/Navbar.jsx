import React, {useContext, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen, faNavicon} from "@fortawesome/free-solid-svg-icons";
import LinkItems from "./LinkItems";
import '../css/components/navbar.css'
import {AuthContext} from "../utilities/AuthContext";

function Navbar(props) {
    const {logout} = useContext(AuthContext)

    useEffect(() => {
            const navbar = document.querySelector('.navbar')
            const check_toggle = navbar.querySelector('#nav-toggle')
            const navlinks = navbar.querySelectorAll('a')
            navlinks.forEach(link => {
                link.addEventListener('click', () => {
                    check_toggle.checked = false
                })
            })
            window.addEventListener('scroll', e => {
                if (window.scrollY >= 100) navbar.style.opacity = .5
                else navbar.style.opacity = 1

            })
        }
        , [])
    return (
        <>
        <div className={'navbar'}>
            <h2>{process.env.REACT_APP_LOGO_TITLE}</h2>

            <nav className={'nav'}>
                <label htmlFor={'nav-toggle'}><FontAwesomeIcon icon={faNavicon} style={{fontSize: '2rem'}}/></label>
                <input type={"checkbox"} id={'nav-toggle'} style={{display: "none"}}/>

                <ul className="nav-items">
                    <LinkItems href={'/'} classes={'btn'} name={'Home'}/>

                    <LinkItems href={'/profile'} classes={'btn'} name={'Profile'}/>
                    <LinkItems href={'/addpost'} classes={'btn'} name={'Add Post'}/>

                    <a className={'btn btn-danger'} ><FontAwesomeIcon onClick={(e) => {

                        logout()
                    }} icon={faDoorOpen}/></a>
                </ul>
            </nav>
        </div>
            </>
    );
}

export default Navbar;
