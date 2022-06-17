import '../css/pages/Home.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Posts from "../components/Posts";

export const Home = () => {
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
        <>
            <section className={'intro'}>
                <div className={'intro-con'}>
                    <h1 className="intro-header">Welcome here</h1>
                    <p className="intro-msg">

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut
                        culpa cum distinctio excepturi, fuga hic id praesentium reiciendis similique veniam voluptate
                        voluptates? Accusamus ad aliquam consequuntur cupiditate dolor, dolorem dolores earum eius
                        eligendi fuga illum ipsam molestiae, nulla omnis, praesentium quae quia quibusdam repellat totam
                        voluptate? Ex, molestias, voluptatem?</p>
                    <Link to={'about/'} className={'btn'} style={{width: "max-content"}}>Learn More</Link>
                </div>
            </section>
            <section className="posts-feed contain">

                {posts.map(post => {
                    return (
                        <Posts post={post}/>
                    );
                })}

            </section>
        </>

    )
}
