import React, {useContext} from 'react';
import {AuthContext} from "../utilities/AuthContext";

function Addpost(props) {
    const {accessToken} = useContext(AuthContext)

    function sendPost(e) {
        e.preventDefault()
        const heading = e.target.heading.value
        const summary = e.target.summary.value
        const profile_image = e.target.cover_image.files[0]
        const form = new FormData

        form.append("heading", heading)
        form.append("summary", summary)
        form.append("cover_image", profile_image)

        fetch(`${process.env.REACT_APP_API}/addpost`, {
                method: 'POST',
                body: form,
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        ).then(res =>console.log(res))
    }


    return (
        <div>
            <form onSubmit={sendPost}>
                <div><input type="text" name={'heading'} placeholder={'Heading'}/></div>
                <div><input type="text" name={'summary'} placeholder={'Summary'}/></div>
                <div><input type="file" accept={'image/*'} name={'cover_image'}/></div>
                <div><input type="submit" value="Post"/></div>
            </form>
        </div>
    );
}

export default Addpost;
