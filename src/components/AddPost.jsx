import React, {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";

function AddPost(props) {
    
    return (
        <div className={'addpost-form-con'} enctype={'multipart/form-data'}>
            <form>
                <div><label htmlFor={'title'}>Title</label>
                    <input id={'title'} type={'text'}/></div>
                <div><label htmlFor={'summary'}>Summary</label>
                    <input id={'summary'} type={'text'}/></div>
                <div><label htmlFor={'cover_image'}>Cover Image {<FontAwesomeIcon icon={faImage}/>}</label>
                    <input id={'cover_image'} style={{display: 'none'}} type={'file'} accept={'image/*'}/></div>
                <div><input type={'submit'} value={'Post'}/></div>


            </form>
        </div>
    );
}

export default AddPost;
