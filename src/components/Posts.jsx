import React, {useEffect, useState} from 'react';
import Post from "./Post";
import '../css/components/posts.css'

function Posts(props) {
    const [posts, setPosts] = useState([])


    async function fetch_post(link) {
        try {
            const res = await fetch(link, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
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
