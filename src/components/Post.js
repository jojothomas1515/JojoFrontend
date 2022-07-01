import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

function Post({post, user, deletePost}) {
    const optionRef = useRef()


    function openOption() {
        optionRef.current.style.display === 'none' ? optionRef.current.style.display = 'block' : optionRef.current.style.display = 'none'
    }

    return (
        <Link to={'#'} key={post.id}>
            <div className="card">
                <div className={'profile-icon-con'}>
                    <img className={'profile-icon-image'} src={post.profile_image}/>
                    <p className="card-footer"> {post.author}</p>
                </div>
                {post.author === user.username ? <div className={'post-option'}>
                    <FontAwesomeIcon icon={faBars} onClick={openOption}/>
                    <ul ref={optionRef}>
                        <li><Button onClick={() => {
                            deletePost(post.id)
                        }}>Delete</Button></li>

                    </ul>
                </div> : null}


                <h3 className="card-header">{post.heading}</h3>
                <div className="card-body">
                    <img src={`${post.cover_image}`} alt={'cool'}/>
                    <p>{post.summary}</p>
                </div>
                <p className="card-footer"> {post.date}</p>
            </div>
        </Link>
    );
}

export default Post;
