import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {Markup} from "interweave";

function Post({post, user, deletePost}) {
    // const optionRef = useRef()


    // function openOption() {
    //     optionRef.current.style.display === 'none' ? optionRef.current.style.display = 'block' : optionRef.current.style.display = 'none'
    // }

    return (
        <Link to={`viewpost/${post.id}`} key={post.id}>
            <div className="card">
                <div className={'profile-icon-con'}>
                    <img className={'profile-icon-image'} src={post.profile_image}/>
                    <p className="card-footer"> {post.author}</p>
                </div>
                {post.author === user.username ? <div className={'post-option'}>
                    <FontAwesomeIcon icon={faBars} onClick={()=>{
                        const drpd = document.getElementById(`${post.id}`)
                        drpd.style.display === 'none' ? drpd.style.display = 'block' : drpd.style.display = 'none'

                    }
                    }/>
                    <ul id={`${post.id}`}>
                        <li><Button onClick={() => {
                            deletePost(post.id)
                        }}>Delete</Button></li>

                    </ul>
                </div> : null}


                <h3 className="card-header">{post.heading}</h3>
                <div className="card-body">
                    <img src={`${post.cover_image}`} alt={'cool'}/>
                </div>
                <p className="card-footer"> {post.date}</p>
            </div>
        </Link>
    );
}

export default Post;
