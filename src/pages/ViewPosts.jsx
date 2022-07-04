import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../utilities/AuthContext";
import {Markup} from "interweave";


function ViewPosts() {
    const {accessToken} = useContext(AuthContext)
    const [post, setPost] = useState([])


    useEffect(() => {
        async function fetch_post(link) {
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            await sleep(2000);
            try {
                const res = await fetch(`${link}/viewpost/${parseInt(window.location.pathname.split("/").pop())}`, {
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                    }
                })
                const data = await res.json()
                console.log(data)
                if (res.status) {
                    setPost(data);

                }
            } catch (e) {
                console.log('error')
            }

        }

        fetch_post(process.env.REACT_APP_API)


    }, [])
    return (
        <>
            {post.post_field ? <Markup content={post.post_field} className={"contain"}/> :
                <h1> No Post content, Or content is loading</h1>}
        </>
    );
}

export default ViewPosts;
