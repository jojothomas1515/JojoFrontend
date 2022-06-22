import React, {forwardRef, useEffect, useRef} from 'react';
import '../css/components/profileEdit.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

const ProfileEdit = forwardRef((props, ref) => {
        const image_input_ref = useRef(null)
        const image_tag_ref = useRef(null)
        const close_modal_ref = useRef(null)

        useEffect(() => {
            image_input_ref.current.addEventListener('change', () => {
                const fr = new FileReader()
                fr.onload = function (e) {
                    console.log(e.target)
                    image_tag_ref.current.src = e.target.result
                }
                fr.readAsDataURL(image_input_ref.current.files[0])

            })
            // close_modal_ref.current.addEventListener('click', () => {
            //     close_modal_ref.current.parentNode.style.display = 'none';
            // })
            document.addEventListener("click", ev => {
                if (ev.target.classList.contains('edit-profile')) ev.target.style.display='none';
            })


        }, [])

        return (
            <div className={'contain edit-profile'} ref={ref}>

                {/*<button className={'btn'} ref={close_modal_ref}><FontAwesomeIcon icon={faClose}/></button>*/}
                <form action={''} method={'POST'}>

                    <div><img src={require("../images/pages/index.jpeg")} alt="profile image" ref={image_tag_ref}/><label
                        htmlFor="profile_image"><FontAwesomeIcon icon={faImage}/></label><input style={{display: 'none'}}
                                                                                                ref={image_input_ref}
                                                                                                type="file"
                                                                                                name="profile_image"
                                                                                                id="profile_image"/>
                    </div>
                    <div><label htmlFor="firstname">First Name </label><input type="text" required/></div>
                    <div><label htmlFor="lastname">Last Name </label><input type="text" required/></div>
                    <div><label htmlFor="email">Email </label><input type="email" required/></div>
                    <div><input type="submit" className={'btn'} value={'Update'}/></div>
                </form>
            </div>
        );
    }
);
export default ProfileEdit;
