import React, {useContext, useEffect, useState} from 'react';
import Post from "./Post";
import '../css/components/posts.css'
import {AuthContext} from "../utilities/AuthContext";

function Posts({link}) {
    const {accessToken, user} =  useContext(AuthContext)
    const [posts, setPosts] = useState([])

    function deletePost(id){
        fetch(`${process.env.REACT_APP_API}/removepost/${id}`, {
            method:'DELETE',
            headers:{
                "Authorization": `Bearer ${accessToken}`,

            }
        }).then(res =>{
            if(res.status=== 200 ) {alert("Post Deleted");fetch_post(link)}
            else alert('failed')
        })
    }
    async function fetch_post(link) {
        try {
            const res = await fetch(link, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                }
            })
            const data = await res.json()
            setPosts([...data]);
        } catch (e) {
            console.log('error')
        }

    }

    useEffect(() => {
        fetch_post(link)
    }, [])

    return (
        <section className="posts-feed contain">
            {posts.map(post => {
                return (
                    <Post post={post} user={user} deletePost={deletePost} />
                );
            })}
        </section>
    );
}

export default Posts;
