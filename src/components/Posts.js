import React, {useContext, useEffect, useState} from 'react';
import Post from "./Post";
import '../css/components/posts.css'
import {AuthContext} from "../utilities/AuthContext";

function Posts(props) {
    const {accessToken} =  useContext(AuthContext)
    const [posts, setPosts] = useState([])


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
        fetch_post(`${process.env.REACT_APP_API}`)
    }, [])
    return (
        <section className="posts-feed contain">
            {posts.map(post => {
                return (
                    <Post post={post}/>
                );
            })}
        </section>
    );
}

export default Posts;
