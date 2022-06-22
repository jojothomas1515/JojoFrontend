import React, {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import '../css/components/addPost.css'
import {getTinymce} from "@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE";
import {Editor} from "@tinymce/tinymce-react";

function AddPost(props) {

    return (
        <div className={'addpost-form-con'} enctype={'multipart/form-data'}>
            <form>
                <div className={'form-control'}><label htmlFor={'title'}>Title</label>
                    <input id={'title'} type={'text'}/></div>
                <div className={'form-control'}><label htmlFor={'summary'}>Summary</label>
                    <input id={'summary'} type={'text'}/></div>
                <div><Editor/></div>
                <div><label htmlFor={'cover_image'}>Cover Image {<FontAwesomeIcon icon={faImage}/>}</label>
                    <input id={'cover_image'} style={{display: 'none'}} type={'file'} accept={'image/*'}/></div>
                <div><input type={'submit'} className={'btn'} value={'Post'}/></div>


            </form>
        </div>
    );
}

export default AddPost;
