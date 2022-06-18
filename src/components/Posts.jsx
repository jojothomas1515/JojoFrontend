import React from 'react';
import {useEffect, useState} from "react";
import Post from "./Post";
import '../css/components/posts.css'

function Posts(props) {
    const [posts, setPosts] = useState([])


    async function fetch_post(link) {
        const res = await fetch(link)
        const data = await res.json()
        setPosts([...data]);

    }

    useEffect(() => {
        fetch_post("http://192.168.9.101/")
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
