import React from 'react';
import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <Link to={'#'} key={post.id}>
            <div className="card" key={post.id}>
                <div className={'profile-icon-con'}>
                    <img className={'profile-icon-image'} src={process.env.REACT_APP_API + post.profile_image}/>
                    <p className="card-footer"> {post.author}</p>
                </div>

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
