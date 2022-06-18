import React from 'react';
import {Link} from "react-router-dom";

function Post({post}) {
    return (
        <Link to={'#'} key={post.id}>
            <div className="card" key={post.id}>
                <h3 className="card-header" >{post.heading}</h3>
                <div className="card-body" >
                    <img src={`http://192.168.9.101${post.cover_image}`} alt={'cool'}/>
                    <p>{post.summary}</p>
                </div>
                <p className="card-footer"> {post.author}</p>
                <p className="card-footer"> {post.date}</p>
            </div>
        </Link>
    );
}

export default Post;
