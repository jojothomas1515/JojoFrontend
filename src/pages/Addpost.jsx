import React, {useContext} from 'react';
import {AuthContext} from "../utilities/AuthContext";
import {useNavigate} from "react-router-dom";
import {Editor} from "@tinymce/tinymce-react";
import "../css/pages/addpost.css";



import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes
} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

function Addpost(props) {
    const {accessToken} = useContext(AuthContext)
    const navigate = useNavigate()

    const firebaseConfig = {

        apiKey: process.env.REACT_APP_firebase_apiKey,

        authDomain: process.env.REACT_APP_firebase_authDomain,

        projectId: process.env.REACT_APP_firebase_projectId,

        storageBucket: process.env.REACT_APP_firebase_storageBucket,

        messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,

        appId: process.env.REACT_APP_firebase_appId,

        measurementId: process.env.REACT_APP_firebase_measurementId

    };
    const firebaseApp = initializeApp(firebaseConfig);


    function upload_image(blobFile, success, failure) {
        const metadata = {
            contentType: 'image/jpeg'
        };

        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage);
        const imageRef = ref(storageRef, 'images')
        const thisRef = ref(imageRef, blobFile.filename())
        uploadBytes(thisRef, blobFile.blob(), metadata).then((snapshot) => {

            getDownloadURL(thisRef).then(url => success(url))

        }).catch(e => {
            console.log(e);
            failure('failed')
        })

    }


    function sendPost(e) {
        e.preventDefault()
        const heading = e.target.heading.value
        const post_field = e.target.post_field.value
        const profile_image = e.target.cover_image.files[0]
        const form = new FormData

        form.append("heading", heading)
        form.append("post_field", post_field)
        form.append("cover_image", profile_image)


        fetch(`${process.env.REACT_APP_API}/addpost`, {
                method: 'POST',
                body: form,
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        ).then(res => {
                if (res.status === 200) {
                }
                navigate('/')
            }
        )
    }


    return (
        <div className={"form-con"}>
            <form onSubmit={sendPost} className={'addpost-form'}>
                <div className={'heading-con'}><input type="text" name={'heading'} placeholder={'Heading'}/></div>
                <div className={'cover-image-select-con'}><label htmlFor="cover_image" className={'btn'}>Select Cover Image</label><input type="file" accept={'image/*'} name={'cover_image'} id={'cover_image'} style={{display:"none"}}/></div>

                <div><Editor textareaName={'post_field'}
                             initialValue="<p>Insert the content of the post here.</p>"
                             init={{
                                 height: "80vh",
                                 width: "100%",
                                 plugins: "fullscreen image a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker",
                                 toolbar2: 'alignleft alignright aligncenter a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
                                 toolbar1: ' fullscreen bold    italic    underline    strikethrough    justifyleft    justifycenter    justifyright   justifyfull    bullist    numlist    outdent    indent    cut    copy    paste    undo    redo    link    unlink    image    cleanup    help    code    hr    removeformat    formatselect    fontselect    fontsizeselect    styleselect    sub    sup   forecolor    backcolor    forecolorpicker    backcolorpicker    charmap    visualaid    anchor   newdocument    blockquote   separator',
                                 images_upload_handler: (blobInfo, success, failure) => {
                                     upload_image(blobInfo, success, failure)
                                 }
                             }}
                /></div>
                <div><input type="submit" value="Post" className={'btn'}/></div>
            </form>
        </div>
    );
}

export default Addpost;
